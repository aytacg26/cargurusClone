import React from 'react';
import SocialIcon from '../../../ui/SocialIcon/SocialIcon';
import classes from './SocialSection.module.css';

const socialLinks = [
  {
    id: 'facebook-0001-social-01',
    socialName: 'Facebook',
    username: 'cargurus',
  },
  {
    id: 'twitter-0002-social-02',
    socialName: 'Twitter',
    username: 'cargurus',
  },
  {
    id: 'pinterest-0003-social-03',
    socialName: 'Pinterest',
    username: 'cargurus',
  },
  {
    id: 'youtube-0004-social-04',
    socialName: 'Youtube',
    username: 'cargurus',
  },
  {
    id: 'insta-0005-social-05',
    socialName: 'Instagram',
    username: 'cargurus',
  },
  {
    id: 'linked-0006-social-06',
    socialName: 'Linkedin',
    username: 'cargurus',
  },
];

//

const SocialSection = ({ header }) => {
  const heading = 'Connect with Us' || header;

  return (
    <div className={classes.Social}>
      <span>{heading}</span>
      <div className={classes.SocialIcons}>
        {socialLinks.map((social) => (
          <SocialIcon {...social} key={social.id} />
        ))}
      </div>
    </div>
  );
};

export default SocialSection;
