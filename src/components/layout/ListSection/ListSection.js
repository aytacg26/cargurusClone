import React, { Fragment, useState, useEffect } from 'react';
import ShowHideIcon from '../../ui/ShowHideIcon/ShowHideIcon';
import classes from './ListSection.module.scss';

const ListSection = ({ header, items, Component }) => {
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
          <ShowHideIcon
            show={all}
            onClick={handleBrandsShow}
            style={{ margin: '0 15px -10px 0', cursor: 'pointer' }}
          />
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

export default ListSection;
