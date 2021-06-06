import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Button from '../../../../../ui/Button/Button';
import Card from '../../../../../ui/Card/Card';
import DealBadge from '../../../../../ui/DealBadge/DealBadge';
import Modal from '../../../../../ui/Modal/Modal';
import MessageForm from '../../MessageForm/MessageForm';
import classes from './ProductNav.module.scss';

const ProductNav = ({
  onShowFinancing,
  image,
  productName,
  milage,
  price,
  dealer,
  deal,
  priceDifference,
}) => {
  const [show, setShow] = useState(null);
  const [hideModal, setHideModal] = useState(true);

  console.log(dealer);

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
            <img src={image} alt={productName} title={productName} />
          </div>
          <div className={classes.InfoSection}>
            <h4>{productName}</h4>
            <span>
              Mileage: {milage} · {dealer.contact.location}
            </span>
          </div>
        </div>
        <div className={classes.Buttons}>
          <div className={classes.PriceData}>
            <span className={classes.Price}>{price}</span>
            <DealBadge
              dealStatus={deal}
              priceDifference={priceDifference}
              size={0.8}
            />
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
            formHeader={`Request Info About ${productName}`}
            dealerPhone={dealer.contact.phone}
            autoCloseFunction={handleInfoRequest}
          />
        </Card>
      </Modal>
    </Fragment>
  );
};

export default ProductNav;
