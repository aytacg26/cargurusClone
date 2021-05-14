import React from 'react';
import FormTab from './FormTab';
import classes from './FormTabs.module.css';

const FormTabs = ({ onSelect, formTabs }) => {
  return (
    <div className={classes.FormTabs}>
      {formTabs.map((tab) => (
        <FormTab
          key={tab.id}
          title={tab.title}
          selected={tab.selected}
          value={tab.value}
          onSelect={() => onSelect(tab.value, tab.id)}
        />
      ))}
    </div>
  );
};

export default FormTabs;
