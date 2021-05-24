import React from 'react';
import classes from './MapDataWindow.module.css';
import PropTypes from 'prop-types';

const DataGroup = ({ title, data }) => {
  return (
    <div className={classes.DataGroup}>
      <label>{title}</label> <span>{data}</span>
    </div>
  );
};

const MapDataWindow = ({ dataObjectArray }) => {
  if (dataObjectArray.length === 0) {
    return null;
  }

  return (
    <div className={classes.DataWindow}>
      {dataObjectArray.map((dataObj, index) => (
        <DataGroup
          title={dataObj.title}
          data={dataObj.data}
          key={`map-data-${index}`}
        />
      ))}
    </div>
  );
};

MapDataWindow.propTypes = {
  dataObjectArray: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
};

export default MapDataWindow;
