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

const carDetails = {
  id: '001-897-00123',
  price: 25000,
  currency: '£',
  location: 'Küçük Kaymaklı, Lefkoşa',
  kilometers: '63,287 km',
  transmission: 'Automatic',
  exteriorColor: 'Gray',
  interiorColor: 'Black',
  gasMileage: ['70 MPG City', '75 MPG Highway', '72 MPG Combined'],
  engine: 'I4',
  horsepower: '175 Hp',
  driveTrain: 'Rear-Wheel Drive',
  fuelType: 'Gasoline',
  fuelEconomy: '30 MPG (combined)',
  VIN: 'WBAJA9C55KB398601',
  owners: 1,
  titleCheck: true,
  accidents: 0,
  rentalUse: true,
  autoCheckDate: new Date(2021, 1, 21),
  majorOptions: [
    {
      id: 'mo-000122-asas',
      label: 'Sport Package',
      info: '',
      exist: false,
    },
    {
      id: 'mo-000123-812',
      label: 'CD Player',
      info: '',
      exist: true,
    },
    {
      id: 'mo-000124-98812',
      label: 'DVD / TV',
      info: '',
      exist: true,
    },
    {
      id: 'mo-000125-09912',
      label: 'Heated Seats',
      info: '',
      exist: true,
    },

    {
      id: 'mo-000126-78812',
      label: 'Sunroof',
      info: '',
      exist: false,
    },
    {
      id: 'mo-000127-98121',
      label: 'Navigation System',
      info: `An automotive navigation system is part of the automobile controls or a third party add-on used to find direction in an automobile. It typically uses a satellite navigation device to get its position data which is then correlated to a position on a road. When directions are needed routing can be calculated. On the fly traffic information can be used to adjust the route.`,
      exist: false,
    },
    {
      id: 'mo-000128-76162',
      label: 'Bluetooth',
      info: `Bluetooth allows connectivity between devices wirelessly, via radio waves. Today, most new cars with an infotainment system will have Bluetooth connection capability.`,
      exist: true,
    },
    {
      id: 'mo-000129-00122',
      label: 'Backup Camera',
      info: `A back-up camera, also called reversing camera or rearview camera, is a special type of camera attached to the rear of your vehicle. It helps you see the area behind your car when backing up.`,
      exist: true,
    },
    {
      id: 'mo-000130-98712',
      label: 'Blind Spot Monitoring',
      info: `Blind-spot monitoring uses a set of sensors mounted on the side mirrors or rear bumper to detect vehicles in the adjacent lanes. If the sensors detect something, they'll alert you via an audible and/or visual warning.`,
      exist: true,
    },
    {
      id: 'mo-000131-kuıas1212',
      label: 'Air Conditioning',
      info: '',
      exist: true,
    },
    {
      id: 'mo-000132-8i1aus',
      label: 'Alloy Wheels',
      info: '',
      exist: true,
    },
    {
      id: 'mo-000133-09kuu12',
      label: 'Leather Seats',
      info: '',
      exist: true,
    },
    {
      id: 'mo-000134-kuyasdfc',
      label: 'Park Sensor',
      info: `Parking sensors are proximity sensors for road vehicles designed to alert the driver of obstacles while parking. These systems use either electromagnetic or ultrasonic sensors.`,
      exist: true,
    },
    {
      id: 'mo-000135-09kujays',
      label: 'Hydraulic Steering',
      info: '',
      exist: true,
    },
    {
      id: 'mo-000136-lıoası1212',
      label: 'Central Lock System',
      info: '',
      exist: true,
    },
    {
      id: 'mo-000137-olasjy7126',
      label: 'Alarm System',
      info: `A car alarm is an electronic device installed in a vehicle in an attempt to discourage theft of the vehicle itself, its contents, or both. Car alarms work by emitting high-volume sound (often a vehicle-mounted siren, klaxon, pre-recorded verbal warning, the vehicle's own horn, or a combination of these) when the conditions necessary for triggering it are met. `,
      exist: true,
    },
    {
      id: 'mo-000138-98912ipjash',
      label: 'Fog Lamps',
      info: `A front fog light is a type of automotive light that helps the driver see in front of the vehicle. It's located below the headlight assembly and is designed to emit a wide beam of light that is shaped like a “bar,” with a sharp cutoff at the top to prevent it from reflecting off of the fog.`,
      exist: true,
    },
    {
      id: 'mo-000139-9kjyha6snnas',
      label: 'ABS',
      info: `An anti-lock braking system (ABS) is a safety anti-skid braking system used on vehicles, such as cars, motorcycles, trucks, and buses. ABS operates by preventing the wheels from locking up during braking, thereby maintaining tractive contact with the road surface and allowing the driver to maintain more control over the vehicle.`,
      exist: true,
    },
    {
      id: 'mo-000140-kiasm71279kas',
      label: 'ESP',
      info: `When the Electronic Stability Programme detects a loss of steering control, it automatically applies individual brakes to help "steer" the vehicle where the driver intended it to go. ESP is alternatively known as Electronic Stability Control`,
      exist: true,
    },
    {
      id: 'mo-000141-87j1h2nasa',
      label: 'ASR / TCS',
      info: `ASR (Anti-Slip Regulation) is an active car safety feature that operates in conjunction with ABS and EBD. Also it is known as TCS (Traction Control System). `,
      exist: true,
    },
    {
      id: 'mo-000142-olpla9912',
      label: 'Electrical Front Windows',
      info: ``,
      exist: true,
    },
    {
      id: 'mo-000143-o22ukjash',
      label: 'Electrical Rear Windows',
      info: ``,
      exist: true,
    },
    {
      id: 'mo-000144-poily8712mm',
      label: 'Electrical Seats',
      info: ``,
      exist: true,
    },
    {
      id: 'mo-000145-878jjjasjmjhnmmans',
      label: 'Digital A/C',
      info: ``,
      exist: true,
    },
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, rerum
  quidem molestias fugit eligendi nihil unde recusandae ipsa laudantium
  minima aspernatur dolores laborum! Repudiandae pariatur vitae adipisci
  maiores doloribus dolores.`,
  listDate: new Date(2019, 0, 15),
  numberOfSaves: 5,

  priceStatistics: [
    {
      id: 'price-00001',
      date: new Date(2019, 1, 23),
      price: 25000,
    },
    {
      id: 'price-00002',
      date: new Date(2019, 5, 16),
      price: 19500,
    },
    {
      id: 'price-00003',
      date: new Date(2019, 5, 16),
      price: 21000,
    },
    {
      id: 'price-00004',
      date: new Date(2019, 5, 16),
      price: 16800,
    },
    {
      id: 'price-00005',
      date: new Date(2021, 5, 16),
      price: 18500,
    },
    {
      id: 'price-00006',
      date: new Date(2021, 6, 16),
      price: 17500,
    },
  ],

  //reviews won't take place here. these are reviews on dealer, for this reason, in MongoDB database, we will keep
  //this data under dealer document. (No need a seperate collection for such data, a dealer will not have thousands of reviews.)
  //Currently, for test purpose / for dummy data, we will use it under car details.
  reviews: [
    {
      id: 'review-00001',
      date: new Date(2020, 5, 11),
      user: {
        userId: 'user-001-009-134',
        fullName: 'Aytaç Güley',
        profileImage: '',
      },
      stars: 5,
      text: 'Accommodating, friendly.',
    },
    {
      id: 'review-00002',
      date: new Date(2020, 3, 19),
      user: {
        userId: 'user-002-008-123',
        fullName: 'John Doe',
        profileImage: '',
      },
      stars: 4,
      text: 'Yes, they were very responsive via email and by phone in follow-up on the car of interest and to my request to schedule an appointment.',
    },
    {
      id: 'review-00003',
      date: new Date(2020, 2, 10),
      user: {
        userId: 'user-004-018-423',
        fullName: 'Elon Musk',
        profileImage: '',
      },
      stars: 4,
      text: 'Our experience with this dealership was a pleasant one. Our salesperson Shady was very pleasant and helpful from start to finish. He answered every question we had professionally. I would recommend that anyone looking for a Honda would go to Victory Honda of San Bruno.',
    },
    {
      id: 'review-00004',
      date: new Date(2019, 5, 18),
      user: {
        userId: 'user-099-014-413',
        fullName: 'James Bond',
        profileImage: '',
      },
      stars: 5,
      text: "Wonderful from the moment I got out of my car to signing the papers. James was honest, patient, and considerate of my time and didn't play games.",
    },
    {
      id: 'review-00005',
      date: new Date(2019, 4, 10),
      user: {
        userId: 'user-042-074-119',
        fullName: 'Mark Zuckerberg',
        profileImage: '',
      },
      stars: 3,
      text: 'I bought my family car here. They are timely, efficient, and considerate. They gave me a good deal, detailed the car and filled the tank without even being asked.',
    },
    {
      id: 'review-00006',
      date: new Date(2019, 3, 2),
      user: {
        userId: 'user-088-054-210',
        fullName: 'Bruce Willis',
        profileImage: '',
      },
      stars: 4,
      text: 'They had already sold the car. Very helpful if you want a Honda.',
    },
  ],
};

//car details will come from database and we will get this data directly to this component from Redux
//for test purpose, static data used.
const ProductSection = () => {
  const [hideFinancingModal, setHideFinancingModal] = useState(true);

  const handleFinancingModal = () => {
    setHideFinancingModal((prevState) => !prevState);
  };

  const details = useMemo(
    () => ({
      milage: carDetails.kilometers,
      owner: '',
      gearbox: carDetails.transmission,
      driveTrain: carDetails.driveTrain,
      fuelType: carDetails.fuelType,
      engine: carDetails.engine,
      fuelEconomy: carDetails.gasMileage[2],
      interiorColor: carDetails.interiorColor,
    }),
    []
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
        <DetailsTable details={carDetails} />
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
          <DealerReviews reviews={carDetails.reviews} />
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
