import React from 'react';
import CardWindow from '../../../../../ui/CardWindow/CardWindow';
import NegotiationCards from './NegotiationCards/NegotiationCards';
import classes from './Negotiation.module.scss';

const Negotiation = ({ listDate, numberOfSaves, priceStatistics }) => {
  return (
    <CardWindow
      header='Negotiation'
      cards={
        <NegotiationCards listDate={listDate} numberOfSaves={numberOfSaves} />
      }
    >
      {priceStatistics && (
        <div className={classes.Negotiation}>
          <div>This part will contain price drop statistics</div>
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
