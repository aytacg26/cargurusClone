import { useState, forwardRef, useEffect } from 'react';
import classes from './TextArea.module.css';
import React from 'react';

//requires more improvement...
//NEEDS TOO MUCH IMPROVEMENT. DO NOT USE THIS UNTIL SOLVING PROBLEMS...
//The newly created TextArea is better version and automatically resizing without a problen
/**
 *
 * @deprecated
 */
const TextArea = (
  { maxLength, name, showCounter, counterText, placeHolder, onChange, value },
  ref
) => {
  const [textCount, setTextCount] = useState(0);
  const [counterSize, setCounterSize] = useState(maxLength);
  const [userInput, setUserInput] = useState(value);

  useEffect(() => {
    if (userInput.length === 0) {
      setTextCount(0);
      setCounterSize(maxLength);
      setUserInput('');
    }
  }, [value, maxLength, userInput.length]);

  const counterArea = (
    <div className={classes.countCharsArea}>
      <span className={classes.remaining}>{counterText}</span>
      <span className={classes.maxChar}>{counterSize}</span>
    </div>
  );

  const placeHolderArea = (
    <span className={classes.textAreaPlaceholder}>{placeHolder}</span>
  );

  const getText = (e) => {
    const counter = counterSize;
    setUserInput(e.target.textContent);

    if (e.which === 8) {
      const textSize = textCount;
      const userInputLength = userInput.length;
      const missingAmount = textSize - userInputLength;
      const newTextCount = textSize - missingAmount;
      const newCounter = counter + missingAmount;

      setTextCount(newTextCount);
      setCounterSize(newCounter);
    }
    onChange && onChange(userInput);
  };

  const handleText = (e) => {
    let count = textCount;
    let cSize = counterSize;

    const key = e.which;
    console.log(e.key);

    if (
      key !== 37 &&
      key !== 38 &&
      key !== 39 &&
      key !== 40 &&
      key !== 46 &&
      key !== 13 &&
      key !== 16 &&
      key !== 9
    ) {
      if (e.which !== 8 && count <= maxLength) {
        count++;
        cSize--;

        if (count === maxLength + 1) {
          cSize++;
        }
      } else if (e.which === 8 && count > 0) {
        if (count === maxLength + 1) {
          cSize++;
          count = maxLength - 1;
        } else {
          cSize++;
          count--;
        }
      }

      if (count > maxLength && e.which !== 8) {
        e.preventDefault();
      }

      setTextCount(count);
      setCounterSize(cSize);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className={classes.textAreaContainer}>
      <div className={classes.textButtonArea}>
        <span
          className={classes.textAreaCreatePost}
          role='textbox'
          contentEditable
          spellCheck='false'
          name={name}
          onKeyDown={handleText}
          onKeyUp={getText}
          ref={ref}
        ></span>
        {!textCount && placeHolderArea}
        {showCounter && counterArea}
      </div>
    </div>
  );
};

export default forwardRef(TextArea);
