import React from 'react';
import ProductCard from '../../../ui/ProductCard/ProductCard';
import ListSection from '../../ListSection/ListSection';
import RecentActivities from '../../RecentActivities/RecentActivities';
import DetailedSearchForm from '../../SearchWindow/DetailedSearchForm/DetailedSearchForm';
import PageContainer from '../PageContainer/PageContainer';
import classes from './UsedCars.module.scss';
const popularUsedCars = [
  {
    id: 'popular-used-0001',
    header: 'Chevrolet Corvette Coupe RWD',
    price: '11,000',
    url: '/usedcars/popular-used-0001',
    image:
      'https://i.ibb.co/58BzbQx/1991-chevrolet-corvette-pic-1355465292139602171-1024x768.jpg',
    year: 1991,
  },
  {
    id: 'popular-used-0002',
    header: 'Chevrolet Corvette Convertible RWD',
    price: '28,995',
    url: '/usedcars/popular-used-0002',
    image:
      'https://i.ibb.co/tXDVhqV/2008-chevrolet-corvette-pic-8405479132711759244-1024x768.jpg',
    year: 2008,
  },
  {
    id: 'popular-used-0003',
    header: 'Chevrolet Corvette ZR1 1ZR Coupe RWD',
    price: '149,995',
    url: '/usedcars/popular-used-0003',
    image:
      'https://i.ibb.co/VNmJpNM/2019-chevrolet-corvette-pic-9018223043895571996-1024x768.jpg',
    year: 2019,
  },
  {
    id: 'popular-used-0004',
    header: 'Chevrolet Corvette Z06 3LZ Coupe RWD',
    price: '80,999',
    url: '/usedcars/popular-used-0004',
    image:
      'https://i.ibb.co/0DNZjyq/2016-chevrolet-corvette-pic-1083841462673765789-1024x768.jpg',
    year: 2016,
  },
  {
    id: 'popular-used-0005',
    header: 'Chevrolet Corvette Stingray 1LT Convertible RWD',
    price: '99,999',
    url: '/usedcars/popular-used-0005',
    image:
      'https://i.ibb.co/J2crn73/2021-chevrolet-corvette-pic-5465566223307647062-1024x768.jpg',
    year: 2021,
  },
  {
    id: 'popular-used-0006',
    header: 'Chevrolet Corvette Grand Sport 1LT Convertible RWD',
    price: '61,986',
    url: '/usedcars/popular-used-0006',
    image:
      'https://i.ibb.co/f8MFwHy/2017-chevrolet-corvette-pic-8048989108811306137-1024x768.jpg',
    year: 2017,
  },
  {
    id: 'popular-used-0007',
    header: 'Chevrolet Corvette Stingray 1LT Coupe RWD',
    price: '55,000',
    url: '/usedcars/popular-used-0007',
    image:
      'https://i.ibb.co/dfCZbQg/2019-chevrolet-corvette-pic-9018223043895571996-1024x768.jpg',
    year: 2019,
  },
  {
    id: 'popular-used-0008',
    header: 'Ford Fiesta SE FWD',
    price: '10,995',
    url: '/usedcars/popular-used-0008',
    image:
      'https://i.ibb.co/SrNxCr2/2019-ford-fiesta-pic-3125676983034149309-1024x768.jpg',
    year: 2019,
  },
  {
    id: 'popular-used-0009',
    header: 'Ford Fiesta SE FWD',
    price: '12,995',
    url: '/usedcars/popular-used-0009',
    image:
      'https://i.ibb.co/cwvGcn0/2019-ford-fiesta-pic-5075961294003593843-1024x768.jpg',
    year: 2019,
  },
  {
    id: 'popular-used-0010',
    header: 'Audi A4 2.0T ultra Premium FWD',
    price: '21,495',
    url: '/usedcars/popular-used-0010',
    image:
      'https://i.ibb.co/jL4kN3G/2017-audi-a4-pic-3920156294630218243-1024x768.jpg',
    year: 2017,
  },
  {
    id: 'popular-used-0011',
    header: 'BMW 3 Series 328i Sedan RWD',
    price: '14,600',
    url: '/usedcars/popular-used-0011',
    image:
      'https://i.ibb.co/bgkNt7D/2015-bmw-3-series-pic-8930563024803249318-1024x768.jpg',
    year: 2015,
  },
  {
    id: 'popular-used-0012',
    header: 'BMW 3 Series 335i Sedan RWD',
    price: '15,290',
    url: '/usedcars/popular-used-0012',
    image:
      'https://i.ibb.co/j38bT9L/2013-bmw-3-series-pic-6802116493646257977-1024x768.jpg',
    year: 2013,
  },
];

const UsedCars = () => {
  return (
    <PageContainer>
      <div className={classes.FilterArea}>
        <DetailedSearchForm />
      </div>
      <RecentActivities />
      <ListSection
        header='Popular Used Cars'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
      <ListSection
        header='Popular Convertibles'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
      <ListSection
        header='Coupes'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
      <ListSection
        header='Popular Hatchbacks'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
      <ListSection
        header='Popular Sedans'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
      <ListSection
        header='Popular SUVs/Crossovers'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
      <ListSection
        header='Popular Vans'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
      <ListSection
        header='Popular Wagons'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
      <ListSection
        header='Popular Minivans'
        items={popularUsedCars}
        Component={<ProductCard noBoxShadow />}
      />
    </PageContainer>
  );
};

export default UsedCars;
