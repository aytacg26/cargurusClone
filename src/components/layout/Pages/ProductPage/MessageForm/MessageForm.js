import React, { Fragment, useState, lazy, Suspense } from 'react';
import {
  emailValidation,
  textValidation,
} from '../../../../../utils/utilsFuncs';
import Button from '../../../../ui/Button/Button';
import Input from '../../../../ui/Input/Input';
import Loader from '../../../../ui/Loader/Loader';
import TextArea from '../../../../ui/TextArea/TextArea';
import classes from './MessageForm.module.scss';
import PropTypes from 'prop-types';
import useFormSubmit from '../../../../../hooks/useFormSubmit';

const FormSuccess = lazy(() =>
  import('../../../../ui/FormSuccess/FormSuccess')
);
const Envelope = lazy(() => import('../../../../ui/Envelope/Envelope'));

const MessageForm = ({ formHeader, dealerPhone, autoCloseFunction }) => {
  const {
    data: formData,
    setData: setFormData,
    disabledBtn,
    sending,
    success,
    error,
    validResult,
  } = useFormSubmit({
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

  const removeError = (e) => {
    e.target.name === 'name' &&
      textValidation(name, 35) &&
      setNameIsValid(false);
    e.target.name === 'surname' &&
      textValidation(surname, 35) &&
      setSurnameIsValid(false);
    e.target.name === 'email' &&
      emailValidation(email) &&
      setEmailIsValid(false);
    e.target.name === 'message' &&
      textValidation(message, 650) &&
      setMessageIsValid(false);
  };

  const handleFormChange = (e) => {
    removeError(e);
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

    const isValidName = textValidation(name, 35);
    const isValidSurname = textValidation(surname, 35);
    const isValidEmail = emailValidation(email);
    const isValidMessage = textValidation(message, 650);

    if (isValidName && isValidSurname && isValidEmail && isValidMessage) {
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
      validResult(res);
      //To Mimic lateness of async fetch process

      //this will check autoCloseFunction and then set the timer which will be less than 8 seconds.
      //this part will be used for the modal cases. Not a perfect solution but it does job well.
      //this must work if the response status code is 200 (OK), in case of error, it must not close the modal!!!
      //AUTOCLOSE MUST BE REMOVED FROM HERE... AND AUTOCLOSE MUST BE THE DUTY OF MODAL. AFTER RESPOSE, THIS MAY SEND PROCESS COMPLETED
      //OR WITH THE HELP OF REDUX, WHEN RESPONSE PROCESS COMPLETE SUCCESSFULLY, WE can dispose modal close action.
      if (autoCloseFunction && res) {
        console.log('Is it inside autoclose condition...');
        const timer = setTimeout(() => {
          autoCloseFunction();
          clearTimeout(timer);
        }, 8000);
      }
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
