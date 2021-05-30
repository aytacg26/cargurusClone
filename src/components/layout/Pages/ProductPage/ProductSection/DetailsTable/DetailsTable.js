import React, { useState, useEffect } from 'react';
import ShowHideIcon from '../../../../../ui/ShowHideIcon/ShowHideIcon';
import Description from './Description/Description';
import DetailGroup from './DetailGroup/DetailGroup';
import classes from './DetailsTable.module.scss';
import MajorOptions from './MajorOptions/MajorOptions';

const DetailsTable = ({ details }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [removeDetails, setRemoveDetails] = useState(true);
  const [border, setBorder] = useState(0);

  const handleShowDetails = () => {
    setRemoveDetails(false);
    const timer = setTimeout(() => {
      setShowDetails((prevState) => !prevState);
      clearTimeout(timer);
    }, 50);
  };

  useEffect(() => {
    let timer;

    if (showDetails) {
      timer = setTimeout(() => {
        setBorder('');
      }, 500);
    } else {
      timer = setTimeout(() => {
        setRemoveDetails(true);
        setBorder('1px solid transparent');
      }, 200);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showDetails]);

  if (details === undefined || details === null) {
    return null;
  }

  return (
    <div className={classes.DetailsTable} style={{ border: border }}>
      <div className={classes.TableHeadSection}>
        <h3 onClick={handleShowDetails}>
          {!showDetails ? `Show More Details` : `Hide Details`}{' '}
        </h3>
        <ShowHideIcon
          show={showDetails}
          onClick={handleShowDetails}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {!removeDetails && (
        <div
          className={`${classes.Details} ${showDetails ? classes.Show : ''}`}
        >
          <DetailGroup label="Dealer's Price" data={details.price} />
          {details.location && (
            <DetailGroup label='Location' data={details.location} />
          )}
          {details.kilometers && (
            <DetailGroup label='Kilometers' data={details.kilometers} />
          )}
          {details.transmission && (
            <DetailGroup label='Transmission' data={details.transmission} />
          )}
          {details.exteriorColor && (
            <DetailGroup label='Exterior Color' data={details.exteriorColor} />
          )}
          {details.interiorColor && (
            <DetailGroup label='Interior Color' data={details.interiorColor} />
          )}
          {details.gasMileage && (
            <DetailGroup label='Gas Mileage' data={details.gasMileage} />
          )}
          {details.engine && (
            <DetailGroup label='Engine' data={details.engine} />
          )}
          {details.horsepower && (
            <DetailGroup label='Horse Power' data={details.horsepower} />
          )}
          {details.driveTrain && (
            <DetailGroup label='Drivetrain' data={details.driveTrain} />
          )}
          {details.fuelType && (
            <DetailGroup label='Fuel Type' data={details.fuelType} />
          )}
          {details.VIN && <DetailGroup label='VIN' data={details.VIN} />}
          <MajorOptions majorOptions={details.majorOptions} />
          <Description
            header="Dealer's Description"
            text={details.description}
          />
        </div>
      )}
    </div>
  );
};

export default DetailsTable;
