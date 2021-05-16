import React from 'react';
import ProductCard from '../../ui/ProductCard/ProductCard';
import Slider from '../../ui/Slider/Slider';

const ProductSlider = ({ header, items }) => {
  return (
    <Slider sliderContent={items} contentSize={2} slideHeading={header}>
      <ProductCard />
    </Slider>
  );
};

export default ProductSlider;
