import React from 'react';
import BodyCard from '../../../../ui/BodyCard/BodyCard';
import { FaMobileAlt, FaPrint } from 'react-icons/fa';
import { GrMailOption } from 'react-icons/gr';
import classes from './ShareData.module.css';

const ShareData = () => {
  return (
    <div className={classes.GetDataSection}>
      <BodyCard
        noImage
        noBorder
        title='Send to Phone'
        width='80px'
        height='80px'
        style={{ borderBottom: '1px solid #ccc' }}
        iconComponent={<FaMobileAlt style={{ marginTop: 6 }} color='#727272' />}
      />
      <BodyCard
        noImage
        noBorder
        title='print'
        width='80px'
        height='80px'
        style={{ borderBottom: '1px solid #ccc' }}
        iconComponent={<FaPrint style={{ marginTop: 6 }} color='#727272' />}
      />
      <BodyCard
        noImage
        noBorder
        title='Email'
        width='80px'
        height='80px'
        iconComponent={
          <GrMailOption style={{ marginTop: 6 }} color='#727272' />
        }
      />
    </div>
  );
};

export default ShareData;
