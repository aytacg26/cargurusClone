import { useState } from 'react';

const useFormSubmit = (formData) => {
  const initData = formData;
  const [data, setData] = useState(initData);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const showForm = (time) => {
    const timer = setTimeout(() => {
      setSuccess(false);
      setError(false);
      setSending(false);
      setDisabledBtn(false);
      clearTimeout(timer);
    }, time);
  };

  const validResult = (response) => {
    setDisabledBtn(true);
    setSending(true);
    //Remove this part when we start to use data from DB, this is just to mimic the async op.
    //Timings may also need some revisions.
    setTimeout(() => {
      if (response) {
        setSuccess(true);

        setData(initData);

        //After showing success message, show empty form within 4 seconds
        showForm(3500);
      } else {
        setError(true);
        //after error message, show form with data within 5 seconds
        showForm(4500);
      }
    }, 2500);
  };

  return {
    data,
    setData,
    disabledBtn,
    sending,
    success,
    error,
    validResult,
  };
};

export default useFormSubmit;

/**
 *   if (isValidName && isValidSurname && isValidEmail && isValidMessage) {
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
 */
