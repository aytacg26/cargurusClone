import React, { useState, useEffect, useRef } from 'react';
import Button from '../../../../ui/Button/Button';
import Modal from '../../../../ui/Modal/Modal';
import classes from './MapModal.module.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapDataWindow from './MapDataWindow/MapDataWindow';
import PropTypes from 'prop-types';

mapboxgl.accessToken = 'USE YOUR MAP BOX ACCESS TOKEN';

const MapModal = ({
  onMapWindowClick,
  hideMap,
  Latitude,
  Longitude,
  dealerName,
  location,
  city,
  address,
}) => {
  const [mapData, setMapData] = useState([]);
  const mapAreaRef = useRef(null);
  const map = useRef(null);

  //There is default Latitude and Longitude but in case we remove the defaults, the Map Window will be empty
  //For such cases, we should remove the See Map and Directions button from business card.
  //This will be possible with the help of Redux, if Dealer data does not contain Longitude and Latitude
  //On business card, we will remove button from the Business Card section of the page.

  useEffect(() => {
    if (map.current) return;
    if (!Latitude && !Longitude) return;

    map.current = new mapboxgl.Map({
      container: mapAreaRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15,
      center: [Longitude, Latitude], //[Longitude, Latitude]
      pitch: 60,
      bearing: -50,
    });

    map.current.addControl(
      new mapboxgl.FullscreenControl({ container: 'mapArea' })
    );

    map.current.addControl(
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
      .setLngLat([Longitude, Latitude])
      .addTo(map.current);

    //Click process must show a popup component, setHTML won't be a good approach
    // map.current.on('click', () => {
    //   new mapboxgl.Popup({ offset: [0, -30] })
    //     .setLngLat([Longitude, Latitude])
    //     .setHTML(`<h1>Test<h1>`)
    //     .addTo(map);
    // });

    const nav = new mapboxgl.NavigationControl();

    map.current.addControl(nav, 'top-left');

    var scale = new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric',
    });
    map.current.addControl(scale);
  }, [Longitude, Latitude]);

  //create mapdata array
  useEffect(() => {
    const mapDataArray = [];

    if (Longitude) {
      mapDataArray.push({
        title: 'Longitude',
        data: Longitude,
      });
    }

    if (Latitude) {
      mapDataArray.push({
        title: 'Latitude',
        data: Latitude,
      });
    }

    if (location) {
      mapDataArray.push({
        title: 'City',
        data: location,
      });
    }

    setMapData(mapDataArray);
  }, [Latitude, Longitude, location]);

  return (
    <Modal hide={hideMap} onClick={onMapWindowClick}>
      <div className={classes.Container}>
        {dealerName && (
          <div className={classes.ModalHeaders}>
            <h1>{dealerName}</h1>
            {location && city && <h3>{`${location} - ${city}`}</h3>}
            <p>{address}</p>
          </div>
        )}
        <div className={classes.MapArea} id='mapArea' ref={mapAreaRef}>
          <MapDataWindow dataObjectArray={mapData} />
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

//Put Longitude and Latitude of the Car World (if any :)) )
MapModal.defaultProps = {
  Longitude: 33.3823,
  Latitude: 35.1856,
};

MapModal.propTypes = {
  onMapWindowClick: PropTypes.func.isRequired,
  hideMap: PropTypes.bool.isRequired,
  Latitude: PropTypes.number.isRequired,
  Longitude: PropTypes.number.isRequired,
  dealerName: PropTypes.string.isRequired,
  location: PropTypes.string,
  country: PropTypes.string,
  address: PropTypes.string,
};

export default MapModal;
