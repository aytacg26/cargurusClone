import React, { Fragment, useState } from 'react';
import Button from '../../../ui/Button/Button';
import DropDown from '../../../ui/DropDown/DropDown';
import ByBody from '../ByBody/ByBody';
import CarBodyCard from '../ByBody/CarBodyCard';
import classes from './DetailedSearchForm.module.css';

const brands = [
  {
    id: 'car-all',
    make: 'All Brands',
    value: 'all-brands',
  },
  {
    id: 'car-00001',
    make: 'Acura',
    value: 'acura',
  },
  {
    id: 'car-00002',
    make: 'Alfa Romeo',
    value: 'alfaromeo',
  },
  {
    id: 'car-00003',
    make: 'Audi',
    value: 'audi',
  },
  {
    id: 'car-00004',
    make: 'BMW',
    value: 'bmw',
  },
  {
    id: 'car-00005',
    make: 'Buick',
    value: 'buick',
  },
  {
    id: 'car-00006',
    make: 'Cadillac',
    value: 'cadillac',
  },
  {
    id: 'car-00007',
    make: 'Chevrolet',
    value: 'chevrolet',
  },
  {
    id: 'car-00008',
    make: 'Chrysler',
    value: 'chrysler',
  },
  {
    id: 'car-00009',
    make: 'Dodge',
    value: 'dodge',
  },
  {
    id: 'car-00010',
    make: 'Fiat',
    value: 'fiat',
  },
  {
    id: 'car-00011',
    make: 'Ford',
    value: 'ford',
  },
];

const cities = [
  {
    id: 'city-000-cyprus',
    name: 'All Cities',
    value: 'all-cities',
  },
  {
    id: 'city-001-cyprus',
    name: 'Nicosia',
    value: 'nicosia',
  },
  {
    id: 'city-002-cyprus',
    name: 'Famagusta',
    value: 'famagusta',
  },
  {
    id: 'city-003-cyprus',
    name: 'Kyrenia',
    value: 'kyrenia',
  },
  {
    id: 'city-004-cyprus',
    name: 'Iskele',
    value: 'iskele',
  },
  {
    id: 'city-005-cyprus',
    name: 'Lefke',
    value: 'lefke',
  },
];

const bodies = [
  {
    id: 'body-suv-0001',
    title: 'SUV/Crossover',
    image: 'https://i.ibb.co/gZSj5NM/suv-crossover-min.png',
    selected: true,
  },
  {
    id: 'body-sedan-0002',
    title: 'Sedan',
    image: 'https://i.ibb.co/r7HkJCn/sedan-min.png',
    selected: false,
  },
  {
    id: 'body-pickup-0003',
    title: 'Pickup Truck',
    image: 'https://i.ibb.co/xHpNY8W/pickup-min.png',
    selected: false,
  },
  {
    id: 'body-coupe-0004',
    title: 'Coupe',
    image: 'https://i.ibb.co/KjfmyWt/coupe-min.png',
    selected: false,
  },
  {
    id: 'body-hatchback-0005',
    title: 'Hatchback',
    image: 'https://i.ibb.co/DGm5YjL/hatchback-min.png',
    selected: false,
  },
  {
    id: 'body-convertible-0006',
    title: 'Convertible',
    image: 'https://i.ibb.co/jvbCMZz/convertible-min.png',
    selected: false,
  },
  {
    id: 'body-wagon-0007',
    title: 'Wagon',
    image: 'https://i.ibb.co/Qk477fC/wagon-min.png',
    selected: false,
  },
  {
    id: 'body-minivan-0008',
    title: 'Minivan',
    image: 'https://i.ibb.co/kHwfBS6/minivan-min.png',
    selected: false,
  },
];

const DetailedSearchForm = () => {
  const [selectBrand, setSelectBrand] = useState(false);
  const [selectStartYear, setSelectStartYear] = useState(false);
  const [selectEndYear, setSelectEndYear] = useState(false);
  const [selectCity, setSelectCity] = useState(false);
  const [selectMinPrice, setSelectMinPrice] = useState(false);
  const [selectMaxPrice, setSelectMaxPrice] = useState(false);

  const handleDropClick = (name) => {
    switch (name) {
      case 'brands':
        setSelectBrand((prevState) => !prevState);
        setSelectStartYear(false);
        setSelectEndYear(false);
        setSelectCity(false);
        setSelectMinPrice(false);
        setSelectMaxPrice(false);
        break;

      case 'yearStart':
        setSelectBrand(false);
        setSelectStartYear((prevState) => !prevState);
        setSelectEndYear(false);
        setSelectCity(false);
        setSelectMinPrice(false);
        setSelectMaxPrice(false);
        break;

      case 'yearEnd':
        setSelectBrand(false);
        setSelectStartYear(false);
        setSelectEndYear((prevState) => !prevState);
        setSelectCity(false);
        setSelectMinPrice(false);
        setSelectMaxPrice(false);
        break;

      case 'cities':
        setSelectBrand(false);
        setSelectStartYear(false);
        setSelectEndYear(false);
        setSelectCity((prevState) => !prevState);
        setSelectMinPrice(false);
        setSelectMaxPrice(false);
        break;

      case 'minPrice':
        setSelectBrand(false);
        setSelectStartYear(false);
        setSelectEndYear(false);
        setSelectCity(false);
        setSelectMinPrice((prevState) => !prevState);
        setSelectMaxPrice(false);
        break;

      case 'maxPrice':
        setSelectBrand(false);
        setSelectStartYear(false);
        setSelectEndYear(false);
        setSelectCity(false);
        setSelectMinPrice(false);
        setSelectMaxPrice((prevState) => !prevState);
        break;

      default:
        setSelectBrand(false);
        setSelectStartYear(false);
        setSelectEndYear(false);
        setSelectCity(false);
        setSelectMinPrice(false);
        setSelectMaxPrice(false);
        break;
    }
  };

  const handleBrandSelect = () => {
    setSelectBrand(false);
  };

  const handleStartYear = () => {
    setSelectStartYear(false);
  };

  const handleEndYear = () => {
    setSelectEndYear(false);
  };

  const handleCitySelect = () => {
    setSelectCity(false);
  };

  const handleMinPrice = () => {
    setSelectMinPrice(false);
  };

  const handleMaxPrice = () => {
    setSelectMaxPrice(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Search Form Submitted...');
  };

  /**Min değer ve Max değer dinamik olsun, kullanıcı, min price'ı seçtiğinde, artın max price bölümü min price'ın üzerinde bir değer ile başlasın */
  /**Yıl için de aynı şey geçerli, kullanıcı min yılı seçtiğinde, max yıl bölümü artık min yıla kadar göstermelidir!! Yani
   * kullanıcı Max tarafında seçtiği min yıldan daha küçük bir değer seçememeli...
   */
  return (
    <div className={classes.FormContainer}>
      <div className={classes.headerSection}>
        <h1>Shopping for a Used Car?</h1>
        <h2>Know more, shop wisely</h2>
      </div>
      <form className={classes.DetailedSearchForm} onSubmit={handleFormSubmit}>
        <div className={classes.DropDowns}>
          <h3>By Make & Model</h3>
          <div className={classes.formGroup}>
            <DropDown
              selectOptions={brands}
              defaultOptionId={brands[0].id}
              titleKey='make'
              valueKey='value'
              name='brands'
              style={{ border: '1px solid #ccc' }}
              onSelect={handleBrandSelect}
              onClick={handleDropClick}
              drop={selectBrand}
            />
          </div>
          <div className={classes.formGroup}>
            <DropDown
              selectOptions={brands}
              defaultOptionId={brands[0].id}
              titleKey='make'
              valueKey='value'
              name='brands'
              style={{ border: '1px solid #ccc' }}
              onSelect={() => {}}
              onClick={() => {}}
              drop={false}
            />
          </div>
          <div className={classes.formGroup}>
            <DropDown
              type='year'
              min={1990}
              style={{ border: '1px solid #ccc' }}
              name='yearStart'
              onSelect={handleStartYear}
              onClick={handleDropClick}
              drop={selectStartYear}
              reverse={false}
            />
            <span>to</span>
            <DropDown
              type='year'
              min={1990}
              style={{ border: '1px solid #ccc' }}
              name='yearEnd'
              onSelect={handleEndYear}
              onClick={handleDropClick}
              drop={selectEndYear}
              reverse={true}
            />
          </div>
          <div className={classes.formGroup}>
            <DropDown
              type='number'
              min={0}
              max={250000}
              step={2500}
              style={{ border: '1px solid #ccc' }}
              onSelect={handleMinPrice}
              onClick={handleDropClick}
              drop={selectMinPrice}
              placeHolder='Min Price (£)'
              name='minPrice'
            />
            <span>to</span>
            <DropDown
              type='number'
              min={0}
              max={250000}
              step={10000}
              style={{ border: '1px solid #ccc' }}
              onSelect={handleMaxPrice}
              onClick={handleDropClick}
              drop={selectMaxPrice}
              placeHolder='Max Price (£)'
              name='maxPrice'
            />
          </div>
          <div className={classes.formGroup}>
            <DropDown
              selectOptions={cities}
              defaultOptionId={cities[0].id}
              titleKey='name'
              valueKey='value'
              name='cities'
              style={{ border: '1px solid #ccc' }}
              onSelect={handleCitySelect}
              onClick={handleDropClick}
              drop={selectCity}
            />
          </div>
        </div>

        <div>
          <h3>By Body Style</h3>
          <div className={classes.Bodies}>
            {bodies.map((body) => (
              <CarBodyCard
                title={body.title}
                image={body.image}
                key={body.id}
                noBorder
                to={`/${body.title
                  .split('/')
                  .join('')
                  .split(' ')[0]
                  .toLowerCase()}`}
              />
            ))}
          </div>
        </div>
        <Button btnType='success' style={{ margin: 0 }}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default DetailedSearchForm;
