import React, { useState, useMemo, Fragment, lazy, Suspense } from 'react';
import Loader from '../../../../ui/Loader/Loader';
// import Modal from '../../../../ui/Modal/Modal';
import Financing from '../../../Financing/Financing';
import DetailIconsList from './DetailIconsList/DetailIconsList';
import DetailsTable from './DetailsTable/DetailsTable';
import classes from './ProductSection.module.scss';

const Modal = lazy(() => import('../../../../ui/Modal/Modal'));

//car details will come from database and we will get this data directly to this component from Redux
//for test purpose, static data used.
const ProductSection = () => {
  const [hideFinancingModal, setHideFinancingModal] = useState(true);

  const handleFinancingModal = () => {
    setHideFinancingModal((prevState) => !prevState);
  };

  const carDetails = useMemo(
    () => ({
      milage: '30,775 miles',
      owner: '1 owner',
      gearbox: '6 speed Automatic',
      driveTrain: 'Front-Wheel Drive',
      fuelType: 'Gasoline',
      engine: 'I4',
      fuelEconomy: '30 MPG (combined)',
      interiorColor: 'Black',
    }),
    []
  );

  return (
    <Fragment>
      <div className={classes.ProductSection}>
        <div className={classes.ImageBox}>ImageBox</div>
        <DetailIconsList carDetails={carDetails} header='Vehicle Details' />
        <Financing
          header='Finance in Advance'
          onClick={handleFinancingModal}
          btnTitle='See my options'
          btnType='success'
        />
        <DetailsTable />
        <div id='reviews' className={classes.Reviews}>
          Reviews
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
