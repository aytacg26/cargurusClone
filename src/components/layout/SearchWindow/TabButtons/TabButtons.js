import React from 'react';
import TabButton from '../../../ui/TabButton/TabButton';
import classes from './TabButtons.module.scss';

const TabButtons = ({ buttons, onSelect }) => {
  return (
    <div className={classes.TabButtons}>
      {buttons.map((btn) => (
        <TabButton
          key={btn.id}
          selected={btn.selected}
          onClick={() => onSelect(btn.id)}
        >
          {btn.name}
        </TabButton>
      ))}
    </div>
  );
};

export default TabButtons;
