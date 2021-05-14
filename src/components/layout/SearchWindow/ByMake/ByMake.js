import React from 'react';
import DropDown from '../../../ui/DropDown/DropDown';
import Button from '../../../ui/Button/Button';
import classes from './ByMake.module.css';
import { useDropForm } from '../../../../hooks/useDropForm';

const brands = [
  {
    id: 'car-all',
    make: 'All Brands',
    value: 'all-brands',
  },
  {
    id: 'car-00001',
    make: 'Acura',
    value: 'acura',
  },
  {
    id: 'car-00002',
    make: 'Alfa Romeo',
    value: 'alfaromeo',
  },
  {
    id: 'car-00003',
    make: 'Audi',
    value: 'audi',
  },
  {
    id: 'car-00004',
    make: 'BMW',
    value: 'bmw',
  },
  {
    id: 'car-00005',
    make: 'Buick',
    value: 'buick',
  },
  {
    id: 'car-00006',
    make: 'Cadillac',
    value: 'cadillac',
  },
  {
    id: 'car-00007',
    make: 'Chevrolet',
    value: 'chevrolet',
  },
  {
    id: 'car-00008',
    make: 'Chrysler',
    value: 'chrysler',
  },
  {
    id: 'car-00009',
    make: 'Dodge',
    value: 'dodge',
  },
  {
    id: 'car-00010',
    make: 'Fiat',
    value: 'fiat',
  },
  {
    id: 'car-00011',
    make: 'Ford',
    value: 'ford',
  },
];

const cities = [
  {
    id: 'city-000-cyprus',
    name: 'All Cities',
    value: 'all-cities',
  },
  {
    id: 'city-001-cyprus',
    name: 'Nicosia',
    value: 'nicosia',
  },
  {
    id: 'city-002-cyprus',
    name: 'Famagusta',
    value: 'famagusta',
  },
  {
    id: 'city-003-cyprus',
    name: 'Kyrenia',
    value: 'kyrenia',
  },
  {
    id: 'city-004-cyprus',
    name: 'Iskele',
    value: 'iskele',
  },
  {
    id: 'city-005-cyprus',
    name: 'Lefke',
    value: 'lefke',
  },
];

const ByMake = () => {
  const {
    firstDrop: brandDrop,
    secondDrop: modelDrop,
    thirdDrop: cityDrop,
    handleDropClick,
  } = useDropForm(['Brand', 'Model', 'City']);

  return (
    <div className={classes.Inputs}>
      <span className={classes.FormElShell}>
        <DropDown
          defaultOptionId={brands[0].id}
          selectOptions={brands}
          titleKey='make'
          valueKey='value'
          onSelect={(val) => {
            console.log(val);
            handleDropClick();
          }}
          drop={brandDrop}
          onClick={handleDropClick}
          name='Brand'
        />
      </span>
      <span className={classes.FormElShell}>
        <DropDown
          defaultOptionId={brands[0].id}
          selectOptions={brands}
          titleKey='make'
          valueKey='value'
          onSelect={(val) => {
            console.log(val);
            handleDropClick();
          }}
          drop={modelDrop}
          onClick={handleDropClick}
          name='Model'
        />
      </span>
      <span className={classes.FormElShell}>
        <DropDown
          defaultOptionId={cities[0].id}
          selectOptions={cities}
          titleKey='name'
          valueKey='value'
          onSelect={(val) => {
            console.log(val);
            handleDropClick();
          }}
          drop={cityDrop}
          onClick={handleDropClick}
          name='City'
        />
      </span>

      <Button btnType='success'>Search</Button>
    </div>
  );
};

export default ByMake;
