import React from 'react';
import ProductCard from '../../ui/ProductCard/ProductCard';
import Slider from '../../ui/Slider/Slider';

const products = [
  {
    id: 'product-00-0012',
    name: 'My Silly product',
    text: 'Long text',
  },
  {
    id: 'product-01-0013',
    name: 'My Silly product 2',
    text: 'Long and silly text',
  },
];

const ProductSlider = () => {
  return (
    <Slider sliderContent={products} contentSize={2}>
      <ProductCard />
    </Slider>
  );
};

export default ProductSlider;
