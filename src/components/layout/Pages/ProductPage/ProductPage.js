import React, { useState } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import classes from './ProductPage.module.scss';
import ShareData from './ShareData/ShareData';
import DealerInteraction from './DealerInteraction/DealerInteraction';
import ProductSection from './ProductSection/ProductSection';
import HeaderSection from './HeaderSection/HeaderSection';

//Lift state up:

const carDetails = {
  id: '001-897-00123',
  title: 'Toyota Corolla Hybrid LE FWD',
  currency: '€',
  kilometers: '63,287 km',
  transmission: 'Automatic',
  exteriorColor: 'Classic Silver Metallic',
  exterionColorCode: 'silver',
  interiorColor: 'All Black',
  interiorColorCode: 'black',
  gasMileage: ['53 MPG City', '52 MPG Highway', '52 MPG Combined'],
  engine: 'I4 Hybrid',
  horsepower: '115 Hp',
  driveTrain: 'Front-Wheel Drive',
  fuelType: 'Hybrid',
  fuelEconomy: '53 MPG (combined)',
  VIN: 'WBAJA9C55KB398601',
  owners: 2,
  titleCheck: true,
  accidents: 0,
  rentalUse: false,
  autoCheckDate: new Date(2021, 1, 21),
  bodyStyle: 'sedan',
  isNew: false,
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
  dealStatus: 'good',
  priceStatistics: [
    {
      id: 'price-00001',
      date: new Date(2019, 1, 23),
      price: 58900,
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
      price: 16700,
    },
  ],
  images: [
    {
      id: 'product-0001-image-00001',
      title: 'Toyota Corolla Hybrid Front View',
      image:
        'https://i.ibb.co/ws4DttK/2020-toyota-corolla-hybrid-pic-633700878898162623-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 5),
    },
    {
      id: 'product-0001-image-00002',
      title: 'Toyota Corolla Hybrid Left-Side View',
      image:
        'https://i.ibb.co/ZTy5GLY/2020-toyota-corolla-hybrid-pic-812103716441719274-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 5),
    },
    {
      id: 'product-0001-image-00003',
      title: 'Toyota Corolla Hybrid Right-Side View',
      image:
        'https://i.ibb.co/0qghpj0/2020-toyota-corolla-hybrid-pic-2159702537516573652-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 5),
    },
    {
      id: 'product-0001-image-00004',
      title: 'Toyota Corolla Hybrid Right-Front View',
      image:
        'https://i.ibb.co/1Rywrhq/2020-toyota-corolla-hybrid-pic-2335342103311468926-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 5),
    },
    {
      id: 'product-0001-image-00005',
      title: 'Toyota Corolla Hybrid Interior From View',
      image:
        'https://i.ibb.co/1L78Cbt/2020-toyota-corolla-hybrid-pic-3037144560513971682-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 5),
    },
    {
      id: 'product-0001-image-00006',
      title: 'Toyota Corolla Hybrid Interior From View',
      image:
        'https://i.ibb.co/XLTJdvr/2020-toyota-corolla-hybrid-pic-3379924917052164203-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 5),
    },
    {
      id: 'product-0001-image-00007',
      title: 'Toyota Corolla Hybrid Interior From View',
      image:
        'https://i.ibb.co/WWSLSxx/2020-toyota-corolla-hybrid-pic-3389730172740946323-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 5),
    },
    {
      id: 'product-0001-image-00008',
      title: 'Toyota Corolla Hybrid Interior Rear View',
      image:
        'https://i.ibb.co/2gd8gSC/2020-toyota-corolla-hybrid-pic-3466645674824044783-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00009',
      title: 'Toyota Corolla Hybrid Rear Left View',
      image:
        'https://i.ibb.co/YpSzvGV/2020-toyota-corolla-hybrid-pic-3631227820413213050-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00010',
      title: 'Toyota Corolla Hybrid Rear Right View',
      image:
        'https://i.ibb.co/VtPQH5d/2020-toyota-corolla-hybrid-pic-4564865743917737521-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00011',
      title: 'Toyota Corolla Hybrid Rear View',
      image:
        'https://i.ibb.co/6BhZ4dK/2020-toyota-corolla-hybrid-pic-5137659795071524789-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00012',
      title: 'Toyota Corolla Hybrid Interior View',
      image:
        'https://i.ibb.co/ZX2hGCq/2020-toyota-corolla-hybrid-pic-5179240576504413669-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00013',
      title: 'Toyota Corolla Hybrid Interior View',
      image:
        'https://i.ibb.co/CMmWCdz/2020-toyota-corolla-hybrid-pic-5751050186694841731-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00014',
      title: 'Toyota Corolla Hybrid trunk View',
      image:
        'https://i.ibb.co/GxL0zH2/2020-toyota-corolla-hybrid-pic-6180758910939413874-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00015',
      title: 'Toyota Corolla Hybrid Front Left View',
      image:
        'https://i.ibb.co/RTWM57M/2020-toyota-corolla-hybrid-pic-6981589165756025645-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00016',
      title: 'Toyota Corolla Hybrid Front Interior View',
      image:
        'https://i.ibb.co/JjzDYyc/2020-toyota-corolla-hybrid-pic-7395130722253800848-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00017',
      title: 'Toyota Corolla Hybrid Rear Seats View',
      image:
        'https://i.ibb.co/bKGqttN/2020-toyota-corolla-hybrid-pic-7407104543256135790-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
    {
      id: 'product-0001-image-00018',
      title: 'Toyota Corolla Hybrid Front Seats View',
      image:
        'https://i.ibb.co/xMBVVDs/2020-toyota-corolla-hybrid-pic-8223146352278701485-1024x768.jpg',
      uploadedAt: new Date(2019, 0, 6),
    },
  ],
  dealerId: 'dealer-001-0785-09811-a245',
  dealerLocation: 'Hamitkoy, Nicosia',
};

const dealer = {
  dealerId: 'dealer-001-0785-09811-a245',
  name: 'Star Auto Sales',
  logo: '',
  contact: {
    address: 'North West 7th Ave. Long Road Street, No 9120',
    location: 'Hamitkoy',
    city: 'Nicosia',
    country: 'Cyprus',
    phone: '05338110191',
    email: 'sales@starauto.com',
    website: 'https://www.starautos.com',
  },
  registeredAt: new Date(2016, 2, 14),
  currentStockAmount: 38,
  coordinates: {
    Latitude: 35.2215,
    Longitude: 33.3767,
  },
  reviews: [
    {
      id: 'review-00001',
      date: new Date(2020, 5, 11),
      user: {
        userId: 'user-001-009-134',
        fullName: 'Aytaç Güley',
        gender: 'male',
        profileImage: '',
      },
      stars: 5,
      text: 'Accommodating, friendly.',
      reactions: {
        likes: [
          {
            id: 'ld-00001-01241',
            date: new Date(2020, 6, 12),
            type: 'like',
            typeNo: 1,
            user: {
              userId: 'user-002-008-123',
              userName: 'John Doe',
              profileImage: '',
            },
          },
        ],
        dislikes: [
          {
            id: 'ld-00002-01342',
            date: new Date(2020, 6, 12),
            type: 'dislike',
            typeNo: 0,
            user: {
              userId: 'user-099-014-413',
              userName: 'James Bond',
              profileImage:
                'https://i.ibb.co/R25Fqjh/James-Bond-Daniel-Craig-Profile.jpg',
            },
          },
        ],
      },
    },
    {
      id: 'review-00002',
      date: new Date(2020, 3, 19),
      user: {
        userId: 'user-002-008-123',
        fullName: 'John Doe',
        gender: '',
        profileImage: '',
      },
      stars: 4,
      text: 'Yes, they were very responsive via email and by phone in follow-up on the car of interest and to my request to schedule an appointment.',
      reactions: {
        likes: [],
        dislikes: [],
      },
    },
    {
      id: 'review-00003',
      date: new Date(2020, 2, 10),
      user: {
        userId: 'user-004-018-423',
        fullName: 'Elon Musk',
        gender: 'male',
        profileImage:
          'https://i.ibb.co/QCwtNkf/Elon-Musk-Royal-Society-crop1.jpg',
      },
      stars: 4,
      text: 'Our experience with this dealership was a pleasant one. Our salesperson Shady was very pleasant and helpful from start to finish. He answered every question we had professionally. I would recommend that anyone looking for a Honda would go to Victory Honda of San Bruno.',
      reactions: {
        likes: [
          {
            id: 'ld-00001-01241',
            date: new Date(2020, 2, 11),
            type: 'like',
            typeNo: 1,
            user: {
              userId: 'user-002-008-123',
              userName: 'John Doe',
              profileImage: '',
            },
          },
          {
            id: 'ld-00002-01342',
            date: new Date(2020, 2, 12),
            type: 'like',
            typeNo: 1,
            user: {
              userId: 'user-099-014-413',
              userName: 'James Bond',
              profileImage:
                'https://i.ibb.co/R25Fqjh/James-Bond-Daniel-Craig-Profile.jpg',
            },
          },
        ],
        dislikes: [
          {
            id: 'ld-00003-04312',
            date: new Date(2020, 2, 11),
            type: 'dislike',
            typeNo: 0,
            user: {
              userId: 'user-042-074-119',
              userName: 'Mark Zuckerberg',
              profileImage:
                'https://i.ibb.co/Qd8HkT5/mark-zuckerberg-profile-650x434.jpg',
            },
          },
        ],
      },
    },
    {
      id: 'review-00004',
      date: new Date(2019, 5, 18),
      user: {
        userId: 'user-099-014-413',
        fullName: 'James Bond',
        gender: 'male',
        profileImage:
          'https://i.ibb.co/R25Fqjh/James-Bond-Daniel-Craig-Profile.jpg',
      },
      stars: 5,
      text: "Wonderful from the moment I got out of my car to signing the papers. James was honest, patient, and considerate of my time and didn't play games.",
      reactions: {
        likes: [
          {
            id: 'ld-00003-04312',
            date: new Date(2019, 5, 21),
            type: 'like',
            typeNo: 1,
            user: {
              userId: 'user-042-074-119',
              userName: 'Mark Zuckerberg',
              profileImage:
                'https://i.ibb.co/Qd8HkT5/mark-zuckerberg-profile-650x434.jpg',
            },
          },
        ],
        dislikes: [
          {
            id: 'ld-00001-01241',
            date: new Date(2020, 2, 23),
            type: 'dislike',
            typeNo: 0,
            user: {
              userId: 'user-002-008-123',
              userName: 'John Doe',
              profileImage: '',
            },
          },
          {
            id: 'ld-00001-01930',
            date: new Date(2020, 2, 23),
            type: 'dislike',
            typeNo: 0,
            user: {
              userId: 'user-004-018-423',
              userName: 'Elon Musk',
              profileImage:
                'https://i.ibb.co/QCwtNkf/Elon-Musk-Royal-Society-crop1.jpg',
            },
          },
        ],
      },
    },
    {
      id: 'review-00005',
      date: new Date(2019, 4, 10),
      user: {
        userId: 'user-042-074-119',
        fullName: 'Mark Zuckerberg',
        gender: 'male',
        profileImage:
          'https://i.ibb.co/Qd8HkT5/mark-zuckerberg-profile-650x434.jpg',
      },
      stars: 3,
      text: 'I bought my family car here. They are timely, efficient, and considerate. They gave me a good deal, detailed the car and filled the tank without even being asked.',
      reactions: {
        likes: [],
        dislikes: [],
      },
    },
    {
      id: 'review-00006',
      date: new Date(2019, 3, 2),
      user: {
        userId: 'user-088-054-210',
        fullName: 'Bruce Willis',
        gender: 'male',
        profileImage: 'https://i.ibb.co/Ss9w004/Bruce-willis-2012-5-23.jpg',
      },
      stars: 4,
      text: 'They had already sold the car. Very helpful if you want a Honda.',
      reactions: {
        likes: [],
        dislikes: [],
      },
    },
    {
      id: 'review-00007',
      date: new Date(2021, 2, 11),
      user: {
        userId: 'user-001-109-135',
        fullName: 'Asrın Sevicer',
        gender: 'male',
        profileImage: '',
      },
      stars: 1,
      text: 'This site cloned from CarGurus by Aytaç Güley, he is looking for FrontEnd React Developer Job, but until now, no one accepts him as developer and found no job from any vacancy application. On any application, just receives, "We are sorry to inform you that you have not been selected for an interview for this position"... (from junior to senior, from no experience to 4 years experience, all replies are same)',
      reactions: {
        likes: [
          {
            id: 'ld-00001-01341',
            date: new Date(2020, 6, 12),
            type: 'like',
            typeNo: 1,
            user: {
              userId: 'user-002-008-123',
              userName: 'John Doe',
              profileImage: '',
            },
          },
        ],
        dislikes: [
          {
            id: 'ld-00002-01842',
            date: new Date(2020, 6, 12),
            type: 'dislike',
            typeNo: 0,
            user: {
              userId: 'user-099-014-413',
              userName: 'James Bond',
              profileImage:
                'https://i.ibb.co/R25Fqjh/James-Bond-Daniel-Craig-Profile.jpg',
            },
          },
        ],
      },
    },
    {
      id: 'review-00008',
      date: new Date(2021, 3, 15),
      user: {
        userId: 'user-001-919-171',
        fullName: 'Alicia Vikander',
        gender: 'female',
        profileImage: 'https://i.ibb.co/V9T3b1h/3-DAYOUTREEF-jumbo.jpg',
      },
      stars: 5,
      text: 'I bought my BMW i8 here, Great car, great service,  great price',
      reactions: {
        likes: [
          {
            id: 'ld-00001-01346',
            date: new Date(2021, 3, 17),
            type: 'like',
            typeNo: 1,
            user: {
              userId: 'user-002-008-123',
              userName: 'John Doe',
              profileImage: '',
            },
          },
          {
            id: 'ld-00002-01832',
            date: new Date(2021, 3, 18),
            type: 'like',
            typeNo: 1,
            user: {
              userId: 'user-099-014-413',
              userName: 'James Bond',
              profileImage:
                'https://i.ibb.co/R25Fqjh/James-Bond-Daniel-Craig-Profile.jpg',
            },
          },
          {
            id: 'ld-00001-01930',
            date: new Date(2021, 3, 23),
            type: 'like',
            typeNo: 1,
            user: {
              userId: 'user-004-018-423',
              userName: 'Elon Musk',
              profileImage:
                'https://i.ibb.co/QCwtNkf/Elon-Musk-Royal-Society-crop1.jpg',
            },
          },
        ],
        dislikes: [],
      },
    },
  ],
};

const ProductPage = () => {
  const [dealerData, setDealerData] = useState(dealer);

  const totalStars = dealerData.reviews.reduce((total, review) => {
    return total + review.stars;
  }, 0);

  const rate =
    dealerData.reviews.length > 0
      ? (totalStars / dealerData.reviews.length).toFixed(2)
      : 0;
  const priceDifference =
    carDetails.priceStatistics[0].price -
    carDetails.priceStatistics[carDetails.priceStatistics.length - 1].price;

  const handleDelete = (id) => {
    setDealerData((prevData) => {
      return {
        ...prevData,
        reviews: prevData.reviews.filter((review) => review.id !== id),
      };
    });
  };

  return (
    <PageContainer>
      <div className={classes.ProductDetailsContainer}>
        <HeaderSection
          productHeader={carDetails.title}
          dealer={dealerData.name}
          location={dealerData.contact.location}
        />
        <div className={classes.DetailsSections}>
          <ShareData />
          <ProductSection
            carDetails={carDetails}
            dealer={dealerData}
            onDelete={handleDelete}
            priceDifference={priceDifference}
          />
          <DealerInteraction
            rate={rate}
            numberOfReviews={dealerData.reviews.length}
            dealStatus={carDetails.dealStatus}
            priceDifference={priceDifference}
            dealer={dealerData}
            currency={carDetails.currency}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductPage;
