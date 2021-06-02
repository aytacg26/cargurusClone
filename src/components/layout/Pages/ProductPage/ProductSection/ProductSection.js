import React, { useState, useMemo, Fragment, lazy, Suspense } from 'react';
import Loader from '../../../../ui/Loader/Loader';
import Financing from '../../../Financing/Financing';
import DealerReviews from './DealerReviews/DealerReviews';
import DetailIconsList from './DetailIconsList/DetailIconsList';
import DetailsTable from './DetailsTable/DetailsTable';
import Negotiation from './Negotiation/Negotiation';
import NotifyWindow from './NotifyWindow/NotifyWindow';
import ProductNav from './ProductNav/ProductNav';
import classes from './ProductSection.module.scss';
import VehicleHistory from './VehicleHistory/VehicleHistory';

const Modal = lazy(() => import('../../../../ui/Modal/Modal'));

//car details will come from database and we will get this data directly to this component from Redux
//for test purpose, static data used.
const ProductSection = ({ carDetails, dealerReviews, location }) => {
  const [hideFinancingModal, setHideFinancingModal] = useState(true);

  const handleFinancingModal = () => {
    setHideFinancingModal((prevState) => !prevState);
  };

  const {
    kilometers,
    transmission,
    driveTrain,
    fuelType,
    engine,
    interiorColor,
    gasMileage,
    owners,
  } = carDetails;

  const fuelEconomy = gasMileage[2];

  const details = useMemo(
    () => ({
      milage: kilometers,
      owner: owners,
      gearbox: transmission,
      driveTrain: driveTrain,
      fuelType: fuelType,
      engine: engine,
      fuelEconomy: fuelEconomy,
      interiorColor: interiorColor,
    }),
    [
      kilometers,
      transmission,
      driveTrain,
      fuelType,
      engine,
      fuelEconomy,
      interiorColor,
      owners,
    ]
  );

  return (
    <Fragment>
      <ProductNav onShowFinancing={handleFinancingModal} />
      <div className={classes.ProductSection}>
        <div className={classes.ImageBox}>ImageBox</div>
        <DetailIconsList carDetails={details} header='Vehicle Details' />
        <Financing
          header='Finance in Advance'
          onClick={handleFinancingModal}
          btnTitle='See my options'
          btnType='success'
        />
        <DetailsTable details={carDetails} location={location} />
        <Negotiation
          numberOfSaves={carDetails.numberOfSaves}
          listDate={carDetails.listDate}
          priceStatistics={carDetails.priceStatistics}
          currency={carDetails.currency}
        />
        <VehicleHistory
          owners={carDetails.owners}
          title={carDetails.titleCheck}
          accidents={carDetails.accidents}
          rentalUse={carDetails.rentalUse}
          autoCheckDate={carDetails.autoCheckDate}
        />
        <NotifyWindow productId={carDetails.id} />

        <div id='reviews' className={classes.Reviews}>
          <DealerReviews reviews={dealerReviews} />
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Modal onClick={handleFinancingModal} hide={hideFinancingModal}>
          <div className={classes.FinancingContainer}>
            <h3>Overview</h3>

            <Financing
              header='Shop with real rates in hand'
              btnType='primary'
              btnTitle='Get Started'
              style={{ width: '100%' }}
              onClick={() => console.log('Open next page on modal...')}
            />

            <div className={classes.FinancingPolicy}>
              <p>
                Take this Modal to another folder as a seperate component, this
                will have more other parts which we will need to show up on
                button click...
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum
                temporibus. Minima tempore, veniam facilis aperiam labore
                deserunt nulla quibusdam doloribus amet quia deleniti ratione,
                quos quas? Possimus, iusto molestias.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum
                temporibus. Minima tempore, veniam facilis aperiam labore
                deserunt nulla quibusdam doloribus amet quia deleniti ratione,
                quos quas? Possimus, iusto molestias.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum
                temporibus. Minima tempore, veniam facilis aperiam labore
                deserunt nulla quibusdam doloribus amet quia deleniti ratione,
                quos quas? Possimus, iusto molestias.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum
                temporibus. Minima tempore, veniam facilis aperiam labore
                deserunt nulla quibusdam doloribus amet quia deleniti ratione,
                quos quas? Possimus, iusto molestias.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum
                temporibus. Minima tempore, veniam facilis aperiam labore
                deserunt nulla quibusdam doloribus amet quia deleniti ratione,
                quos quas? Possimus, iusto molestias.
              </p>
            </div>
          </div>
        </Modal>
      </Suspense>
    </Fragment>
  );
};

export default ProductSection;
