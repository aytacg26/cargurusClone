import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Button from '../../../../../ui/Button/Button';
import Card from '../../../../../ui/Card/Card';
import DealBadge from '../../../../../ui/DealBadge/DealBadge';
import Modal from '../../../../../ui/Modal/Modal';
import MessageForm from '../../MessageForm/MessageForm';
import classes from './ProductNav.module.scss';

const ProductNav = ({ onShowFinancing }) => {
  const [show, setShow] = useState(null);
  const [hideModal, setHideModal] = useState(true);

  useEffect(() => {
    const checkScroll = (e) => {
      if (e.target.scrollingElement.scrollTop >= 1000) {
        setShow(true);
      } else {
        if (show) {
          setShow(false);
        }
      }
    };

    document.addEventListener('scroll', checkScroll);

    return () => {
      document.removeEventListener('scroll', checkScroll);
    };
  }, [show]);

  const handleInfoRequest = () => {
    setHideModal((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div
        className={`${classes.ProductNav} ${
          show === null ? '' : show ? classes.Show : classes.Hide
        }`}
      >
        <div></div>
        <div className={classes.ProductInfo}>
          <div className={classes.ImageSection}>
            <img
              src='https://i.ibb.co/58BzbQx/1991-chevrolet-corvette-pic-1355465292139602171-1024x768.jpg'
              alt='Product Name'
              title='Product Name'
            />
          </div>
          <div className={classes.InfoSection}>
            <h4>Chevrolet Corvette Coupe RWD</h4>
            <span>Mileage: 83,089 · Sacramento, CA (4 mi away)</span>
          </div>
        </div>
        <div className={classes.Buttons}>
          <div className={classes.PriceData}>
            <span className={classes.Price}>£12.825</span>
            <DealBadge Fair priceDifference={1200} size={0.8} />
          </div>
          <div className={classes.ButtonsSection}>
            <Button btnType='success' onClick={handleInfoRequest}>
              Request Information
            </Button>
            <Button btnType='success' onClick={onShowFinancing}>
              View Financing Options
            </Button>
          </div>
        </div>
        <div></div>
      </div>
      <Modal
        onClick={handleInfoRequest}
        hide={hideModal}
        modalStyle={{ minWidth: '600px', maxWidth: '90vw' }}
      >
        <Card>
          <MessageForm
            formHeader='Request Info About <ProductName>'
            dealerPhone='(0533) 811 01 91'
            autoCloseFunction={handleInfoRequest}
          />
        </Card>
      </Modal>
    </Fragment>
  );
};

export default ProductNav;
