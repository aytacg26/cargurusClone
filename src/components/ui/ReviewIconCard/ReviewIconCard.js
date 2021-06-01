import React from 'react';
import CircleIconContainer from '../CircleIconContainer/CircleIconContainer';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import PropTypes from 'prop-types';
import { FaInfo } from 'react-icons/fa';
import classes from './ReviewIconCard.module.scss';

const ReviewIconCard = ({
  IconComponent,
  circleColor,
  header,
  text,
  toolTipSide,
  toolTipInfo,
  additionalInfo,
}) => {
  let textSection = (
    <div className={classes.TextSection}>
      <h4>{header}</h4>
      {text && <p>{text}</p>}
      {additionalInfo && <div>{additionalInfo}</div>}
    </div>
  );

  if (!header && !text) {
    textSection = null;
  }

  return (
    <div className={classes.CardContainer}>
      <CircleIconContainer color={circleColor}>
        {IconComponent}
      </CircleIconContainer>
      {textSection}
      <InfoTooltip info={toolTipInfo} toolTipSide={toolTipSide} />
    </div>
  );
};

ReviewIconCard.defaultProps = {
  IconComponent: <FaInfo color='#fff' />,
};

ReviewIconCard.propTypes = {
  IconComponent: PropTypes.element,
  circleColor: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  toolTipSide: PropTypes.string,
  toolTipInfo: PropTypes.string,
};

export default ReviewIconCard;
