import React, { useState, useEffect } from 'react';
import DropMenu from '../../layout/Nav/DropMenu';
import classes from './DropDown.module.css';
import { FaChevronDown } from 'react-icons/fa';

const DropDown = ({
  selectOptions,
  defaultOptionId,
  titleKey,
  valueKey,
  onSelect,
  onClick,
  drop,
  name,
}) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const iconClass = drop ? `${classes.icon} ${classes.dropped}` : classes.icon;

  useEffect(() => {
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
  }, [defaultOptionId, selectOptions]);

  const handleOptionSelect = (id) => {
    const selectedOption = options.find((option) => option.id === id);
    const updatedOptions = options.map((option) =>
      option.id === id
        ? { ...option, selected: true }
        : { ...option, selected: false }
    );

    setOptions(updatedOptions);
    setSelected(selectedOption);
    onSelect && onSelect(selectedOption[valueKey]);
  };

  return (
    <div className={classes.DropDown}>
      <button
        className={classes.DropBtn}
        onClick={() => {
          onClick && onClick(name);
        }}
        type='button'
        name={name}
      >
        <span>{selected[titleKey]}</span>
        <span>
          <FaChevronDown
            size='16px'
            style={{ margin: '3px 4px 0 10px' }}
            className={iconClass}
          />
        </span>
      </button>
      {drop && (
        <DropMenu top='39px' left='5px'>
          {options.map((option) => (
            <span
              className={`${classes.Option} ${
                option.selected ? classes.selected : ''
              }`}
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option[titleKey]}
            </span>
          ))}
        </DropMenu>
      )}
    </div>
  );
};

export default DropDown;
