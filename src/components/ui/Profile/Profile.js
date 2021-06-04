import React, { useRef, useEffect } from 'react';
import male from '../../../assets/images/profile/male.png';
import female from '../../../assets/images/profile/female.png';
import genderNatural from '../../../assets/images/profile/gendernatural.png';
import classes from './Profile.module.scss';
import { loadImage } from '../../../utils/utilsFuncs';

const Profile = ({ image, username, gender, circle, size, margin }) => {
  const imageRef = useRef();
  const profileImage = image
    ? image
    : gender && gender?.toLowerCase() === 'male'
    ? male
    : gender && gender?.toLowerCase() === 'female'
    ? female
    : genderNatural;

  useEffect(() => {
    loadImage(image, imageRef.current, null, profileImage);
  }, [image, profileImage]);

  return (
    <div className={classes.Profile}>
      <img
        src={profileImage}
        alt={`${username}'s profile`}
        title={username}
        style={{
          borderRadius: circle ? '50%' : '5%',
          width: size,
          height: size,
          margin: margin,
        }}
        ref={imageRef}
      />
    </div>
  );
};

export default Profile;
