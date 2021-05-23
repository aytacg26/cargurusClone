import React from 'react';
import './Envelope.css';

const Envelope = ({ name, surname, sending }) => {
  return (
    <div className={`envlope-wrapper ${sending ? 'sending' : ''}`}>
      <div id='envelope' className='open'>
        <div className='front flap'></div>
        <div className='front pocket'></div>
        <div className='letter'>
          <div className='words line1'>{`${name ? name : 'Car'} ${
            surname ? surname : 'World'
          }`}</div>
          <div className='words line2'></div>
          <div className='words line3'></div>
          <div className='words line4'></div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
