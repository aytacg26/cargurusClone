import React from 'react';
import { useParams } from 'react-router-dom';
import ListProductCard from '../../../ui/ListProductCard/ListProductCard';
import PageContainer from '../PageContainer/PageContainer';
import NotifyWindow from '../ProductPage/ProductSection/NotifyWindow/NotifyWindow';
import Filters from './Filters/Filters';
import classes from './Products.module.scss';

/**
 *
 * @TODO : 1- Divide to Subcomponents,
 *         2- Refactor styles,
 *         3- Take NotifyWindow component to UI
 *         4- Add props and test with products prop
 *         5- Create component for each filter window
 *         6- Add Data Section of Products
 *         7- Add filter by deal & pagination as seperate components
 *         8- Add Search Form
 *         9- Add hide-show functionality to filter section
 *         10- Add Financing window to the bottom of Products List
 *
 */
const Products = () => {
  const { bodystyle, section } = useParams();

  //Products will be fetched according to body style and section
  console.log(bodystyle);
  console.log(section);

  return (
    <PageContainer>
      <div className={classes.HeaderSection}>
        <h1>Used Cars Test Page</h1>
      </div>
      <div className={classes.Wrapper}>
        <div className={classes.FilteredProducts}>
          <div className={classes.FilterSection}>
            <div>Search Form</div>
            <Filters />
          </div>
        </div>
        <div className={classes.ProductsList}>
          <div className={classes.NotifyWindowContainer}>
            <NotifyWindow />
          </div>
          <div>Filter By Deal DropDown and Pagination Section</div>
          <div className={classes.Products}>
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Products;

/**
 * BODY STYLE PARAMS :
 *  > suvcrossover
 *  > sedan
 *  > pickup
 *  > coupe
 *  > hatchback
 *  > convertible
 *  > wagon
 *  > minivan
 */
