import React from 'react';
import ReviewIconCard from '../../../../../../ui/ReviewIconCard/ReviewIconCard';
import { FaRegCheckCircle, FaUsers, FaUserAlt } from 'react-icons/fa';
import { AiOutlineCar } from 'react-icons/ai';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { MdFiberNew } from 'react-icons/md';
import { BiShapeCircle } from 'react-icons/bi';
import classes from './ReviewCards.module.scss';

const ReviewCards = ({ title, accidents, owners, rentalUse }) => {
  const color = '#fff';
  const size = '25px';
  return (
    <div className={classes.ReviewCards}>
      <ReviewIconCard
        IconComponent={
          title ? (
            <FaRegCheckCircle size={size} color={color} />
          ) : (
            <BsArrowCounterclockwise size={size} color={color} />
          )
        }
        circleColor={title ? 'green' : 'red'}
        header={title ? 'Title Check' : 'On Investigation'}
        text={title && 'No issues reported'}
      />
      <ReviewIconCard
        IconComponent={<AiOutlineCar size={size} color={color} />}
        circleColor={accidents > 0 ? '#ffb100' : 'green'}
        header='Accident Check'
        text={
          accidents === 0
            ? 'No issues reported'
            : `${accidents} Accident${accidents > 1 ? 's' : ''} reported`
        }
      />
      <ReviewIconCard
        IconComponent={
          owners === 1 ? (
            <FaUserAlt size={size} color={color} />
          ) : owners > 1 ? (
            <FaUsers size={size} color={color} />
          ) : (
            <MdFiberNew size={size} color={color} />
          )
        }
        circleColor='#0277bd'
        header={
          owners === 1
            ? 'One Owner'
            : owners > 1
            ? `${owners} Owners`
            : `Brand New`
        }
      />
      {rentalUse && (
        <ReviewIconCard
          IconComponent={<BiShapeCircle size={size} color={color} />}
          circleColor='#0277bd'
          header='Rental Use'
          toolTipInfo='A fleet vehicle was part of a corporate or rental group of cars'
        />
      )}
    </div>
  );
};

export default ReviewCards;
