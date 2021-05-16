import React, { useState } from 'react';
import { emailValidation } from '../../../../utils/utilsFuncs';
import Button from '../../../ui/Button/Button';
import Input from '../../../ui/Input/Input';
import classes from './SubscribeSection.module.css';

const SubscribeSection = ({ header }) => {
  const [subscribe, setSubscribe] = useState('');
  const [notValid, setNotValid] = useState(false);

  const handleSubscribe = (e) => {
    setNotValid(false);
    setSubscribe(e.target.value);
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = emailValidation(subscribe);

    if (isValidEmail) {
      console.log(subscribe);
    } else {
      setNotValid(true);
    }
  };

  return (
    <div className={classes.SubscribeContainer}>
      <span className={classes.SubscribeHeading}>{header}</span>
      <form className={classes.Subscribe} onSubmit={handleSubscribeSubmit}>
        <Input
          type='text'
          name='subscribe'
          value={subscribe}
          placeholder='Email Address'
          onChange={handleSubscribe}
          notValid={notValid}
          errorMessage='Please enter a valid email address...'
        />
        <Button btnType='success' style={{ height: 45, width: 100 }}>
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default SubscribeSection;
