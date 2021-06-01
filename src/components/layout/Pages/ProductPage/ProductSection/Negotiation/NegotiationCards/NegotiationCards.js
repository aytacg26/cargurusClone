import React from 'react';
import ReviewCardsContainer from '../../../../../../ui/ReviewCardsContainer/ReviewCardsContainer';
import ReviewIconCard from '../../../../../../ui/ReviewIconCard/ReviewIconCard';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaHotjar, FaBars } from 'react-icons/fa';
import SaveCounter from '../../../../../../ui/SaveCounter/SaveCounter';
import { days } from '../../../../../../../utils/utilsFuncs';

//Use list date to calculate number of days on CarWorld.
//Use price stats to write price drop amount to Price History (we need to keep price changes on car in DB)
const NegotiationCards = ({ listDate, numberOfSaves, priceDrop, currency }) => {
  const today = new Date();
  const numberOfDays = days(listDate, today);

  return (
    <ReviewCardsContainer>
      <ReviewIconCard
        IconComponent={<FaHotjar color='#fff' size='25px' />}
        circleColor='#0277bd'
        header='Hot Seller'
        toolTipInfo='Popular cars sell quickly, so negotiating for a lower price may be tougher'
        text={`${numberOfDays} day${numberOfDays > 1 ? 's' : ''} on CarWorld`}
        additionalInfo={<SaveCounter count={numberOfSaves} />}
      />
      <ReviewIconCard
        IconComponent={
          priceDrop ? (
            <BsFillBarChartFill color='#fff' size='25px' />
          ) : (
            <FaBars
              color='#fff'
              size='25px'
              style={{ transform: 'rotate(90deg)' }}
            />
          )
        }
        circleColor={priceDrop ? 'green' : '#0277bd'}
        header='Price History'
        text={
          priceDrop > 0
            ? `Price dropped by ${currency}${priceDrop}`
            : 'No price changes'
        }
      />
    </ReviewCardsContainer>
  );
};

export default NegotiationCards;
