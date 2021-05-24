import React, { Fragment, useState, lazy, Suspense } from 'react';
import {
  emailValidation,
  textValidation,
} from '../../../../../utils/utilsFuncs';
import Button from '../../../../ui/Button/Button';
import Input from '../../../../ui/Input/Input';
import Loader from '../../../../ui/Loader/Loader';
import TextArea from '../../../../ui/TextArea/TextArea';
import classes from './MessageForm.module.css';
import PropTypes from 'prop-types';

const FormSuccess = lazy(() => import('./FormSuccess/FormSuccess'));
const Envelope = lazy(() => import('../../../../ui/Envelope/Envelope'));

const MessageForm = ({ formHeader, dealerPhone }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const { name, surname, email, phone, message } = formData;

  /**
   * @TODO - Create a Custom Hook for such forms. With these all useStates it is too crowded
   */
  const [nameIsValid, setNameIsValid] = useState(false);
  const [surnameIsValid, setSurnameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleFormChange = (e) => {
    e.target.name === 'name' && setNameIsValid(false);
    e.target.name === 'surname' && setSurnameIsValid(false);
    e.target.name === 'email' && setEmailIsValid(false);
    e.target.name === 'message' && setMessageIsValid(false);

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInputBlur = (e) => {
    if (e.target.value.trim().length === 0) {
      e.target.name === 'name' && setNameIsValid(true);
      e.target.name === 'surname' && setSurnameIsValid(true);
      e.target.name === 'email' && setEmailIsValid(true);
      e.target.name === 'message' && setMessageIsValid(true);
    }

    if (e.target.name === 'email' && !emailValidation(e.target.value)) {
      setEmailIsValid(true);
    }
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    const showForm = (time) => {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
        setSending(false);
        setDisabledBtn(false);
        clearTimeout(timer);
      }, time);
    };

    const isValidName = textValidation(name, 35);
    const isValidSurname = textValidation(surname, 35);
    const isValidEmail = emailValidation(email);
    const isValidMessage = textValidation(message, 650);

    if (isValidName && isValidSurname && isValidEmail && isValidMessage) {
      setDisabledBtn(true);
      setSending(true);
      const messageForm = {
        dealerId: '0000000000000', //get this from the product page
        productId: '000001111111', //get this from the product page
        messageSendAt: new Date(),
        name,
        surname,
        email,
        phone,
        message,
      };

      console.log(messageForm);
      //message send to the message box of the dealer id with async func. Fetch API or axios will be used.
      //If the message send successfully, form should cleaned up, and a success message window should be shown. else an error window will be
      //shown and there won't be any cleanup process on form
      //const res = await fetch("/api/messages/dealerId", {method:"POST", headers:{}, body:messageForm})

      let res = true; //if this is set to false, it will show error message, this is just to mimic the response from backend
      // after creating backend, this part will be revised accordingly.

      //To Mimic lateness of async fetch process

      setTimeout(() => {
        if (res) {
          setSuccess(true);
          setFormData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
          });

          //After showing success message, show empty form within 4 seconds
          showForm(3500);
        } else {
          setError(true);
          //after error message, show form with data within 5 seconds
          showForm(4500);
        }
      }, 2500);
    } else {
      setNameIsValid(!isValidName);
      setSurnameIsValid(!isValidSurname);
      setEmailIsValid(!isValidEmail);
      setMessageIsValid(!isValidMessage);
    }
  };

  const formContent = (
    <Fragment>
      {formHeader && (
        <div className={classes.FormHeader}>
          <span className={classes.header}>{formHeader}</span>
          <span>{dealerPhone}</span>
        </div>
      )}
      <form autoComplete='off' onSubmit={handleMessageSubmit}>
        <div className={classes.FormGroup}>
          <Input
            label='Name'
            notValid={nameIsValid}
            type='text'
            name='name'
            value={formData.name}
            onChange={handleFormChange}
            errorMessage='Please enter your name.'
            useTextError
            onBlur={handleInputBlur}
          />
        </div>
        <div className={classes.FormGroup}>
          <Input
            label='Surname'
            notValid={surnameIsValid}
            type='text'
            name='surname'
            value={formData.surname}
            onChange={handleFormChange}
            errorMessage='Please enter your surname'
            useTextError
            onBlur={handleInputBlur}
          />
        </div>
        <div className={classes.FormGroup}>
          <Input
            label='Email'
            notValid={emailIsValid}
            type='text'
            name='email'
            value={formData.email}
            onChange={handleFormChange}
            onBlur={handleInputBlur}
            errorMessage={
              email === ''
                ? 'Please enter your email address'
                : 'Please enter a valid email address.'
            }
            useTextError
          />
        </div>
        <div className={classes.FormGroup}>
          <Input
            label='Phone Number (optional)'
            notValid={false}
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleFormChange}
          />
        </div>
        <div className={classes.FormGroup}>
          <TextArea
            onChange={handleFormChange}
            onBlur={handleInputBlur}
            name='message'
            value={formData.message}
            showCounter
            maxLength={650}
            label='Message'
            warningMessage='Please enter your message.'
            notValid={messageIsValid}
            useTextError
          />
        </div>
        <Button btnType='success' disabled={disabledBtn}>
          Send
        </Button>
      </form>
    </Fragment>
  );

  return (
    <div className={classes.FormContainer}>
      {!success && !error && formContent}
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
    </div>
  );
};

MessageForm.propTypes = {
  formHeader: PropTypes.string,
  dealerPhone: PropTypes.string,
};

export default MessageForm;
