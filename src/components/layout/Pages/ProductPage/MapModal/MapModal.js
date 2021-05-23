import React, { useEffect } from 'react';
import Button from '../../../../ui/Button/Button';
import Modal from '../../../../ui/Modal/Modal';
import classes from './MapModal.module.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

const MapModal = ({
  onMapWindowClick,
  hideMap,
  Latitude,
  Longitude,
  dealerName,
  location,
  country,
  address,
}) => {
  /**
   * @TODO : IMPROVE MAP
   */
  useEffect(() => {
    mapboxgl.accessToken = 'YOUR-MAPBOX-ACCESS-TOKEN';

    const map = new mapboxgl.Map({
      container: 'mapArea',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15,
      center: [33.378401, 35.213839], //[Longitude, Latitude]
      pitch: 60,
      bearing: -50,
      antialias: true,
    });

    // map.addControl(new mapboxgl.FullscreenControl({ container: 'mapArea' }));
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    new mapboxgl.Marker({
      color: 'red',
      draggable: true,
    })
      .setLngLat([33.378401, 35.213839])
      .addTo(map);

    map.on('click', () => {
      new mapboxgl.Popup({ offset: [0, -30] })
        .setLngLat([33.378401, 35.213839])
        .setHTML(`<h3>Dealer is here...</h3>`)
        .addTo(map);
    });

    const nav = new mapboxgl.NavigationControl();

    map.addControl(nav, 'top-left');

    // console.log(map);
    var scale = new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric',
    });
    map.addControl(scale);

    // scale.setUnit('metric');
    //end of test
  }, []);

  useEffect(() => {
    if (!hideMap) {
      document.body.setAttribute('style', 'overflow:hidden');
    } else {
      document.body.removeAttribute('style', 'overflow:hidden');
    }
  }, [hideMap]);

  return (
    <Modal hide={hideMap} onClick={onMapWindowClick}>
      <div>
        <div>
          <h1>Dealer Name</h1>
          <h3>Location - Country</h3>
          <p>Address</p>
        </div>
        <div className={classes.MapArea} id='mapArea'>
          MAP AREA
        </div>
        <div>
          <Button btnType='success' onClick={onMapWindowClick}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MapModal;
