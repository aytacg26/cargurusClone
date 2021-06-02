import React, { Fragment } from 'react';
import Button from '../../../../ui/Button/Button';
import Card from '../../../../ui/Card/Card';
import DealBadge from '../../../../ui/DealBadge/DealBadge';
import classes from './DealerInteraction.module.scss';
import { BiChat } from 'react-icons/bi';
import RatingStarPresentation from '../../../../ui/RatingStars/RatingStarPresentation/RatingStarPresentation';
import MessageForm from '../MessageForm/MessageForm';
import BusinessCard from '../BusinessCard/BusinessCard';

const DealerInteraction = ({
  rate,
  numberOfReviews,
  dealStatus,
  priceDifference,
  dealer,
}) => {
  const good = dealStatus?.toLowerCase() === 'good';
  const great = dealStatus?.toLowerCase() === 'great';
  const fair = dealStatus?.toLowerCase() === 'fair';
  const high = dealStatus?.toLowerCase() === 'high';
  const overprice = dealStatus?.toLowerCase() === 'overprice';
  const noanalysis = dealStatus?.toLowerCase() === 'noanalysis';
  const uncertain = dealStatus?.toLowerCase() === 'uncertain';
  const showDealBadge =
    good || great || fair || high || overprice || noanalysis || uncertain;

  const showDealCard = showDealBadge || rate || numberOfReviews;

  return (
    <div className={classes.DealerInteractionSection}>
      {showDealCard && (
        <Card>
          <div className={classes.DealSection}>
            {showDealBadge && (
              <DealBadge
                Great={great}
                Good={good}
                Fair={fair}
                HighPrice={high}
                OverPrice={overprice}
                NoAnalysis={noanalysis}
                Uncertain={uncertain}
                priceDifference={priceDifference}
              />
            )}
            <div className={classes.DealerRating}>
              {rate ? (
                <Fragment>
                  <span className={classes.RatingTitle}>DEALER RATING</span>
                  <RatingStarPresentation rate={rate} />
                </Fragment>
              ) : null}
              {numberOfReviews ? (
                <a href='#reviews'>Read {numberOfReviews} Reviews</a>
              ) : (
                <span className={classes.NoReviews}>{`${
                  !rate && !numberOfReviews
                    ? 'No rating and reviews yet'
                    : 'No Reviews'
                }`}</span>
              )}
            </div>
          </div>
        </Card>
      )}
      <Card>
        <div className={classes.OnlineChat}>
          <span>We're online</span>
          <Button btnType='primary'>
            {' '}
            <BiChat color='#fff' style={{ marginRight: '5px' }} />
            Chat
          </Button>
        </div>
      </Card>
      <Card>
        <MessageForm
          formHeader='Contact Dealer'
          dealerPhone={dealer.contact.phone}
        />
      </Card>
      <Card>
        <BusinessCard
          dealerId={dealer.dealerId}
          dealerName={dealer.name}
          location={dealer.contact.location}
          city={dealer.contact.city}
          country={dealer.contact.country}
          phone={dealer.contact.phone}
          address={dealer.contact.address}
          Latitude={dealer.coordinates.Latitude}
          Longitude={dealer.coordinates.Longitude}
        />
      </Card>
    </div>
  );
};

/**
 *  coordinates: {
    Latitude: '35.2215',
    Longitude: '33.3767',
  }
 */

export default DealerInteraction;
