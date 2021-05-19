import React, { useState, useEffect } from 'react';
import DropMenu from '../../layout/Nav/DropMenu';
import classes from './DropDown.module.css';
import { FaChevronDown } from 'react-icons/fa';
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
}) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [title, setTitle] = useState(titleKey);
  const [value, setValue] = useState(valueKey);
  const iconClass = drop ? `${classes.icon} ${classes.dropped}` : classes.icon;

  useEffect(() => {
    if (selectOptions && !type) {
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

    if (!selectOptions && type && typeof type === 'string') {
      let numOptions = [];
      let revisedOps = [];
      if (type.toLowerCase() === 'number') {
        const incStep = step || 1;
        numOptions = numberList(min, max, incStep, true);
        numOptions.unshift({
          id: 'nums-all-001-009',
          name: placeHolder || 'All Numbers',
          value: 'all',
        });
      }

      if (type.toLowerCase() === 'year') {
        const year = new Date().getFullYear();
        const initYear = min || 1930;
        const incStep = step || 1;
        numOptions = reverse
          ? numberList(initYear, year, incStep, true).reverse()
          : numberList(initYear, year, incStep, true);
        numOptions.unshift({
          id: 'year-0001-0-all',
          name: 'All Years',
          value: 'all',
        });
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
  }, [defaultOptionId, selectOptions, type, min, max, placeHolder, step]);

  const handleOptionSelect = (id) => {
    const selectedOption = options.find((option) => option.id === id);
    const updatedOptions = options.map((option) =>
      option.id === id
        ? { ...option, selected: true }
        : { ...option, selected: false }
    );

    setOptions(updatedOptions);
    setSelected(selectedOption);
    onSelect && onSelect(selectedOption[value]);
  };

  if (options.length === 0) {
    return null;
  }

  return (
    <div className={classes.DropDown} style={style}>
      <button
        className={classes.DropBtn}
        onClick={() => {
          onClick && onClick(name);
        }}
        type='button'
        name={name}
      >
        <span>{selected[title]}</span>
        <span>
          <FaChevronDown
            size='16px'
            style={{ margin: '3px 4px 0 10px' }}
            className={iconClass}
          />
        </span>
      </button>
      {drop && (
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

export default DropDown;
