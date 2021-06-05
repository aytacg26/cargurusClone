import React, { useState, useEffect, useRef } from 'react';
import DropMenu from '../../layout/Nav/DropMenu';
import classes from './DropDown.module.scss';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { numberList } from '../../../utils/utilsFuncs';

const DropDown = ({
  selectOptions,
  defaultOptionId,
  titleKey,
  valueKey,
  onSelect,
  onClick,
  drop,
  name,
  type,
  max,
  min,
  step,
  style,
  placeHolder,
  reverse,
  onClear,
  dropValue,
}) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [dropVal, setDropVal] = useState(null);
  const [initValState, setInitValState] = useState(dropValue);
  const [title, setTitle] = useState(titleKey);
  const [value, setValue] = useState(valueKey);
  const [clearFilter, setClearFilter] = useState(false);
  const [dropDown, setDropDown] = useState(drop);
  // let iconClass = drop ? `${classes.icon} ${classes.dropped}` : classes.icon;
  let iconClass = dropDown
    ? `${classes.icon} ${classes.dropped}`
    : classes.icon;
  const dropDownRef = useRef();

  useEffect(() => {
    if (dropDown) {
      const handleClick = (event) => {
        if (event.target.name !== name) {
          setDropDown(false);
        } else {
          setDropDown((prevState) => !prevState);
        }
      };

      const handleKeyUp = (e) => {
        if (e.key === 'escape' || e.which === 27) {
          setDropDown(false);
        }
      };

      document.addEventListener('click', handleClick);
      document.addEventListener('keyup', handleKeyUp);

      return () => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [name, dropDown]);

  useEffect(() => {
    if (selectOptions && !type && !clearFilter) {
      const revisedOps = selectOptions.map((option) =>
        option.id === defaultOptionId
          ? { ...option, selected: true }
          : { ...option, selected: false }
      );

      const defaultOption = revisedOps.find(
        (option) => option.id === defaultOptionId
      );

      setSelected(defaultOption);
      setOptions(revisedOps);
    }

    if (!selectOptions && type && typeof type === 'string' && !clearFilter) {
      let numOptions = [];
      let revisedOps = [];

      if (type.toLowerCase() === 'number') {
        const incStep = step || 1;
        numOptions = numberList(min, max, incStep, true);

        if (!clearFilter) {
          numOptions.unshift({
            id: 'nums-all-001-009',
            name: placeHolder || 'All Numbers',
            value: 'all',
          });
        }
      }

      if (type.toLowerCase() === 'year') {
        const year =
          (typeof max === 'number' && max) || new Date().getFullYear();
        const initYear = (typeof min === 'number' && min) || 1930;
        const incStep = step || 1;
        numOptions = reverse
          ? numberList(initYear, year, incStep, true).reverse()
          : numberList(initYear, year, incStep, true);

        if (!clearFilter) {
          numOptions.unshift({
            id: 'year-0001-0-all',
            name: 'All Years',
            value: 'all',
          });
        }
      }

      revisedOps = numOptions.map((option, index) =>
        index === 0
          ? { ...option, selected: true }
          : { ...option, selected: false }
      );

      setSelected(revisedOps[0]);
      setOptions(revisedOps);
      setTitle('name');
      setValue('value');
    }
    //eslint-disable-next-line
  }, [
    defaultOptionId,
    selectOptions,
    type,
    placeHolder,
    step,
    reverse,
    min,
    max,
    clearFilter,
  ]);

  useEffect(() => {
    if (dropValue && dropValue !== initValState) {
      setDropVal(dropValue);
    } else {
      setClearFilter(false);
      setInitValState(dropValue);
    }
  }, [dropValue, dropVal, initValState]);

  const handleOptionSelect = (id) => {
    const selectedOption = options.find((option) => option.id === id);
    const updatedOptions = options.map((option) =>
      option.id === id
        ? { ...option, selected: true }
        : { ...option, selected: false }
    );

    setOptions(updatedOptions);
    setSelected(selectedOption);
    setClearFilter(true);
    onSelect && onSelect(selectedOption[value]);
  };

  const handleClear = () => {
    onClear && onClear();
    setClearFilter(false);
  };

  if (options.length === 0) {
    return null;
  }

  return (
    <div className={classes.DropDown} style={style} ref={dropDownRef}>
      <button
        className={classes.DropBtn}
        onClick={() => {
          onClick && onClick(name);
          setDropDown(true);
        }}
        type='button'
        name={name}
      >
        {selected[title]}
        <span>
          <FaChevronDown
            size='16px'
            style={{ margin: '3px 4px 0 10px' }}
            className={iconClass}
          />
        </span>
      </button>
      {clearFilter && (
        <span>
          <FaTimes
            style={{
              margin: '3px 25px 0 10px',
              background: 'transparent',
              width: 18,
              height: 18,
              cursor: 'pointer',
              borderRadius: '50%',
            }}
            className={classes.icon}
            color='red'
            onClick={handleClear}
          />
        </span>
      )}
      {dropDown && (
        <DropMenu top='39px'>
          {options.map((option) => (
            <span
              className={`${classes.Option} ${
                option.selected ? classes.selected : ''
              }`}
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option[title]}
            </span>
          ))}
        </DropMenu>
      )}
    </div>
  );
};

export default React.memo(DropDown);
