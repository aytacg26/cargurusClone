import React from 'react';
import InfoContainer from '../../InfoContainer/InfoContainer';
import ProductSlider from '../../ProductSlider/ProductSlider';
import VideoSlider from '../../VideoSlider/VideoSlider';
import ProductCard from '../../../ui/ProductCard/ProductCard';
import RecentActivities from '../../RecentActivities/RecentActivities';
import ListSection from '../../ListSection/ListSection';
import BrandCard from '../../../ui/BrandCard/BrandCard';
import PageContainer from '../PageContainer/PageContainer';

const recentTestDrives = [
  {
    id: 'testdrive-00911-001',
    author: 'Christian Wardlaw',
    header: '2021 Honda CR-V Hybrid',
    text: `Emotion drives your choice in a new car, truck, or SUV. You say you want
   reliability, safety, practicality, and efficiency. Then you buy the
   vehicle you love, think is the best looking, or comes in the right color
   combination, or gives you the biggest thrill, or makes a statement about
   your success. After all, you want your new set of wheels to look good on
   you, in addition to all that other boring stuff. The 2021 Honda CR-V
   Hybrid compact SUV is all about the boring stuff. And it doesn't look
   half bad, either.`,
    image:
      'https://i.postimg.cc/cJdRxm5D/2021-honda-cr-v-hybrid-pic-14066537438311236071-1600x1200.jpg',
    url: '/testdrive/testdrive-00911-001',
  },

  {
    id: 'testdrive-00913-103',
    author: 'Stephen Edelstein',
    header: '2021 BMW 3 Series',
    text: `Early generations of the BMW 3 Series redefined what a luxury car could be, 
    justifying their prestige badge with sporty driving dynamics and impeccable engineering. 
    BMW changed the luxury-car paradigm, proving that nimble sports sedans could be just as desirable as wood-encrusted land yachts. 
    The 3 Series spawned a number of imitators, including the Audi A4, Mercedes-Benz C-Class, and Lexus IS. 
    Those sedans, along with the Acura TLX, Alfa Romeo Giulia, Cadillac CT4, 
    and Infiniti Q50 (which wear more recently-introduced nameplates) still form the 3 Series’ competitive set, but the car itself has changed.`,
    image:
      'https://i.postimg.cc/Kc7J21zv/2021-bmw-3-series-pic-7769521649048609962-1600x1200.jpg',
    url: '/testdrive/testdrive-00913-103',
  },
  {
    id: 'testdrive-10993-105',
    author: 'Eileen Falkenberg-Hull',
    header: '2021 Cadillac Escalade ESV',
    text: `The Escalade ESV is the extended version of the typical Cadillac Escalade. 
    As such, it was included as part of the complete redesign that the Escalade went through for the 2021 model year.
    There are a few key differences between the Escalade and Escalade ESV. For starters, 
    the Escalade ESV is longer—226.9 inches to the Escalades 211.9 inches. 
    It’s also a smidge lower (76.4 inches versus 76.7 inches). 
    The Escalade ESV’s length is added at its back end, where it increases cargo space.`,
    image:
      'https://i.postimg.cc/k5Ht66NS/2021-cadillac-escalade-esv-pic-4476360771367913447-1600x1200.jpg',
    url: '/testdrive/testdrive-10993-105',
  },
  {
    id: 'testdrive-00929-311',
    author: 'Christian Wardlaw',
    header: '2021 Ford Ranger',
    text: `Ford is no stranger to off-roading and has offered FX4 option packages for its pickup trucks for years. 
    The Tremor, however, is relatively new. Briefly used on a sport-truck version of the 2014 F-150, 
    where the name signaled a regular cab model fortified with Ford’s twin-turbocharged 3.5-liter V6 engine, 
    the Tremor name reappeared on the updated 2020 F-Series Super Duty. `,
    image:
      'https://i.postimg.cc/prJTZpjq/2021-ford-ranger-pic-4479408197134464527-1600x1200.jpg',
    url: '/testdrive/testdrive-00929-311',
  },
  {
    id: 'testdrive-60734-613',
    author: 'George Kennedy',
    header: '2021 Lincoln Aviator',
    text: `Ford is no stranger to off-roading and has offered FX4 option packages for its pickup trucks for years. 
    The Tremor, however, is relatively new. Briefly used on a sport-truck version of the 2014 F-150, 
    where the name signaled a regular cab model fortified with Ford’s twin-turbocharged 3.5-liter V6 engine, 
    the Tremor name reappeared on the updated 2020 F-Series Super Duty. `,
    image:
      'https://i.postimg.cc/TYHGXVTn/2021-lincoln-aviator-pic-9232317725823458644-1600x1200.jpg',
    url: '/testdrive/testdrive-60734-613',
  },
];

const recentPreviews = [
  {
    id: 'article-00912-102',
    author: 'Chris Teague',
    header: '2022 Mitsubishi Outlander',
    text: `The Mitsubishi Outlander pulled a disappearing act for 2021, 
    but the company isn’t done with its popular family-hauler. 
    Like it did with the Eclipse Cross, Mitsubishi opted to skip right over the 2021 model year 
    with the Outlander and head straight for 2022. 
    Mitsubishi says the move was because the new Outlander was too advanced to just be a 2021 model, 
    but it can be confusing for buyers shopping for the latest model year.`,
    image:
      'https://i.postimg.cc/fTZmj5MM/2022-mitsubishi-outlander-pic-7408726107006372968-1600x1200.jpg',
    url: '/recent-previews/article-00912-102',
  },
  {
    id: 'article-00830-245',
    author: 'George Kennedy',
    header: '2021 BMW Z4',
    text: `The BMW Z4 offers all the enjoyment of top-down roadster motoring with the benefits of modern in-car tech and advanced safety features. 
    After a three-year hiatus, the Z4 returned for the 2019 model year and is carried over to 2021. 
    The current Z4 replaced the folding retractable hardtop of the previous generation with a cloth convertible top that evokes 
    the spirit of classic roadsters. The top can open or close in 10 seconds at speeds up to 31 mph. 
    Whether the top is opened or closed, the Z4 provides 9.9 cubic feet of cargo space.`,
    image:
      'https://i.postimg.cc/HkKvZFSq/2021-bmw-z4-pic-8510432974092791267-1600x1200.jpg',
    url: '/recent-previews/article-00830-245',
  },
  {
    id: 'article-00159-310',
    author: 'George Kennedy',
    header: '2021 Cadillac XT4',
    text: `The 2021 Cadillac XT4 is a subcompact luxury crossover. 
    It has a spacious cabin for the class and includes a long list of standard features. 
    The XT4 was first introduced for the 2019 model year. 
    In 2020, it gained several driver-assistance features as standard equipment, and it carries over to the 2021 model year unchanged. 
    The XT4’s crossover hatchback layout opens up to 22.5 cubic feet of cargo space behind the 60/40 split-fold rear seats. 
    With the rear seats folded, cargo space grows to 48.9 cubic feet. Trims for the 2021 XT4 are Luxury, Premium Luxury, and Sport. The Luxury trim comes equipped with 18-inch alloy wheels, 
    remote start, eight-way power-adjustable driver’s seat, 6-way power-adjustable front-passenger seat, 
    dual-zone climate control, and a seven-speaker stereo. It also comes standard with the Cadillac User Experience (CUE) infotainment system. 
    This includes an 8-inch touchscreen that supports Apple CarPlay and Android Auto.`,
    image:
      'https://i.postimg.cc/t45FScXX/2021-cadillac-xt4-pic-1611761133878609615-1600x1200.jpg',
    url: '/recent-previews/article-00159-310',
  },
  {
    id: 'article-04011-539',
    author: 'Chris Teague',
    header: '2021 Nissan Rogue Sport',
    text: `Nissan’s SUV lineup has expanded over the last decade to include several models. The smallest is the Kicks crossover and the largest is the Armada, 
    but there are a whopping four other vehicles in between. 
    One, the Rogue Sport, rolls into the 2021 model year with few changes, following a major update for 2020. 
    The Rogue Sport is an entirely different model from the standard Rogue, 
    and slots into the Nissan lineup between the smaller Kicks crossover and larger Rogue. 
    The 2020 model year brought a facelift to the Rogue Sport, as well as a host of standard safety features and equipment upgrades. 
    Changes for 2021 include an upgrade to the SV model with heated seats and a remote start system. 
    The vehicle’s options packages have also been revised.`,
    image:
      'https://i.postimg.cc/L4xFztYG/2021-nissan-rogue-sport-pic-4356032057337494973-1600x1200.jpg',
    url: '/recent-previews/article-04011-539',
  },
];

/**
 *
 * @returns <a href='https://postimg.cc/Dm4Nhbcc' target='_blank'><img src='' border='0' alt='2021-nissan-rogue-sport-pic-4356032057337494973-1600x1200'/></a>
 */

const brands = [
  {
    id: 'ac-032001009-uk',
    company: 'Auto Carriers Ltd',
    brand: 'AC',
    logo: 'https://i.ibb.co/nBvJy6P/AC.png',
    value: 'ac',
  },

  {
    id: 'acura-932101501-uk',
    company: 'Honda Motors Company',
    brand: 'Acura',
    logo: 'https://i.ibb.co/qsJT2q7/acura.png',
    value: 'acura',
  },
  {
    id: 'alfa-0332002008-it',
    company: 'Alfa Romeo Automobiles S.p.A.',
    brand: 'Alfa Romeo',
    logo: 'https://i.ibb.co/4F9Zdjt/Alfa-Romeo.png',
    value: 'alfa-romeo',
  },
  {
    id: 'aston-0332003007-uk',
    company: 'Aston Martin Lagonda Global Holdings plc',
    brand: 'Aston Martin',
    logo: 'https://i.ibb.co/TqWfRb4/Aston-Martin.png',
    value: 'aston-martin',
  },
  {
    id: 'audi-0332004006-ge',
    company: 'Volkswagen Group',
    brand: 'Audi',
    logo: 'https://i.ibb.co/6XgZBJv/Audi.png',
    value: 'audi',
  },
  {
    id: 'bentley-0332005005-uk',
    company: 'Bentley Motors Limited',
    brand: 'Bentley',
    logo: 'https://i.ibb.co/mqWmtg9/Bentley.png',
    value: 'bentley',
  },
  {
    id: 'buick-1339902081-uk',
    company: 'General Motors Company',
    brand: 'Buick',
    logo: 'https://i.ibb.co/1LybrJn/Buick.png',
    value: 'buick',
  },
  {
    id: 'bmw-0332006004-ge',
    company: 'Bayerische Motoren Werke AG',
    brand: 'BMW',
    logo: 'https://i.ibb.co/61mdV5r/BMW.png',
    value: 'bmw',
  },

  {
    id: 'cadillac-9112873104-usa',
    company: 'General Motors Company',
    brand: 'Cadillac',
    logo: 'https://i.ibb.co/WsQFfND/cadillac.png',
    value: 'cadillac',
  },
  {
    id: 'chev-0332007003-usa',
    company: 'General Motors',
    brand: 'Chevrolet',
    logo: 'https://i.ibb.co/V93sdm7/Chervolet.png',
    value: 'chevrolet',
  },
  {
    id: 'chry-0392018003-usa',
    company: 'Stellantis',
    brand: 'Chrysler',
    logo: 'https://i.ibb.co/x8F6RNt/chrysler.png',
    value: 'chrysler',
  },
  {
    id: 'cito-00332008002-fr',
    company: 'Citroen',
    brand: 'Citroen',
    logo: 'https://i.ibb.co/SrYdVdS/Citroen.png',
    value: 'citroen',
  },
  {
    id: 'daih-00332009001-jp',
    company: 'Daihatsu Motor Co., Ltd',
    brand: 'Daihatsu',
    logo: 'https://i.ibb.co/8s0DfpP/Daihatsu.png',
    value: 'daihatsu',
  },
  {
    id: 'dat-00332010010-jp',
    company: 'The Nissan Motor Company, Ltd.',
    brand: 'Datsun',
    logo: 'https://i.ibb.co/QrHYNpZ/Datsun.png',
    value: 'datsun',
  },
  {
    id: 'fer-00332011011-it',
    company: 'Ferrari S.p.A.',
    brand: 'Ferrari',
    logo: 'https://i.ibb.co/9HZ4WKj/Ferrari.png',
    value: 'ferrari',
  },
  {
    id: 'fia-00332012012-it',
    company: 'Fiat Automobiles S.p.A.',
    brand: 'Fiat',
    logo: 'https://i.ibb.co/DrBNVvY/Fiat.png',
    value: 'fiat',
  },
  {
    id: 'frd-00332013012-usa',
    company: 'Ford Motor Company',
    brand: 'Ford',
    logo: 'https://i.ibb.co/dW9WWtQ/Ford.png',
    value: 'ford',
  },
  {
    id: 'hon-00332014014-jp',
    company: 'Honda Motor Company, Ltd.',
    brand: 'Honda',
    logo: 'https://i.ibb.co/tKGq9f0/Honda.png',
    value: 'honda',
  },
  {
    id: 'hyu-00332015015-sk',
    company: 'Hyundai Motor Company',
    brand: 'Hyundai',
    logo: 'https://i.ibb.co/26Yqpxc/Hyundai.png',
    value: 'hyundai',
  },
  {
    id: 'inf-10533065025-jp',
    company: 'Nissan Motor Company, Ltd',
    brand: 'Infiniti',
    logo: 'https://i.ibb.co/LDFby8w/infiniti.png',
    value: 'infiniti',
  },
  {
    id: 'jgr-00332016016-uk',
    company: 'Tata Motors',
    brand: 'Jaguar',
    logo: 'https://i.ibb.co/BLvqvjG/Jaguar.png',
    value: 'jaguar',
  },
  {
    id: 'lam-00332017017-it',
    company: 'Volkswagen Group',
    brand: 'Lamborghini',
    logo: 'https://i.ibb.co/GM83pp6/Lamborghini.png',
    value: 'lamborghini',
  },
  {
    id: 'lro-01332018020-uk',
    company: 'Tata Motors',
    brand: 'Land Rover',
    logo: 'https://i.ibb.co/LY6NqQ2/Land-Rover.png',
    value: 'land-rover',
  },
  {
    id: 'lxs-02332019021-jp',
    company: 'Toyota Motor Corporation',
    brand: 'Lexus',
    logo: 'https://i.ibb.co/GPbJHwy/Lexus.png',
    value: 'lexus',
  },
  {
    id: 'lts-0233202022-uk',
    company: 'Lotus Cars Limited',
    brand: 'Lotus',
    logo: 'https://i.ibb.co/PYcTKHs/Lotus.png',
    value: 'lotus',
  },
  {
    id: 'mst-0233202123-it',
    company: 'Maserati S.p.A.',
    brand: 'Maserati',
    logo: 'https://i.ibb.co/YBtrdRf/Maserati.png',
    value: 'maserati',
  },
  {
    id: 'mzd-0233202224-jp',
    company: 'Mazda Motor Corporation',
    brand: 'Mazda',
    logo: 'https://i.ibb.co/Db090Dg/Mazda.png',
    value: 'mazda',
  },
  {
    id: 'mcl-0233202325-uk',
    company: 'McLaren Racing Limited',
    brand: 'McLaren',
    logo: 'https://i.ibb.co/9VCT48V/Mclaren.png',
    value: 'mclaren',
  },
  {
    id: 'mrc-0233202426-ge',
    company: 'Daimler AG',
    brand: 'Mercedes-Benz',
    logo: 'https://i.ibb.co/txDpr3C/Mercedes.png',
    value: 'mercedes-benz',
  },
  {
    id: 'mg-031233123-uk',
    company: 'SAIC Motor Corporation Limited',
    brand: 'MG',
    logo: 'https://i.ibb.co/sw2KxMd/MGLogo.png',
    value: 'mg',
  },
  {
    id: 'mn-0987123441-uk',
    company: 'Bayerische Motoren Werke AG (BMW)',
    brand: 'Mini',
    logo: 'https://i.ibb.co/yN5zB3v/Mini.png',
    value: 'mini',
  },
  {
    id: 'mts-56712129902-jp',
    company: 'Mitsubishi Motors Corporation',
    brand: 'Mitsubishi',
    logo: 'https://i.ibb.co/YjZ9PK8/Mitsubishi.png',
    value: 'mitsubishi',
  },
  {
    id: 'nis-350370400z-jp',
    company: 'Nissan Motor Company, Ltd.',
    brand: 'Nissan',
    logo: 'https://i.ibb.co/CbR6Qkp/Nissan.png',
    value: 'nissan',
  },
  {
    id: 'opl-789123009-ge',
    company: 'Opel Automobile GmbH',
    brand: 'Opel',
    logo: 'https://i.ibb.co/HTBcLN8/Opel.png',
    value: 'opel',
  },
  {
    id: 'pea-206207306-fr',
    company: 'Stellantis N.V.',
    brand: 'Peugeot',
    logo: 'https://i.ibb.co/Yb7TD5g/Peaguet.png',
    value: 'peugeot',
  },
  {
    id: 'por-911928bxtr-ge',
    company: 'Volkswagen Group',
    brand: 'Porsche',
    logo: 'https://i.ibb.co/7vtwXCr/Porsche.png',
    value: 'porsche',
  },
  {
    id: 'ren-11091921tx-fr',
    company: 'Groupe Renault',
    brand: 'Renault',
    logo: 'https://i.ibb.co/gJFVFMT/Renault.png',
    value: 'renault',
  },
  {
    id: 'rolls-890987113-uk',
    company: 'Rolls-Royce Motor Cars Limited',
    brand: 'Rolls-Royce',
    logo: 'https://i.ibb.co/HpFsKSZ/Rolls-Royce.png',
    value: 'rolls-royce',
  },
  {
    id: 'seat-1453107109-ge',
    company: 'Volkswagen Group',
    brand: 'Seat',
    logo: 'https://i.ibb.co/YyQTzJg/Seat.png',
    value: 'seat',
  },
  {
    id: 'sub-69100345991-jp',
    company: 'Subaru Corporation',
    brand: 'Subaru',
    logo: 'https://i.ibb.co/8bMCKtm/Subaru.png',
    value: 'subaru',
  },
  {
    id: 'szk-000288812981-jp',
    company: 'Suzuki Motor Corporation',
    brand: 'Suzuki',
    logo: 'https://i.ibb.co/dQzKMfw/Suzuki.png',
    value: 'suzuki',
  },
  {
    id: 'tyta-900012579330-jp',
    company: 'Toyota Motor Corporation',
    brand: 'Toyota',
    logo: 'https://i.ibb.co/KDNvfPm/Toyota.png',
    value: 'toyota',
  },
  {
    id: 'vaux-333999745-uk',
    company: 'Vauxhall Motors Limited - Opel',
    brand: 'Vauxhall',
    logo: 'https://i.ibb.co/mcJSsFL/Vauxhall.png',
    value: 'vauxhall',
  },
  {
    id: 'vw-002980907015-ge',
    company: 'Volkswagen Group',
    brand: 'Volkswagen',
    logo: 'https://i.ibb.co/MCYckZm/Volkswagen.png',
    value: 'volkswagen',
  },
  {
    id: 'vol-97813320891-sw',
    company: 'Geely Auto Group',
    brand: 'Volvo',
    logo: 'https://i.ibb.co/P9z9gcL/Volvo.png',
    value: 'volvo',
  },
];

const popularUsedCars = [
  {
    id: 'popular-used-0001',
    header: 'Chevrolet Corvette Coupe RWD',
    price: '11,000',
    url: '/usedcars/popular-used-0001',
    image:
      'https://i.ibb.co/58BzbQx/1991-chevrolet-corvette-pic-1355465292139602171-1024x768.jpg',
    year: 1991,
  },
  {
    id: 'popular-used-0002',
    header: 'Chevrolet Corvette Convertible RWD',
    price: '28,995',
    url: '/usedcars/popular-used-0002',
    image:
      'https://i.ibb.co/tXDVhqV/2008-chevrolet-corvette-pic-8405479132711759244-1024x768.jpg',
    year: 2008,
  },
  {
    id: 'popular-used-0003',
    header: 'Chevrolet Corvette ZR1 1ZR Coupe RWD',
    price: '149,995',
    url: '/usedcars/popular-used-0003',
    image:
      'https://i.ibb.co/VNmJpNM/2019-chevrolet-corvette-pic-9018223043895571996-1024x768.jpg',
    year: 2019,
  },
  {
    id: 'popular-used-0004',
    header: 'Chevrolet Corvette Z06 3LZ Coupe RWD',
    price: '80,999',
    url: '/usedcars/popular-used-0004',
    image:
      'https://i.ibb.co/0DNZjyq/2016-chevrolet-corvette-pic-1083841462673765789-1024x768.jpg',
    year: 2016,
  },
  {
    id: 'popular-used-0005',
    header: 'Chevrolet Corvette Stingray 1LT Convertible RWD',
    price: '99,999',
    url: '/usedcars/popular-used-0005',
    image:
      'https://i.ibb.co/J2crn73/2021-chevrolet-corvette-pic-5465566223307647062-1024x768.jpg',
    year: 2021,
  },
  {
    id: 'popular-used-0006',
    header: 'Chevrolet Corvette Grand Sport 1LT Convertible RWD',
    price: '61,986',
    url: '/usedcars/popular-used-0006',
    image:
      'https://i.ibb.co/f8MFwHy/2017-chevrolet-corvette-pic-8048989108811306137-1024x768.jpg',
    year: 2017,
  },
  {
    id: 'popular-used-0007',
    header: 'Chevrolet Corvette Stingray 1LT Coupe RWD',
    price: '55,000',
    url: '/usedcars/popular-used-0007',
    image:
      'https://i.ibb.co/dfCZbQg/2019-chevrolet-corvette-pic-9018223043895571996-1024x768.jpg',
    year: 2019,
  },
  {
    id: 'popular-used-0008',
    header: 'Ford Fiesta SE FWD',
    price: '10,995',
    url: '/usedcars/popular-used-0008',
    image:
      'https://i.ibb.co/SrNxCr2/2019-ford-fiesta-pic-3125676983034149309-1024x768.jpg',
    year: 2019,
  },
  {
    id: 'popular-used-0009',
    header: 'Ford Fiesta SE FWD',
    price: '12,995',
    url: '/usedcars/popular-used-0009',
    image:
      'https://i.ibb.co/cwvGcn0/2019-ford-fiesta-pic-5075961294003593843-1024x768.jpg',
    year: 2019,
  },
  {
    id: 'popular-used-0010',
    header: 'Audi A4 2.0T ultra Premium FWD',
    price: '21,495',
    url: '/usedcars/popular-used-0010',
    image:
      'https://i.ibb.co/jL4kN3G/2017-audi-a4-pic-3920156294630218243-1024x768.jpg',
    year: 2017,
  },
  {
    id: 'popular-used-0011',
    header: 'BMW 3 Series 328i Sedan RWD',
    price: '14,600',
    url: '/usedcars/popular-used-0011',
    image:
      'https://i.ibb.co/bgkNt7D/2015-bmw-3-series-pic-8930563024803249318-1024x768.jpg',
    year: 2015,
  },
  {
    id: 'popular-used-0012',
    header: 'BMW 3 Series 335i Sedan RWD',
    price: '15,290',
    url: '/usedcars/popular-used-0012',
    image:
      'https://i.ibb.co/j38bT9L/2013-bmw-3-series-pic-6802116493646257977-1024x768.jpg',
    year: 2013,
  },
];

const Home = () => {
  return (
    <PageContainer upSection hasSearchWindow>
      <RecentActivities />
      <InfoContainer heading='We take the guesswork out' />
      <VideoSlider />
      <ProductSlider header='Recent Test Drives' items={recentTestDrives} />
      <ProductSlider header='Recent Previews' items={recentPreviews} />
      <ListSection
        header='Popular Brands'
        items={brands}
        Component={<BrandCard />}
      />
      <ListSection
        header='Popular Used Cars'
        items={popularUsedCars}
        Component={
          <ProductCard
            noBoxShadow
            subHeadingStyle={{
              border: '1px solid #ccc',
              marginBottom: '20px',
            }}
          />
        }
      />
      <ListSection
        header='Popular New Cars'
        items={[]}
        Component={<ProductCard noBoxShadow isNew />}
      />
      <ListSection
        header='Popular Pickup Trucks'
        items={[]}
        Component={<ProductCard noBoxShadow />}
      />
    </PageContainer>
  );
};

export default Home;
