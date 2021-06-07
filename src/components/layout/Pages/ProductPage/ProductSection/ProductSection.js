import React, { useState, useMemo, Fragment, lazy, Suspense } from 'react';
import { addComma } from '../../../../../utils/utilsFuncs';
import CardWindow from '../../../../ui/CardWindow/CardWindow';
import Loader from '../../../../ui/Loader/Loader';
import ProductImageSlider from '../../../../ui/ProductImageSlider/ProductImageSlider';
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
const ProductSection = ({ carDetails, dealer, onDelete, priceDifference }) => {
  const [hideFinancingModal, setHideFinancingModal] = useState(true);
  const dealerReviews = dealer.reviews;
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
      <ProductNav
        onShowFinancing={handleFinancingModal}
        image={carDetails.images[0].image}
        productName={carDetails.title}
        milage={carDetails.kilometers}
        price={`${carDetails.currency}${addComma(
          carDetails.priceStatistics[carDetails.priceStatistics.length - 1]
            .price
        )}`}
        deal={carDetails.dealStatus}
        dealer={dealer}
        priceDifference={priceDifference}
        currency={carDetails.currency}
      />
      <div className={classes.ProductSection}>
        <ProductImageSlider
          images={carDetails.images}
          showThumbnails
          showDots
        />

        <DetailIconsList carDetails={details} header='Vehicle Details' />
        <Financing
          header='Finance in Advance'
          onClick={handleFinancingModal}
          btnTitle='See my options'
          btnType='success'
        />
        <DetailsTable
          details={carDetails}
          location={`${dealer.contact.location}, ${dealer.contact.city}`}
        />
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
          <DealerReviews
            reviews={dealerReviews}
            header='Dealer Reviews'
            onDelete={onDelete}
          />
        </div>
        <CardWindow header='Why Use CarWorld?'>
          <div className={classes.WhyUse}>
            <p>
              We'll help you find great deals among the millions of vehicles
              available nationwide on CarWorld, and we'll provide you with
              dealer reviews and vehicle history for each one. After all, over
              30 million shoppers use CarWorld to find great deals on used cars
              and new cars in their area. And when it's time to get rid of your
              old ride, sell your car simply and securely on CarWorld.
            </p>
            <p>
              Once you're ready to narrow down your search results, go ahead and
              filter by price, mileage, transmission, trim, days on lot,
              drivetrain, color, engine, options, and deal ratings. And if you
              only want to see cars with a single owner, recent price drops,
              photos, or available financing, our filters can help with that
              too.
            </p>
          </div>
        </CardWindow>
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
