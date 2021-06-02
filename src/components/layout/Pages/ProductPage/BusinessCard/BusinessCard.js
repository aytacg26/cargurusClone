import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './BusinessCard.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaHome, FaCarAlt } from 'react-icons/fa';
import sampleCorrectSize from '../../../../../assets/images/dealers/SampleLOGO.png';
import Button from '../../../../ui/Button/Button';
import MapModal from '../MapModal/MapModal';

const BusinessCard = ({
  dealerId,
  dealerName,
  location,
  city,
  address,
  phone,
  logoImg,
  Latitude,
  Longitude,
  country,
}) => {
  const [hideMap, setHideMap] = useState(true);

  const handleMapWindow = () => {
    setHideMap((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={classes.BusinessCard}>
        <div className={classes.DealerBranding}>
          <Link to={`/dealers/${dealerId}`} className={classes.LogoContainer}>
            <img src={sampleCorrectSize} alt={dealerName} title={dealerName} />
          </Link>
          <div className={classes.DealerLocation}>
            <h2>{dealerName}</h2>
            <h3>{`${location}, ${city}`}</h3>
          </div>
        </div>
        <div className={classes.DetailsSection}>
          <div className={classes.DealerDetailsGroup}>
            <span className={classes.IconSection}>
              <FaHome size='20px' />
            </span>
            <span>{address}</span>
          </div>
          <div className={classes.DealerDetailsGroup}>
            <span className={classes.IconSection}>
              <FaPhoneAlt size='20px' />
            </span>
            <span>{phone}</span>
          </div>
          <div className={classes.DealerDetailsGroup}>
            <span className={classes.IconSection}>
              <FaMapMarkerAlt size='20px' />
            </span>
            <Button btnType='primary' onClick={handleMapWindow}>
              See Map &amp; Directions
            </Button>
          </div>
          <div className={classes.DealerDetailsGroup}>
            <span className={classes.IconSection}>
              <FaCarAlt size='20px' />
            </span>
            <Button to={`/dealers/${dealerId}`} btnType='primary'>
              See Inventory
            </Button>
          </div>
        </div>
      </div>
      <MapModal
        onMapWindowClick={handleMapWindow}
        hideMap={hideMap}
        Latitude={Latitude}
        Longitude={Longitude}
        dealerName={dealerName}
        location={location}
        city={city}
        address={address}
      />
    </Fragment>
  );
};

export default BusinessCard;
