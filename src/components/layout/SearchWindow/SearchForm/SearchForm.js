import React, { useReducer, lazy, Suspense } from 'react';
import Loader from '../../../ui/Loader/Loader';
import ByMake from '../ByMake/ByMake';
import FormTabs from '../FormTabs/FormTabs';
import TabButtons from '../TabButtons/TabButtons';
import classes from './SearchForm.module.scss';

const ByBody = lazy(() => import('../ByBody/ByBody'));
const ByPrice = lazy(() => import('../ByPrice/ByPrice'));
const Financing = lazy(() => import('../../Financing/Financing'));

const btns = [
  {
    id: 'form-001-main-501',
    name: 'Used Car',
    selected: true,
    value: 'used-car',
  },
  {
    id: 'form-002-main-402',
    name: 'New Car',
    selected: false,
    value: 'new-car',
  },
  {
    id: 'form-003-main-303',
    name: 'Certified Per-Owned',
    selected: false,
    value: 'certified',
  },
  {
    id: 'form-001-main-204',
    name: 'For Sale By Owner',
    selected: false,
    value: 'byowner',
  },
  {
    id: 'form-001-main-105',
    name: 'Financing',
    selected: false,
    value: 'financing',
  },
];

const formTabs = [
  {
    id: 'ft-bymake-0001',
    title: 'By Make/Model',
    selected: true,
    value: 'bymake',
  },
  {
    id: 'ft-bybody-0002',
    title: 'By Body Style',
    selected: false,
    value: 'bybody',
  },
  {
    id: 'ft-byprice-0003',
    title: 'By Price',
    selected: false,
    value: 'byprice',
  },
];

const initState = {
  buttons: btns,
  tabs: formTabs,
  selectedButton: 'used-car',
  byMake: true,
  byBody: false,
  byPrice: false,
  isCertified: false,
  isByOwner: false,
  isFinancing: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SelectForm':
      return {
        ...state,
        buttons: state.buttons.map((btn) =>
          btn.id === payload.id
            ? { ...btn, selected: true }
            : { ...btn, selected: false }
        ),
        isCertified: payload.selectedButton === 'certified',
        isByOwner: payload.selectedButton === 'byowner',
        isFinancing: payload.selectedButton === 'financing',
        byBody: false,
        byMake: payload.selectedButton !== 'byowner' ? true : false,
        byPrice: payload.selectedButton !== 'byowner' ? false : true,
        tabs: state.tabs.map((tab) =>
          tab.id ===
          (payload.selectedButton !== 'byowner'
            ? 'ft-bymake-0001'
            : 'ft-byprice-0003')
            ? { ...tab, selected: true }
            : { ...tab, selected: false }
        ),
      };

    case 'ByBody':
      return {
        ...state,
        byBody: true,
        byMake: false,
        byPrice: false,
        tabs: state.tabs.map((tab) =>
          tab.id === payload
            ? { ...tab, selected: true }
            : { ...tab, selected: false }
        ),
      };

    case 'ByMake':
      return {
        ...state,
        byBody: false,
        byMake: true,
        byPrice: false,
        tabs: state.tabs.map((tab) =>
          tab.id === payload
            ? { ...tab, selected: true }
            : { ...tab, selected: false }
        ),
      };

    case 'ByPrice':
      return {
        ...state,
        byBody: false,
        byMake: false,
        byPrice: true,
        tabs: state.tabs.map((tab) =>
          tab.id === payload
            ? { ...tab, selected: true }
            : { ...tab, selected: false }
        ),
      };

    default:
      return state;
  }
};

const SearchForm = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const {
    buttons,
    tabs,
    byMake,
    byBody,
    byPrice,
    isCertified,
    isByOwner,
    isFinancing,
  } = state;

  const handleFormSelect = (id) => {
    const selectedButton = buttons.find((btn) => btn.id === id).value;
    dispatch({ type: 'SelectForm', payload: { id, selectedButton } });
  };

  const handleFormTabSelect = (value, id) => {
    switch (value) {
      case 'bybody':
        dispatch({ type: 'ByBody', payload: id });
        break;
      case 'bymake':
        dispatch({ type: 'ByMake', payload: id });
        break;
      case 'byprice':
        dispatch({ type: 'ByPrice', payload: id });
        break;

      default:
        dispatch({ type: 'ByBody', payload: id });
    }
  };

  let formType = null;

  if (byMake && !isFinancing && !isByOwner) {
    formType = <ByMake />;
  }

  if (byBody && !isFinancing && !isByOwner) {
    formType = (
      <Suspense fallback={<Loader />}>
        <ByBody priceFilter />
      </Suspense>
    );
  }

  if ((byPrice && !isFinancing) || isByOwner) {
    formType = (
      <Suspense fallback={<Loader />}>
        <ByPrice />
      </Suspense>
    );
  }

  if (isFinancing) {
    formType = (
      <Suspense fallback={<Loader />}>
        <Financing
          header='Shop with real rates in hand'
          to='/financing'
          btnType='success'
          btnTitle='See my options'
        />
      </Suspense>
    );
  }

  return (
    <div className={classes.FormShell}>
      <TabButtons onSelect={handleFormSelect} buttons={buttons} />

      <form
        className={classes.SearchForm}
        name='Filter-Form'
        onSubmit={onSubmit}
      >
        {!isCertified && !isByOwner && !isFinancing && (
          <FormTabs onSelect={handleFormTabSelect} formTabs={tabs} />
        )}
        {formType}
      </form>
    </div>
  );
};

export default SearchForm;
