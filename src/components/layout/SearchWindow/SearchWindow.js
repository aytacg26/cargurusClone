import React from 'react';
import classes from './SearchWindow.module.scss';
import SearchForm from './SearchForm/SearchForm';

const SearchWindow = ({ header }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted...');
  };

  return (
    <div className={classes.SearchWindow}>
      <h1>{header}</h1>
      <SearchForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SearchWindow;
