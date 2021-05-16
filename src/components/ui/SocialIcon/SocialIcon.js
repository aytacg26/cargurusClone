import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const SocialIcon = ({ socialName, username, color, fullUrl }) => {
  let icon = null;
  let title = '';
  let url = '';
  const iconColor = color || '#fff';

  switch (socialName.toLowerCase()) {
    case 'facebook':
    case 'face':
      icon = <FaFacebookF color={iconColor} />;
      title = 'Facebook';
      url = fullUrl || `https://www.facebook.com/${username}`;
      break;
    case 'twitter':
    case 'twit':
      icon = <FaTwitter color={iconColor} />;
      title = 'Twitter';
      url = fullUrl || `https://www.twitter.com/${username}`;
      break;
    case 'youtube':
      icon = <FaYoutube color={iconColor} />;
      title = 'Youtube';
      url = fullUrl || `https://www.youtube.com/${username}`;
      break;
    case 'pinterest':
    case 'pin':
      icon = <FaPinterest color={iconColor} />;
      title = 'Pinterest';
      url = fullUrl || `https://www.pinterest.com/${username}`;
      break;
    case 'instagram':
    case 'insta':
      icon = <FaInstagram color={iconColor} />;
      title = 'Instagram';
      url = fullUrl || `https://instagram.com/${username}`;
      break;

    case 'linked':
    case 'linkedin':
      icon = <FaLinkedinIn color={iconColor} />;
      title = 'LinkedIn';
      url = fullUrl || `https://www.linkedin.com/company/${username}`;
      break;

    default:
      icon = <FaFacebookF color={iconColor} />;
      title = 'Facebook';
      break;
  }

  return (
    <a href={url} title={title} target='_blank' rel='noreferrer'>
      {icon}
    </a>
  );
};

export default SocialIcon;
