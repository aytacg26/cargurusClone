import React, { Fragment } from 'react';
import Button from '../../../../ui/Button/Button';
import Card from '../../../../ui/Card/Card';
import DealBadge from '../../../../ui/DealBadge/DealBadge';
import classes from './DealerInteraction.module.css';
import { BiChat } from 'react-icons/bi';
import RatingStarPresentation from '../../../../ui/RatingStars/RatingStarPresentation/RatingStarPresentation';

const DealerInteraction = ({
  rate,
  numberOfReviews,
  dealStatus,
  priceDifference,
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

  const showDealCard = showDealBadge && rate && numberOfReviews;

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
              {rate && (
                <Fragment>
                  <span className={classes.RatingTitle}>DEALER RATING</span>
                  <RatingStarPresentation rate={rate} />
                </Fragment>
              )}
              {numberOfReviews && (
                <a href='#reviews'>Read {numberOfReviews} Reviews</a>
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
        <form>Message Form</form>
      </Card>
      <Card>
        <div>Business Card</div>
      </Card>
    </div>
  );
};

export default DealerInteraction;
