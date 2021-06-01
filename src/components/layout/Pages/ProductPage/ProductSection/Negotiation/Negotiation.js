import React from 'react';
import CardWindow from '../../../../../ui/CardWindow/CardWindow';
import NegotiationCards from './NegotiationCards/NegotiationCards';
import classes from './Negotiation.module.scss';
import PriceStatistics from './PriceStatistics/PriceStatistics';

const Negotiation = ({
  listDate,
  numberOfSaves,
  priceStatistics,
  currency,
}) => {
  let priceDrop = 0;

  if (priceStatistics.length > 1) {
    const initPrice = priceStatistics[0].price;
    const lastPrice = priceStatistics[priceStatistics.length - 1].price;
    priceDrop =
      parseFloat(initPrice).toFixed(2) - parseFloat(lastPrice).toFixed(2);
  }

  return (
    <CardWindow
      header='Negotiation'
      cards={
        <NegotiationCards
          listDate={listDate}
          numberOfSaves={numberOfSaves}
          priceDrop={priceDrop}
          currency={currency}
        />
      }
    >
      {priceStatistics && (
        <div className={classes.Negotiation}>
          <div>
            <PriceStatistics
              priceStatistics={priceStatistics}
              currency={currency}
            />
          </div>
          <span>
            Price History comprises prices posted on CarWorld for this vehicle.
            Price may exclude certain taxes, fees, and/or charges. See seller
            for details.
          </span>
        </div>
      )}
    </CardWindow>
  );
};

export default Negotiation;
