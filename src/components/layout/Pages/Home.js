import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';
import MainImageLoader from '../MainImageLoader/MainImageLoader';
import Brands from '../Brands/Brands';
import ProductSlider from '../ProductSlider/ProductSlider';
import SearchWindow from '../SearchWindow/SearchWindow';
import VideoSlider from '../VideoSlider/VideoSlider';
import classes from './Home.module.css';
import ProductCard from '../../ui/ProductCard/ProductCard';
import RecentActivities from '../RecentActivities/RecentActivities';

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

const Home = () => {
  return (
    <div className={classes.Home}>
      <MainImageLoader />
      <SearchWindow header='Know more, shop wisely' />
      <div className={classes.HomeBottomContainer}>
        <RecentActivities />
        <InfoContainer heading='We take the guesswork out' />
        <VideoSlider />
        <ProductSlider header='Recent Test Drives' items={recentTestDrives} />
        <ProductSlider header='Recent Previews' items={recentPreviews} />
        <Brands header='Popular Brands' />
      </div>
    </div>
  );
};

export default Home;
