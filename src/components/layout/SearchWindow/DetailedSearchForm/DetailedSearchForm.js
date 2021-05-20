import React, { useState, useMemo, useCallback } from 'react';
import Button from '../../../ui/Button/Button';
import DropDown from '../../../ui/DropDown/DropDown';
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

const cityList = [
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

const bodyList = [
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

/**
 * Remove useMemo and useCallbacks, and React.memo from DropDown, in any case, whenever this comp. func runs, each of them runs also.
 *  nothing changed and therefore, useMemo, useCallback and React.memo does not have any performance advantage, instead, they
 *  create more performance issue.
 */

const DetailedSearchForm = () => {
  const [selectBrand, setSelectBrand] = useState(false);
  const [selectStartYear, setSelectStartYear] = useState(false);
  const [selectEndYear, setSelectEndYear] = useState(false);
  const [selectCity, setSelectCity] = useState(false);
  const [selectMinPrice, setSelectMinPrice] = useState(false);
  const [selectMaxPrice, setSelectMaxPrice] = useState(false);
  const [brand, setBrand] = useState('all');
  const [startYear, setStartYear] = useState('all');
  const [endYear, setEndYear] = useState('all');
  const [city, setCity] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const brandOptions = useMemo(() => brands, []);
  const cities = useMemo(() => cityList, []);
  const bodies = useMemo(() => bodyList, []);
  const dropStyle = useMemo(() => ({ border: '1px solid #ccc' }), []);

  const handleDropClick = useCallback(
    (name) => {
      console.log('name is dropdown click..: ', name);
      switch (name) {
        case 'brands':
          setSelectBrand((prevState) => !prevState);
          selectStartYear && setSelectStartYear(false);
          selectEndYear && setSelectEndYear(false);
          selectCity && setSelectCity(false);
          selectMinPrice && setSelectMinPrice(false);
          selectMaxPrice && setSelectMaxPrice(false);
          break;

        case 'yearStart':
          selectBrand && setSelectBrand(false);
          setSelectStartYear((prevState) => !prevState);
          selectEndYear && setSelectEndYear(false);
          selectCity && setSelectCity(false);
          selectMinPrice && setSelectMinPrice(false);
          selectMaxPrice && setSelectMaxPrice(false);
          break;

        case 'yearEnd':
          selectBrand && setSelectBrand(false);
          selectStartYear && setSelectStartYear(false);
          setSelectEndYear((prevState) => !prevState);
          selectCity && setSelectCity(false);
          selectMinPrice && setSelectMinPrice(false);
          selectMaxPrice && setSelectMaxPrice(false);
          break;

        case 'cities':
          selectBrand && setSelectBrand(false);
          selectStartYear && setSelectStartYear(false);
          selectEndYear && setSelectEndYear(false);
          setSelectCity((prevState) => !prevState);
          selectMinPrice && setSelectMinPrice(false);
          selectMaxPrice && setSelectMaxPrice(false);
          break;

        case 'minPrice':
          selectBrand && setSelectBrand(false);
          selectStartYear && setSelectStartYear(false);
          selectEndYear && setSelectEndYear(false);
          selectCity && setSelectCity(false);
          setSelectMinPrice((prevState) => !prevState);
          selectMaxPrice && setSelectMaxPrice(false);
          break;

        case 'maxPrice':
          selectBrand && setSelectBrand(false);
          selectStartYear && setSelectStartYear(false);
          selectEndYear && setSelectEndYear(false);
          selectCity && setSelectCity(false);
          selectMinPrice && setSelectMinPrice(false);
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
    },
    [
      selectBrand,
      selectCity,
      selectEndYear,
      selectStartYear,
      selectMaxPrice,
      selectMinPrice,
    ]
  );

  const handleBrandSelect = useCallback((value) => {
    setSelectBrand(false);
    setBrand(value);
  }, []);

  const handleStartYear = useCallback((value) => {
    setSelectStartYear(false);
    setStartYear(value);
  }, []);

  const handleEndYear = useCallback((value) => {
    setSelectEndYear(false);
    setEndYear(value);
  }, []);

  const handleCitySelect = useCallback((value) => {
    setSelectCity(false);
    setCity(value);
  }, []);

  const handleMinPrice = useCallback((value) => {
    setSelectMinPrice(false);
    setMinPrice(value);
  }, []);

  const handleMaxPrice = useCallback((value) => {
    setSelectMaxPrice(false);
    setMaxPrice(value);
  }, []);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log('Brand : ', brand);
      console.log('Start Year : ', startYear);
      console.log('End Year : ', endYear);
      console.log('City : ', city);
      console.log('Max Price : ', maxPrice);
      console.log('Min Price : ', minPrice);
      setBrand('all');
      setStartYear('all');
      setEndYear('all');
      setMinPrice(0);
      setMaxPrice(0);
      setCity('');
    },
    [brand, startYear, endYear, city, maxPrice, minPrice]
  );

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
              selectOptions={brandOptions}
              defaultOptionId={brandOptions[0].id}
              titleKey='make'
              valueKey='value'
              name='brands'
              dropValue={brand}
              style={dropStyle}
              onSelect={handleBrandSelect}
              onClick={handleDropClick}
              drop={selectBrand}
              onClear={useCallback(() => {
                setBrand('all');
                handleDropClick();
              }, [handleDropClick])}
            />
          </div>
          {/* <div className={classes.formGroup}>
            <DropDown
              selectOptions={brands}
              defaultOptionId={brands[0].id}
              titleKey='make'
              valueKey='value'
              name='models'
              dropValue={brand}
              style={{ border: '1px solid #ccc' }}
              onSelect={() => {}}
              onClick={() => {}}
              drop={false}
            />
          </div> */}
          <div className={classes.formGroup}>
            <DropDown
              type='year'
              min={startYear !== 'all' ? startYear : 1990}
              max={endYear}
              style={dropStyle}
              name='yearStart'
              dropValue={startYear}
              onSelect={handleStartYear}
              onClick={handleDropClick}
              drop={selectStartYear}
              reverse={false}
              onClear={useCallback(() => {
                setStartYear('all');
                handleDropClick();
              }, [handleDropClick])}
            />
            <span>to</span>
            <DropDown
              type='year'
              min={startYear !== 'all' ? startYear + 1 : 1990}
              max={endYear}
              style={dropStyle}
              name='yearEnd'
              dropValue={endYear}
              onSelect={handleEndYear}
              onClick={handleDropClick}
              drop={selectEndYear}
              reverse={true}
              onClear={useCallback(() => {
                setEndYear('all');
                handleDropClick();
              }, [handleDropClick])}
            />
          </div>
          <div className={classes.formGroup}>
            <DropDown
              type='number'
              min={minPrice}
              max={250000}
              step={2500}
              style={dropStyle}
              onSelect={handleMinPrice}
              onClick={handleDropClick}
              drop={selectMinPrice}
              placeHolder='Min Price (£)'
              name='minPrice'
              dropValue={minPrice}
              onClear={useCallback(() => {
                setMinPrice(0);
                handleDropClick();
              }, [handleDropClick])}
            />
            <span>to</span>
            <DropDown
              type='number'
              min={minPrice}
              max={250000}
              step={10000}
              style={dropStyle}
              onSelect={handleMaxPrice}
              onClick={handleDropClick}
              drop={selectMaxPrice}
              placeHolder='Max Price (£)'
              name='maxPrice'
              dropValue={maxPrice}
              onClear={useCallback(() => {
                setMaxPrice(0);
                handleDropClick();
              }, [handleDropClick])}
            />
          </div>
          <div className={classes.formGroup}>
            <DropDown
              selectOptions={cities}
              defaultOptionId={cities[0].id}
              titleKey='name'
              valueKey='value'
              name='cities'
              dropValue={city}
              style={dropStyle}
              onSelect={handleCitySelect}
              onClick={handleDropClick}
              drop={selectCity}
              onClear={useCallback(() => {
                setCity('');
                handleDropClick();
              }, [handleDropClick])}
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
