import React, { useState } from 'react';
import Button from '../../../../ui/Button/Button';
import Input from '../../../../ui/Input/Input';
import TextArea from '../../../../ui/TextArea/TextArea';
import classes from './MessageForm.module.css';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={classes.FormContainer}>
      <span>Form Header...</span>
      <form autoComplete='off' onSubmit={handleMessageSubmit}>
        <div className={classes.FormGroup}>
          <Input
            label='Name'
            notValid={false}
            type='text'
            name='name'
            value={formData.name}
            onChange={handleFormChange}
          />
        </div>
        <div className={classes.FormGroup}>
          <Input
            label='Surname'
            notValid={false}
            type='text'
            name='surname'
            value={formData.surname}
            onChange={handleFormChange}
          />
        </div>
        <div className={classes.FormGroup}>
          <Input
            label='Email'
            notValid={false}
            type='text'
            name='email'
            value={formData.email}
            onChange={handleFormChange}
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
            name='message'
            value={formData.message}
            showCounter
            maxLength={100}
          />
        </div>
        <Button btnType='success'>Send</Button>
      </form>
    </div>
  );
};

export default MessageForm;
