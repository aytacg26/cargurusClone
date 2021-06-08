import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from '../Nav/MenuItem/MenuItem';
import classes from './SideMenu.module.scss';

const SideMenu = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={classes.SideMenu}>
      <MenuItem
        title='About Us'
        link='/aboutCarworld'
        active={path === '/aboutCarworld'}
      />
      <MenuItem title='Our Team' link='/ourTeam' active={path === '/ourTeam'} />
      <MenuItem title='Careers' link='/careers' active={path === '/careers'} />
      <MenuItem
        title='Investor Relations'
        link='/investor-relations'
        active={path === '/investor-relations'}
      />
      <MenuItem
        title='Terms of Use'
        link='/terms/terms-of-use'
        active={path === '/terms/terms-of-use'}
      />
      <MenuItem
        title='Privacy'
        link='/terms/privacy-policy'
        active={path === '/terms/privacy-policy'}
      />
      <MenuItem
        title='Security'
        link='/terms/security'
        active={path === '/terms/security'}
      />
      <MenuItem
        title='Interest-Based Ads'
        link='/terms/interest-based-ads'
        active={path === '/terms/interest-based-ads'}
      />
    </div>
  );
};

export default SideMenu;
