import React from 'react';
import { useDropForm } from '../../../../hooks/useDropForm';
import DropDown from '../../../ui/DropDown/DropDown';
import Button from '../../../ui/Button/Button';
import classes from './ByPrice.module.scss';

const generatePriceRange = (
  minValue = 1000,
  initObj = { id: 'price-0000-0', name: 'From', value: 0 },
  currency = `£`
) => {
  const prices = [initObj];
  let count = 0;

  for (let i = 1; i < 45; i++) {
    count++;
    let priceObj = {};
    let value;

    if (i <= 10) {
      value = i * minValue;
    } else if (i > 10 && i <= 20) {
      value = i * (minValue + 1000);
    } else if (i > 20 && i < 35) {
      value = i * (minValue + 2000);
    } else {
      value = i * (minValue + 4000);
    }

    priceObj = {
      id: `price-${i}-0${count}`,
      name: `${currency}${value}`,
      value,
    };

    prices.push(priceObj);
  }

  return prices;
};

const fromPrice = generatePriceRange();
const toPrice = generatePriceRange(1000, {
  id: 'to-1001-00',
  name: 'To',
  value: 220000,
});

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

const ByPrice = () => {
  const {
    firstDrop: fromDrop,
    secondDrop: toDrop,
    thirdDrop: cityDrop,
    handleDropClick,
  } = useDropForm(['FromPrice', 'ToPrice', 'City']);

  return (
    <div className={classes.Inputs}>
      <span className={classes.FormElShell}>
        <DropDown
          defaultOptionId={fromPrice[0].id}
          selectOptions={fromPrice}
          titleKey='name'
          valueKey='value'
          onSelect={(val) => {
            console.log(val);
            handleDropClick();
          }}
          name='FromPrice'
          drop={fromDrop}
          onClick={handleDropClick}
        />
      </span>
      <span className={classes.FormElShell}>
        <DropDown
          defaultOptionId={toPrice[0].id}
          selectOptions={toPrice}
          titleKey='name'
          valueKey='value'
          onSelect={(val) => {
            console.log(val);
            handleDropClick();
          }}
          name='ToPrice'
          drop={toDrop}
          onClick={handleDropClick}
        />
      </span>
      <span className={classes.FormElShell}>
        <DropDown
          defaultOptionId={cities[0].id}
          selectOptions={cities}
          titleKey='name'
          valueKey='value'
          onSelect={(val) => {
            console.log(val);
            handleDropClick();
          }}
          name='City'
          drop={cityDrop}
          onClick={handleDropClick}
        />
      </span>

      <Button btnType='success'>Search</Button>
    </div>
  );
};

export default ByPrice;
