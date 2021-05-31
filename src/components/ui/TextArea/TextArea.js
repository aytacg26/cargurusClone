import React, { useState, useEffect, useRef } from 'react';
import classes from './TextArea.module.scss';

/**
 * @TODO : Add emoji selection option to message (textarea part) like in facebook
 *         convert rowAdded to number array, instead of object array, count is not required
 *         and instead of copying, we can move push and pop methods..
 *
 */
let rowAdded = [{ count: 0, charSize: 0 }];
const TextArea = ({
  onChange,
  placeholder,
  name,
  title,
  label,
  value,
  maxLength,
  counterText,
  showCounter,
  warningMessage,
  notValid,
  useTextError,
  onBlur,
}) => {
  const [rowSize, setRowSize] = useState(4);
  const [currentScrollHeight, setCurrentScrollHeight] = useState(null);
  const [counter, setCounter] = useState(0);
  const [counterInit, setCounterInit] = useState(0);
  const [initScrollHeight, setInitScrollHeight] = useState(null);
  const textAreaRef = useRef();

  useEffect(() => {
    //Both are same but, one changes in every expand of textarea, the other one remains same for the end of shrink process
    setCurrentScrollHeight(textAreaRef.current.scrollHeight);
    setInitScrollHeight(textAreaRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    const countValue = maxLength || 500;
    setCounter(countValue);
    setCounterInit(countValue);
  }, [maxLength]);

  const handleChange = (e) => {
    onChange && onChange(e);

    setCounter((prevState) => {
      if (counterInit - prevState > e.target.value.length) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    });

    if (e.target.scrollHeight > currentScrollHeight) {
      setRowSize((prevState) => prevState + 1);
      setCurrentScrollHeight(e.target.scrollHeight);
      //convert to number array and use push method to add new charSize
      rowAdded = [
        ...rowAdded,
        {
          count: rowAdded[rowAdded.length - 1].count + 1, //not required, unnecessary calculation and copy process.
          charSize: e.target.value.length,
        },
      ];
    }

    //instead of rowAdded[rowAdded.length-1].charSize, use  rowAdded[rowAdded.length-1]
    if (
      rowAdded.length > 0 &&
      e.target.value.length < rowAdded[rowAdded.length - 1].charSize
    ) {
      setRowSize((prevState) => prevState - 1);
      rowAdded.pop();

      if (rowAdded.length === 1) {
        setCurrentScrollHeight(initScrollHeight);
      }
    }

    //prevent unnecessary space at the beginning of message and also in case of select&delete by the help
    //of mouse & backspace, it will set counter to maxLength
    if (textAreaRef.current.value.trim() === '') {
      setCounter(maxLength || 500);
      textAreaRef.current.value = '';
    }
  };

  const textClass = `${classes.TextArea} ${notValid ? classes.NotValid : ''}`;
  const warningClass = `${classes.WarningContainer} ${
    notValid ? classes.Show : ''
  }`;

  return (
    <label className={classes.textareaLabel}>
      {/* <span>Label</span>  This part should work like in Input Component*/}
      <textarea
        rows={rowSize}
        cols='50'
        placeholder={placeholder}
        name={name}
        title={title}
        maxLength={counterInit}
        value={value}
        className={textClass}
        onChange={handleChange}
        onBlur={onBlur}
        ref={textAreaRef}
        style={{ marginBottom: !showCounter ? '15px' : '' }}
      ></textarea>
      <span
        className={`${classes.Label} ${value ? classes.filled : ''} ${
          notValid ? classes.NotValid : ''
        }`}
      >
        {label}
      </span>
      {warningMessage && !useTextError && (
        <div className={warningClass}>
          <span className={classes.Triangle}></span>
          <div className={classes.Warning}>{warningMessage}</div>
        </div>
      )}
      {showCounter && (
        <div
          className={`${classes.remainingAmount} ${
            notValid ? classes.NotValid : ''
          }`}
        >
          <span className={classes.CounterText}>
            {counterText || 'Remaining : '}
          </span>
          <span className={classes.MaxLength}>{counter}</span>
        </div>
      )}
      {useTextError && notValid && (
        <span className={classes.TextError}>{warningMessage}</span>
      )}
    </label>
  );
};

export default TextArea;
