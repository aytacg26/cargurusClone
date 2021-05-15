import React from 'react';
import Slider from '../../ui/Slider/Slider';
import VideoSliderContent from './VideoSliderContent/VideoSliderContent';

const sliderContent = [
  {
    id: 'testimonial-content-9021',
    name: 'Matt C.',
    testimonial:
      'CarWorld exceeded my expectations because I met the person that wanted to buy my vehicle at the highest price in a very short period of time.',
    video: 'https://www.youtube.com/embed/mu6ytw6-GgQ?controls=0',
  },
  {
    id: 'testimonial-content-8022',
    name: 'Alex M.',
    testimonial:
      'CarWorld put everything in front of me so I could figure out what the right price was for the car that I was looking for.',
    video: 'https://www.youtube.com/embed/euiit9zTTUo?controls=0',
  },
  {
    id: 'testimonial-content-7023',
    name: 'Meagan G.',
    testimonial:
      "It's definitely the filters on CarGurus that make it easy—you can choose exactly the configuration you're looking for.",
    video: 'https://www.youtube.com/embed/z589_B0td2c?controls=0',
  },
  {
    id: 'testimonial-content-6024',
    name: 'Mike D.',
    testimonial:
      'CarWorld gave me the information that I needed to make sure that I was getting a good deal.',
    video: 'https://www.youtube.com/embed/whn_FI9aaGw?controls=0',
  },
  {
    id: 'testimonial-content-5025',
    name: 'Nadina P.',
    testimonial:
      'Using CarWorld I was able to get all of the features that I wanted, well within my budget.',
    video: 'https://www.youtube.com/embed/UjKZDN9oW-A?controls=0',
  },
  {
    id: 'testimonial-content-4026',
    name: 'Dave M.',
    testimonial:
      'Using CarWorld made me feel empowered because I was able to understand whether I had a good deal before I walked into the dealership.',
    video: 'https://www.youtube.com/embed/siUhX9Kf0I4?controls=0',
  },
];

const VideoSlider = () => {
  return (
    <Slider sliderContent={sliderContent}>
      <VideoSliderContent />
    </Slider>
  );
};

export default VideoSlider;
