import InfoCard from '../../ui/InfoCard/InfoCard';
import classes from './InfoCards.module.css';

const infoCards = [
  {
    id: 'info-card-000124',
    header: 'Know the real deal',
    text: 'Our algorithm rates just 30% of cars a good or great deal.',
    image: 'https://i.ibb.co/SJL2Y9M/deal-Ratings.png',
  },
  {
    id: 'info-card-000126',
    header: 'Finance in advance',
    text: 'View personalized, real rates before you even talk to a dealer.',
    image: 'https://i.ibb.co/dj05MR4/financing.png',
  },
  {
    id: 'info-card-000128',
    header: 'See the details that matter',
    text: 'Accident history, price drops, days on lot… find it all here.',
    image: 'https://i.ibb.co/Qv8k0nB/details.png',
  },
];

const InfoCards = (props) => {
  return (
    <div className={classes.cardContainer}>
      {infoCards.map((card) => (
        <InfoCard {...card} key={card.id} />
      ))}
    </div>
  );
};

export default InfoCards;
