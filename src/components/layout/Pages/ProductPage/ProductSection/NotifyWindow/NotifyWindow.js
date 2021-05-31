import React, { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import classes from './NotifyWindow.module.scss';
import Input from '../../../../../ui/Input/Input';
import Button from '../../../../../ui/Button/Button';
import { emailValidation } from '../../../../../../utils/utilsFuncs';
import useFormSubmit from '../../../../../../hooks/useFormSubmit';
import Loader from '../../../../../ui/Loader/Loader';

const FormSuccess = lazy(() =>
  import('../../../../../ui/FormSuccess/FormSuccess')
);

const Envelope = lazy(() => import('../../../../../ui/Envelope/Envelope'));

const NotifyWindow = ({ productId }) => {
  const {
    data: email,
    setData: setEmail,
    disabledBtn,
    sending,
    success,
    error,
    validResult,
  } = useFormSubmit('');
  //   const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(null);

  const handleEmailEnter = (e) => {
    const { value } = e.target;
    const isValid = emailValidation(value);

    setEmail(value);
    if (isValid) {
      setValidEmail(true);
    }
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    const isValid = emailValidation(email);

    if (isValid) {
      const notifyData = {
        productId,
        email,
        date: new Date(),
      };

      let res = true;

      validResult(res);

      console.log(notifyData);
    } else {
      setValidEmail(false);
    }
  };

  const form = (
    <form className={classes.Form} onSubmit={handleNotifySubmit}>
      <Input
        placeholder='Email'
        style={{ borderRadius: '5px 0 0 5px' }}
        value={email}
        onChange={handleEmailEnter}
        notValid={!validEmail && validEmail !== null}
        errorMessage={
          email === ''
            ? 'Please enter your email address.'
            : 'Please enter a valid email address.'
        }
      />
      <Button
        btnType='primary'
        style={{ borderRadius: '0 5px 5px 0' }}
        disabled={disabledBtn}
      >
        Email me
      </Button>
    </form>
  );

  return (
    <div className={classes.NotifyWindow}>
      {!success && !error && <h5>Notify me when the price drops.</h5>}
      {!success && !error && form}
      {(success || error) && (
        <Suspense fallback={<Loader />}>
          <FormSuccess isError={error} />
        </Suspense>
      )}

      {sending && (
        <div className={classes.formModal}>
          <Suspense fallback={<Loader />}>
            <Envelope sending={sending} />
          </Suspense>
        </div>
      )}
      {!success && !error && (
        <span>
          By clicking "Email me" you agree to our{' '}
          <Link to='/terms/privacy-policy' title='Privacy Policy'>
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link to='/terms/terms-of-use' title='Terms of Use'>
            Terms of Use
          </Link>
          .
        </span>
      )}
    </div>
  );
};

export default NotifyWindow;
