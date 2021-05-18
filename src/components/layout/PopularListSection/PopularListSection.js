import React, { Fragment, useState, useEffect } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import classes from './PopularListSection.module.css';

const PopularListSection = ({ header, items, Component }) => {
  const [itemsList, setBrandsList] = useState([]);
  const [all, setAll] = useState(false);

  useEffect(() => {
    if (all) {
      setBrandsList(items);
    } else {
      setBrandsList(items.slice(0, 6));
    }
  }, [all, items]);

  const handleBrandsShow = () => {
    setAll((prevState) => !prevState);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <div className={classes.Header}>
        <div>
          {header}{' '}
          <span>
            ({itemsList.length} of {items.length} brands is shown)
          </span>
        </div>
        <span className={classes.ForSmallScreen}>
          ({itemsList.length} of {items.length} brands is shown)
        </span>
        {items.length > 6 && (
          <span>
            {!all ? (
              <BsEyeFill
                title='Show All'
                color='blue'
                style={{ margin: '0 15px -10px 0', cursor: 'pointer' }}
                onClick={handleBrandsShow}
              />
            ) : (
              <BsEyeSlashFill
                title='Hide Brands'
                color='red'
                style={{ margin: '0 15px -10px 0', cursor: 'pointer' }}
                onClick={handleBrandsShow}
              />
            )}
          </span>
        )}
      </div>
      <div className={classes.PopularBrands}>
        {itemsList.map((item) => (
          <Fragment key={item.id}>
            {React.cloneElement(Component, { ...item })}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default PopularListSection;
