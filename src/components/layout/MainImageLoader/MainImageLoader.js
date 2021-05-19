import React, { useState, useEffect, useRef, Fragment } from 'react';
import classes from './MainImageLoader.module.css';
import { randomNum, loadImage } from '../../../utils/utilsFuncs';
import StoryCard from '../../ui/StoryCard/StoryCard';
import BackupLoader from './BackupLoader/BackupLoader';

const loaderImages = [
  {
    id: 'main-image-001-0234',
    // image: 'https://i.ibb.co/rkcLxTR/meagan-2x.jpg',
    image: 'https://i.postimg.cc/XqHpqd7R/meagan-2x.jpg',
    title: 'Great Deal',
    story:
      'Meagan found the exact car she wanted on CarWorld and only had to go to one dealership',
    LQImage: 'https://i.ibb.co/pwwK75J/meagan-2x-min-1.jpg',
  },
  {
    id: 'main-image-002-0245',
    // image: 'https://i.ibb.co/Gnvw1Rj/mike-2x.png',
    image: 'https://i.postimg.cc/nVRzvKp5/mike-2x.png',
    title: 'Great Deal',
    story:
      'Mike, a first-time used car shopper, found a great deal on a SUV for his family',
    LQImage: 'https://i.ibb.co/JzsNKc6/mike-lowqu.jpg',
  },
  {
    id: 'main-image-003-0346',
    // image: 'https://i.ibb.co/zFTnJFq/scott-2x-min.jpg',
    image: 'https://i.postimg.cc/fTPVhcPX/scott-2x.jpg',
    title: 'Great Deal',
    story: 'Scott found his GMC track on CarWorld from a 4-star dealer',
    LQImage: 'https://i.ibb.co/v1t3KLt/scott-2x-low.jpg',
  },
];

const MainImageLoader = ({ hasImage, children }) => {
  const [story, setStory] = useState('');
  const [removeBlur, setRemoveBlur] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const selectedIndex = randomNum(0, 3);
    const selectedStory = loaderImages[selectedIndex];
    const url = selectedStory['image'];
    setStory(selectedStory);
    loadImage(url, imageRef.current);
  }, []);

  useEffect(() => {
    //Remove timer, this is just for testing cases of low internet speed to see load process from loader to blur low quality image then original image
    const timer = setTimeout(() => {
      const url = story['image'];
      loadImage(url, imageRef.current, setRemoveBlur);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [story]);

  return (
    <div className={classes['image-section']}>
      <img
        src={story.LQImage}
        alt='Car Cyprus For Sale Cars'
        ref={imageRef}
        className={removeBlur ? '' : classes.ImageBlur}
      />
      {!story && <BackupLoader text='Loading...' />}
      {removeBlur && <StoryCard {...story} />}
    </div>
  );
};

export default MainImageLoader;
