import React, { useState, useEffect, useRef } from 'react';
import SliderArrows from '../SliderArrows/SliderArrows';
import SliderContent from '../SliderContent/SliderContent';
import SliderDot from '../SliderDot/SliderDot';
import classes from './Slider.module.css';
import { chunkArray } from '../../../utils/utilsFuncs';

const Slider = ({ sliderContent, children, childProps, contentSize }) => {
  const [leftValue, setLeftValue] = useState(200);
  const [dotVal, setDotVal] = useState(0);
  const [touchMove, setTouchMove] = useState(0);
  const [initTouch, setInitTouch] = useState(0);
  const [contentToUse, setContentToUse] = useState(null);
  const [allowedMaxContent, setAllowedMaxContent] = useState(1);
  const [isReady, setIsReady] = useState(false);
  const sliderRef = useRef();

  useEffect(() => {
    let arrayChunk = sliderContent;
    let maxContent = 1;
    console.log('UseEffect No 1');
    if (isReady) {
      maxContent = Math.floor(
        sliderRef.current.clientWidth /
          sliderRef.current.childNodes[0].clientWidth
      );

      if (contentSize > 1 && maxContent >= contentSize) {
        setAllowedMaxContent(maxContent);
        arrayChunk = chunkArray(sliderContent, maxContent);
      }
    }

    setContentToUse(arrayChunk);
  }, [sliderContent, contentSize, isReady]);

  useEffect(() => {
    console.log('UseEffect No 2');
    setIsReady(true);
  }, []);

  //Not an effective and efficient touch slide method, must be improved.
  /**
   * @TODO : Improve touch slide
   */
  useEffect(() => {
    console.log('UseEffect No 3');
    const slider = sliderRef.current;

    const handleTouchStart = (e) => {
      setInitTouch(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
      let moveDiff = initTouch - e.targetTouches[0].clientX;

      if (moveDiff >= 50) {
        setTouchMove(200);
      } else if (moveDiff < -50) {
        setTouchMove(-200);
      } else {
        setTouchMove(0);
      }
    };

    const handleTouchEnd = (e) => {
      if (touchMove === 200 && leftValue <= (contentToUse?.length - 1) * 200) {
        setLeftValue((prevState) => {
          if (prevState <= (contentToUse?.length - 1) * 200) {
            return prevState + 200;
          }
        });
        setInitTouch(0);
        setTouchMove(0);
        setDotVal((prevState) => prevState + 1);
      } else if (touchMove === -200 && leftValue > 200) {
        setLeftValue((prevState) => {
          if (prevState > 200) {
            return prevState - 200;
          }
        });
        setInitTouch(0);
        setTouchMove(0);
        setDotVal((prevState) => prevState - 1);
      } else {
        setLeftValue((prevState) => prevState);
      }
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);

    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);

      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [leftValue, touchMove, initTouch, contentToUse?.length]);

  const handleSlider = (e) => {
    if (e.target.id === 'left') {
      setLeftValue((prevState) => {
        if (prevState <= (contentToUse?.length - 1) * 200) {
          return prevState + 200;
        }
      });
    } else {
      setLeftValue((prevState) => {
        if (prevState > 200) {
          return prevState - 200;
        }
      });
    }
  };

  console.log('I AM GOING TO RENDER...');
  /**
   * @TODO : Improve Slider Structure according to the below explanation :
   */
  //This should be improved accourding to the amount of content we want to have inside a slider content
  //For example, for products (cars), in each slide, we need to show 3 cars/products, but current version
  //will list only one product which is not useful.
  //we will give number of views in each slide content as number props to Slider and it will convert sliderContent
  //to a new array with arrays with given length. To make it responsive, we need to get width of sliderContainer and
  //width of each child inside content programatically and calculate the max number of product in each content and
  //it will convert sliderContent array to array of arrays and will create the slider content accordingly. This means
  //we will use forEach or second map inside the map function. sliderContent = [[{..},{..},{..}...], [{..},{..},{..}...], [{},{},{}...]] || [{},{},{},...]
  return (
    <div className={classes.SliderContainer} ref={sliderRef}>
      {contentToUse?.map((content, index) => (
        <SliderContent
          left={(index + 1) * 200 - leftValue}
          key={content.id ? content.id : `slider-${index}`}
        >
          {allowedMaxContent === 1 || !Array.isArray(content)
            ? React.cloneElement(
                children,
                !childProps ? { ...content } : { ...childProps }
              )
            : content?.map((el, idx) => (
                <span key={el.id ? el.id : `element-${idx}`}>
                  {React.cloneElement(
                    children,
                    !childProps ? { ...content } : { ...childProps }
                  )}
                </span>
              ))}
        </SliderContent>
      ))}
      {contentToUse?.length > 1 && (
        <SliderArrows
          onSlide={handleSlider}
          disableLeft={leftValue === sliderContent.length * 200}
          disableRight={leftValue === 200}
        />
      )}
      {contentToUse?.length > 1 && (
        <div className={classes.SliderDots}>
          {contentToUse?.map((content, index) => (
            <SliderDot key={`dot-${content.id}`} isActive={index === dotVal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
