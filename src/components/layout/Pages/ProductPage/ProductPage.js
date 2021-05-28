import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import classes from './ProductPage.module.scss';
import ShareData from './ShareData/ShareData';
import DealerInteraction from './DealerInteraction/DealerInteraction';
import ProductSection from './ProductSection/ProductSection';
import HeaderSection from './HeaderSection/HeaderSection';

const ProductPage = (props) => {
  return (
    <PageContainer>
      <div className={classes.ProductDetailsContainer}>
        <HeaderSection
          productHeader='BMW M3 Convertible Silver'
          dealer='Luxury Autos Ltd.'
          location='Nicosia'
        />
        <div className={classes.DetailsSections}>
          <ShareData />
          <ProductSection />
          <DealerInteraction
            rate={3.4}
            numberOfReviews={25}
            dealStatus='uncertain'
            priceDifference={3500}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductPage;
