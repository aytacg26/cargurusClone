import React, { useState, lazy, Suspense, useEffect, useCallback } from 'react';
import classes from './Navbar.module.css';
import logo from '../../../assets/images/forIcons.png';
import MenuItem from './MenuItem/MenuItem';
import { GoPrimitiveDot } from 'react-icons/go';

import {
  MdKeyboardArrowDown,
  MdNotificationsNone,
  MdFavoriteBorder,
  MdAccountCircle,
  MdControlPoint,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import Loader from '../../ui/Loader/Loader';
import Badge from '../../ui/Badge/Badge';

const DropMenu = lazy(() => import('./DropMenu'));

const menuItems = [
  { id: 'menu-item-1001', title: 'Used Cars', link: '/used-cars' },
  { id: 'menu-item-1002', title: 'New Cars', link: '/new-cars' },
  { id: 'menu-item-1003', title: 'Certified Cars', link: '/certified-cars' },
  { id: 'menu-item-1004', title: 'Financing', link: '/financing' },
  { id: 'menu-item-1005', title: 'Car Values', link: '/car-values' },
  { id: 'menu-item-1006', title: 'Sell My Car', link: '/sell-my-car' },
  { id: 'menu-item-1007', title: 'Research', link: '/research' },
  { id: 'menu-item-1008', title: 'Questions', link: '/questions' },
];

const countries = [
  {
    id: 'lang-en-0010',
    name: 'United States',
    code: 'EN',
    flag: 'https://i.ibb.co/R0cLK6h/english.png',
    link: '/us',
  },
  {
    id: 'lang-tr-0020',
    name: 'Türkiye',
    code: 'TR',
    flag: 'https://i.ibb.co/mvKLVRW/turkish.png',
    link: '/tr',
  },
  {
    id: 'lang-ge-0010',
    name: 'Germany',
    code: 'DE',
    flag: 'https://i.ibb.co/KxBNKz1/german.png',
    link: '/de',
  },
];

const accountMenuList = [
  {
    id: 'acc-menu-00101',
    title: 'Saved Searches',
    link: '/saved-searches',
  },
  {
    id: 'acc-menu-00202',
    title: 'Saved Listings',
    link: '/saved-listings',
  },
  {
    id: 'acc-menu-00303',
    title: 'Messages',
    link: '/messages',
  },
  {
    id: 'acc-menu-00404',
    title: 'Financing',
    link: '/financing',
  },
  {
    id: 'acc-menu-00505',
    title: 'Sign In/Register',
    link: '/signin-register',
  },
];

const notifications = [
  {
    id: 'notification-01-0001',
    message: 'new cars arrived',
    date: new Date(),
    read: false,
  },
  {
    id: 'notification-04-1002',
    message: 'The Mercedes CLK 200 sold.',
    date: new Date(),
    read: false,
  },
  {
    id: 'notification-02-2405',
    message:
      'A new gallery entered to our site. Are you ready for super luxury cars, new gallery will only sell super cars which you will like a lot',
    date: new Date(),
    read: false,
  },
  {
    id: 'notification-03-8133',
    message: 'Your car viewed by 3000 users',
    date: new Date(),
    read: false,
  },
];

/**
 * seçili ülke app'da da bilinmeli ve diğer menüler /ülke/user-cars veya /ülke/new-cars şeklinde açılmalıdır.
 *
 */

/**
 * Cars Database API :
 * https://www.back4app.com/database/back4app/car-make-model-dataset/graphql-playground/all-car_model_list_bmws
 */
const Navbar = (props) => {
  const countryCode =
    window.location.pathname.split('/')[1] === undefined
      ? window.location.pathname.split('/')[1]
      : 'en';
  const size = '20px';
  const initCountry = countries.find(
    (country) => country.code.toLowerCase() === countryCode
  );

  const [notificationList, setNotificationList] = useState(notifications);
  const [showCountryList, setShowCountryList] = useState(false);
  const [pickedCountry, setPickedCountry] = useState(initCountry);
  const [accountMenu, setAccountMenu] = useState(false);
  const [notificationMenu, setNotificationMenu] = useState(false);
  const [selectedCode, setSelectedCode] = useState(countryCode);
  const [isNotificationsChecked, setIsNotificationsChecked] = useState(false);

  useEffect(() => {
    let timer;
    const duration = notifications.filter((noti) => !noti.read).length * 1000;

    if (isNotificationsChecked) {
      timer = setTimeout(() => {
        setNotificationList(
          notifications.map((noti) => ({ ...noti, read: true }))
        );
      }, duration);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isNotificationsChecked]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        e.which === 1 &&
        (showCountryList || accountMenu || notificationMenu) &&
        (e.clientY < 20 || e.clientY > 40)
      ) {
        setShowCountryList(false);
        setAccountMenu(false);
        setNotificationMenu(false);
      }
    };

    const handleKeyPress = (e) => {
      if (e.which === 27 || e.key === 'escape') {
        setShowCountryList(false);
        setAccountMenu(false);
        setNotificationMenu(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [accountMenu, showCountryList, notificationMenu]);

  const handleCountryPick = () => {
    setAccountMenu(false);
    setNotificationMenu(false);
    setShowCountryList((prevState) => !prevState);
  };

  const handleCountrySelection = (id) => {
    const selectedCountry = countries.find((country) => country.id === id);

    setPickedCountry(selectedCountry);
    setShowCountryList(false);
  };

  const handleAccountMenu = () => {
    setShowCountryList(false);
    setNotificationMenu(false);
    setAccountMenu((prevState) => !prevState);
  };

  const handleNotificationMenu = () => {
    setShowCountryList(false);
    setAccountMenu(false);
    setNotificationMenu((prevState) => !prevState);
    setIsNotificationsChecked(true);
  };

  return (
    <nav className={classes.Navbar}>
      <Link className={classes.NavLogo} to='/'>
        <img
          src={logo}
          alt='Car Cyprus'
          title='Car Cyprus | For Sale Used and New Cars'
        />
      </Link>
      <div className={classes.Menu}>
        <ul>
          {menuItems.map((item) => (
            <MenuItem title={item.title} link={item.link} key={item.id} />
          ))}
        </ul>
      </div>
      <div className={classes.Account}>
        <div className={classes.countryPick}>
          <div className={classes.pickedCountry} onClick={handleCountryPick}>
            <span className={classes.pickedFlag}>
              <img src={pickedCountry?.flag} alt={pickedCountry?.name} />
            </span>
            <span className={classes.pickedCode}>{pickedCountry?.code}</span>
            <span
              className={
                showCountryList
                  ? `${classes.icon} ${classes.rotate}`
                  : classes.icon
              }
            >
              <MdKeyboardArrowDown size='16px' />
            </span>
          </div>
          {showCountryList && (
            <Suspense fallback={<Loader />}>
              <DropMenu top='40px' left='-155px' name='countries'>
                {countries.map((country) => (
                  <MenuItem
                    title={country.name}
                    image={country.flag}
                    key={country.id}
                    link={country.link}
                    onClick={() => handleCountrySelection(country.id)}
                  />
                ))}
              </DropMenu>
            </Suspense>
          )}
        </div>
        <div className={classes.AccountIcons}>
          <div className={classes['md-icon']} onClick={handleNotificationMenu}>
            <MdNotificationsNone size={size} />{' '}
            <Badge
              number={
                notificationList.filter((notification) => !notification.read)
                  .length
              }
            />
            {notificationMenu && (
              <Suspense fallback={<Loader />}>
                <DropMenu top='40px' left='-123px' name='notificationMenu'>
                  {notificationList.map((noti) => (
                    <MenuItem
                      title={noti.message}
                      key={noti.id}
                      link={`/notifications/${noti.id}`}
                      date={noti.date}
                      icon={
                        <GoPrimitiveDot size='16px' style={{ marginTop: -2 }} />
                      }
                      isChecked={noti.read}
                      style={{ fontSize: 12.5 }}
                    />
                  ))}
                </DropMenu>
              </Suspense>
            )}
          </div>
          <div className={classes['md-icon']}>
            <MdFavoriteBorder size={size} />
          </div>
          <div className={classes['md-icon']} onClick={handleAccountMenu}>
            <MdAccountCircle size={size} /> <span>My Account</span>
            {accountMenu && (
              <Suspense fallback={<Loader />}>
                <DropMenu top='40px' left='-123px' name='accountMenu'>
                  {accountMenuList.map((accM) => (
                    <MenuItem
                      title={accM.title}
                      key={accM.id}
                      link={accM.link}
                    />
                  ))}
                </DropMenu>
              </Suspense>
            )}
          </div>
        </div>
      </div>
      <div className={classes.Notify}>Notify</div>
    </nav>
  );
};

export default Navbar;
