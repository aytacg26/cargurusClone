import React from 'react';
import classes from './DetailIconsList.module.scss';
import milage from '../../../../../../assets/images/vehicledetails/mileage.svg';
import owner from '../../../../../../assets/images/vehicledetails/owner.svg';
import gearbox from '../../../../../../assets/images/vehicledetails/gearbox.svg';
import driveTrain from '../../../../../../assets/images/vehicledetails/drivetrain.svg';
import fuelType from '../../../../../../assets/images/vehicledetails/fuelType.svg';
import engine from '../../../../../../assets/images/vehicledetails/engineDisplacement.svg';
import fuelEconomy from '../../../../../../assets/images/vehicledetails/fuelEconomy.svg';
import interiorColor from '../../../../../../assets/images/vehicledetails/interiorColor.svg';
import IconCard from '../../../../../ui/IconCard/IconCard';

const DetailIconsList = ({ header, carDetails }) => {
  const carDetailsWithImages = [];
  const images = {
    milage,
    owner,
    gearbox,
    driveTrain,
    fuelType,
    engine,
    fuelEconomy,
    interiorColor,
  };
  let count = 0;

  for (let detail in carDetails) {
    count++;
    if (detail === 'owner') {
      carDetailsWithImages.push({
        id: `detail-${detail}-${count}`,
        detail:
          carDetails[detail] === 1
            ? `${carDetails[detail]} owner`
            : `${carDetails[detail]} owners`,
        image: images[detail],
        title: detail,
      });
    } else {
      carDetailsWithImages.push({
        id: `detail-${detail}-${count}`,
        detail: carDetails[detail],
        image: images[detail],
        title: detail,
      });
    }
  }

  return (
    <div className={classes.Details}>
      {header && <h3>{header}</h3>}
      <div className={classes.DetailIcons}>
        {carDetailsWithImages.map((detail) => (
          <IconCard
            image={detail.image}
            text={detail.detail}
            key={detail.id}
            title={detail.title}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(DetailIconsList);
