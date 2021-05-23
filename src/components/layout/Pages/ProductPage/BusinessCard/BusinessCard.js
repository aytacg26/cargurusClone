import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './BusinessCard.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaHome, FaCarAlt } from 'react-icons/fa';
// import testLogo1 from '../../../../../assets/images/dealers/shottenkirk_honda_of_davis-pic-7948653745168081062-200x200.jpeg';
// import testLogo2 from '../../../../../assets/images/dealers/star_auto_sales-pic-13264880354944981651-200x200.jpeg';
// import correctSizing from '../../../../../assets/images/dealers/DealerlogoSizing.png';
// import correctSizing2 from '../../../../../assets/images/dealers/DealerlogoSizing2.png';
import sampleCorrectSize from '../../../../../assets/images/dealers/SampleLOGO.png';
import Button from '../../../../ui/Button/Button';
import MapModal from '../MapModal/MapModal';

const BusinessCard = ({
  dealerId,
  dealerName,
  location,
  address,
  phone,
  logoImg,
  Latitude,
  Longitude,
  country,
}) => {
  const [hideMap, setHideMap] = useState(true);

  const handleMapWindow = () => {
    document.scrollingElement.scrollTop = 0;
    setHideMap((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={classes.BusinessCard}>
        <div className={classes.DealerBranding}>
          <Link to='/dealers/dealer-id' className={classes.LogoContainer}>
            <img src={sampleCorrectSize} alt='' titile='' />
          </Link>
          <div className={classes.DealerLocation}>
            <h2>STAR AUTO SALES</h2>
            <h3>Nicosia, Cyprus</h3>
          </div>
        </div>
        <div className={classes.DetailsSection}>
          <div className={classes.DealerDetailsGroup}>
            <span className={classes.IconSection}>
              <FaHome size='20px' />
            </span>
            <span>514 Crows Landing Road Modesto, CA 95351</span>
          </div>
          <div className={classes.DealerDetailsGroup}>
            <span className={classes.IconSection}>
              <FaPhoneAlt size='20px' />
            </span>
            <span>(0533) 811 01 91</span>
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
            <Button to='/dealers/dealer-id' btnType='primary'>
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
        country={country}
        address={address}
      />
    </Fragment>
  );
};

export default BusinessCard;
