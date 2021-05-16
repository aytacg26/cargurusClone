import React, { useState, Fragment, useEffect } from 'react';
import BrandCard from './BrandCard/BrandCard';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import classes from './Brands.module.css';

const brands = [
  {
    id: 'ac-032001009-uk',
    company: 'Auto Carriers Ltd',
    brand: 'AC',
    logo: 'https://i.ibb.co/nBvJy6P/AC.png',
  },
  {
    id: 'alfa-0332002008-it',
    company: 'Alfa Romeo Automobiles S.p.A.',
    brand: 'Alfa Romeo',
    logo: 'https://i.ibb.co/4F9Zdjt/Alfa-Romeo.png',
  },
  {
    id: 'aston-0332003007-uk',
    company: 'Aston Martin Lagonda Global Holdings plc',
    brand: 'Aston Martin',
    logo: 'https://i.ibb.co/TqWfRb4/Aston-Martin.png',
  },
  {
    id: 'audi-0332004006-ge',
    company: 'Volkswagen Group',
    brand: 'Audi',
    logo: 'https://i.ibb.co/6XgZBJv/Audi.png',
  },
  {
    id: 'bentley-0332005005-uk',
    company: 'Bentley Motors Limited',
    brand: 'Bentley',
    logo: 'https://i.ibb.co/mqWmtg9/Bentley.png',
  },
  {
    id: 'bmw-0332006004-ge',
    company: 'Bayerische Motoren Werke AG',
    brand: 'BMW',
    logo: 'https://i.ibb.co/61mdV5r/BMW.png',
  },
  {
    id: 'chev-0332007003-usa',
    company: 'General Motors',
    brand: 'Chevrolet',
    logo: 'https://i.ibb.co/V93sdm7/Chervolet.png',
  },
  {
    id: 'cito-00332008002-fr',
    company: 'Citroen',
    brand: 'Citroen',
    logo: 'https://i.ibb.co/SrYdVdS/Citroen.png',
  },
  {
    id: 'daih-00332009001-jp',
    company: 'Daihatsu Motor Co., Ltd',
    brand: 'Daihatsu',
    logo: 'https://i.ibb.co/8s0DfpP/Daihatsu.png',
  },
  {
    id: 'dat-00332010010-jp',
    company: 'The Nissan Motor Company, Ltd.',
    brand: 'Datsun',
    logo: 'https://i.ibb.co/QrHYNpZ/Datsun.png',
  },
  {
    id: 'fer-00332011011-it',
    company: 'Ferrari S.p.A.',
    brand: 'Ferrari',
    logo: 'https://i.ibb.co/9HZ4WKj/Ferrari.png',
  },
  {
    id: 'fia-00332012012-it',
    company: 'Fiat Automobiles S.p.A.',
    brand: 'Fiat',
    logo: 'https://i.ibb.co/DrBNVvY/Fiat.png',
  },
  {
    id: 'frd-00332013012-usa',
    company: 'Ford Motor Company',
    brand: 'Ford',
    logo: 'https://i.ibb.co/dW9WWtQ/Ford.png',
  },
  {
    id: 'hon-00332014014-jp',
    company: 'Honda Motor Company, Ltd.',
    brand: 'Honda',
    logo: 'https://i.ibb.co/tKGq9f0/Honda.png',
  },
  {
    id: 'hyu-00332015015-sk',
    company: 'Hyundai Motor Company',
    brand: 'Hyundai',
    logo: 'https://i.ibb.co/26Yqpxc/Hyundai.png',
  },
  {
    id: 'jgr-00332016016-uk',
    company: 'Tata Motors',
    brand: 'Jaguar',
    logo: 'https://i.ibb.co/BLvqvjG/Jaguar.png',
  },
  {
    id: 'lam-00332017017-it',
    company: 'Volkswagen Group',
    brand: 'Lamborghini',
    logo: 'https://i.ibb.co/GM83pp6/Lamborghini.png',
  },
  {
    id: 'lro-01332018020-uk',
    company: 'Tata Motors',
    brand: 'Land Rover',
    logo: 'https://i.ibb.co/LY6NqQ2/Land-Rover.png',
  },
  {
    id: 'lxs-02332019021-jp',
    company: 'Toyota Motor Corporation',
    brand: 'Lexus',
    logo: 'https://i.ibb.co/GPbJHwy/Lexus.png',
  },
  {
    id: 'lts-0233202022-uk',
    company: 'Lotus Cars Limited',
    brand: 'Lotus',
    logo: 'https://i.ibb.co/PYcTKHs/Lotus.png',
  },
  {
    id: 'mst-0233202123-it',
    company: 'Maserati S.p.A.',
    brand: 'Maserati',
    logo: 'https://i.ibb.co/YBtrdRf/Maserati.png',
  },
  {
    id: 'mzd-0233202224-jp',
    company: 'Mazda Motor Corporation',
    brand: 'Mazda',
    logo: 'https://i.ibb.co/Db090Dg/Mazda.png',
  },
  {
    id: 'mcl-0233202325-uk',
    company: 'McLaren Racing Limited',
    brand: 'McLaren',
    logo: 'https://i.ibb.co/9VCT48V/Mclaren.png',
  },
  {
    id: 'mrc-0233202426-ge',
    company: 'Daimler AG',
    brand: 'Mercedes-Benz',
    logo: 'https://i.ibb.co/txDpr3C/Mercedes.png',
  },
  {
    id: 'mg-031233123-uk',
    company: 'SAIC Motor Corporation Limited',
    brand: 'MG',
    logo: 'https://i.ibb.co/sw2KxMd/MGLogo.png',
  },
  {
    id: 'mn-0987123441-uk',
    company: 'Bayerische Motoren Werke AG (BMW)',
    brand: 'Mini',
    logo: 'https://i.ibb.co/yN5zB3v/Mini.png',
  },
  {
    id: 'mts-56712129902-jp',
    company: 'Mitsubishi Motors Corporation',
    brand: 'Mitsubishi',
    logo: 'https://i.ibb.co/YjZ9PK8/Mitsubishi.png',
  },
  {
    id: 'nis-350370400z-jp',
    company: 'Nissan Motor Company, Ltd.',
    brand: 'Nissan',
    logo: 'https://i.ibb.co/CbR6Qkp/Nissan.png',
  },
  {
    id: 'opl-789123009-ge',
    company: 'Opel Automobile GmbH',
    brand: 'Opel',
    logo: 'https://i.ibb.co/HTBcLN8/Opel.png',
  },
  {
    id: 'pea-206207306-fr',
    company: 'Stellantis N.V.',
    brand: 'Peugeot',
    logo: 'https://i.ibb.co/Yb7TD5g/Peaguet.png',
  },
  {
    id: 'por-911928bxtr-ge',
    company: 'Volkswagen Group',
    brand: 'Porsche',
    logo: 'https://i.ibb.co/7vtwXCr/Porsche.png',
  },
  {
    id: 'ren-11091921tx-fr',
    company: 'Groupe Renault',
    brand: 'Renault',
    logo: 'https://i.ibb.co/gJFVFMT/Renault.png',
  },
  {
    id: 'rolls-890987113-uk',
    company: 'Rolls-Royce Motor Cars Limited',
    brand: 'Rolls-Royce',
    logo: 'https://i.ibb.co/HpFsKSZ/Rolls-Royce.png',
  },
  {
    id: 'seat-1453107109-ge',
    company: 'Volkswagen Group',
    brand: 'Seat',
    logo: 'https://i.ibb.co/YyQTzJg/Seat.png',
  },
  {
    id: 'sub-69100345991-jp',
    company: 'Subaru Corporation',
    brand: 'Subaru',
    logo: 'https://i.ibb.co/8bMCKtm/Subaru.png',
  },
  {
    id: 'szk-000288812981-jp',
    company: 'Suzuki Motor Corporation',
    brand: 'Suzuki',
    logo: 'https://i.ibb.co/dQzKMfw/Suzuki.png',
  },
  {
    id: 'tyta-900012579330-jp',
    company: 'Toyota Motor Corporation',
    brand: 'Toyota',
    logo: 'https://i.ibb.co/KDNvfPm/Toyota.png',
  },
  {
    id: 'vaux-333999745-uk',
    company: 'Vauxhall Motors Limited - Opel',
    brand: 'Vauxhall',
    logo: 'https://i.ibb.co/mcJSsFL/Vauxhall.png',
  },
  {
    id: 'vw-002980907015-ge',
    company: 'Volkswagen Group',
    brand: 'Volkswagen',
    logo: 'https://i.ibb.co/MCYckZm/Volkswagen.png',
  },
  {
    id: 'vol-97813320891-sw',
    company: 'Geely Auto Group',
    brand: 'Volvo',
    logo: 'https://i.ibb.co/P9z9gcL/Volvo.png',
  },
];

const Brands = ({ header }) => {
  const [brandsList, setBrandsList] = useState([]);
  const [all, setAll] = useState(false);

  useEffect(() => {
    if (all) {
      setBrandsList(brands);
    } else {
      setBrandsList(brands.slice(0, 6));
    }
  }, [all]);

  const handleBrandsShow = () => {
    setAll((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={classes.Header}>
        <div>
          {header}{' '}
          <span>
            ({brandsList.length} of {brands.length} brands is shown)
          </span>
        </div>
        <span className={classes.ForSmallScreen}>
          ({brandsList.length} of {brands.length} brands is shown)
        </span>
        <span>
          {!all ? (
            <BsEyeFill
              title='Show All'
              color='blue'
              style={{ margin: '0 15px -10px 0', cursor: 'pointer' }}
              onClick={handleBrandsShow}
            />
          ) : (
            <BsEyeSlashFill
              title='Hide Brands'
              color='red'
              style={{ margin: '0 15px -10px 0', cursor: 'pointer' }}
              onClick={handleBrandsShow}
            />
          )}
        </span>
      </div>
      <div className={classes.PopularBrands}>
        {brandsList.map((brand) => (
          <BrandCard {...brand} key={brand.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Brands;

/**
 * <a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/63y6ZM66/AC.png" alt="AC"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/zvYmf7Vc/Alfa-Romeo.png" alt="Alfa-Romeo"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/Yqc24N5k/Aston-Martin.png" alt="Aston-Martin"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/26sYZmXT/Audi.png" alt="Audi"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/fThZWzdR/Bentley.png" alt="Bentley"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/fTjsJG7j/BMW.png" alt="BMW"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/Hnbg0Kqm/Chervolet.png" alt="Chervolet"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/NGXBw95n/Citroen.png" alt="Citroen"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/4dqfQpn6/Daihatsu.png" alt="Daihatsu"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/wjqpJw0K/Datsun.png" alt="Datsun"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/y8LzT0bD/Ferrari.png" alt="Ferrari"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/7hnRZkv5/Fiat.png" alt="Fiat"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/0N3RTPxx/Ford.png" alt="Ford"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/yNWCpWMv/Honda.png" alt="Honda"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/j570Kmdf/Hyundai.png" alt="Hyundai"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/SR6BY99N/Jaguar.png" alt="Jaguar"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/fRTGkJRD/Lamborghini.png" alt="Lamborghini"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/gkD9Yvdg/Land-Rover.png" alt="Land-Rover"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/RZsjt4Wf/Lexus.png" alt="Lexus"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/T16SxPs8/Lotus.png" alt="Lotus"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/63RSFZYL/Maserati.png" alt="Maserati"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/JhsScvXF/Mazda.png" alt="Mazda"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/HLFRSz4k/Mclaren.png" alt="Mclaren"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/7LJQT788/Mercedes.png" alt="Mercedes"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/2yGHf7vv/MGLogo.png" alt="MGLogo"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/sgXLsqT2/Mini.png" alt="Mini"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/m2Tq6tMC/Mitsubishi.png" alt="Mitsubishi"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/SsWTghxg/Nissan.png" alt="Nissan"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/Zn4fgM94/Opel.png" alt="Opel"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/yY6Qy24T/Peaguet.png" alt="Peaguet"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/Z52wZR9f/Porsche.png" alt="Porsche"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/nVGS7p5z/Renault.png" alt="Renault"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/c4DD9TdG/Rolls-Royce.png" alt="Rolls-Royce"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/qvz19n7h/Seat.png" alt="Seat"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/ydzngbyc/Subaru.png" alt="Subaru"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/LsPNspLm/Suzuki.png" alt="Suzuki"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/9MtbGYLS/Toyota.png" alt="Toyota"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/PJSM7rsQ/Vauxhall.png" alt="Vauxhall"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/05nZjZMK/Volkswagen.png" alt="Volkswagen"/></a><br/><br/>
<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/3N8B906w/Volvo.png" alt="Volvo"/></a><br/><br/>

 */
