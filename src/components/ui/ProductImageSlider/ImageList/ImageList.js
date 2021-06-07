import React from 'react';

const ImageList = ({
  images,
  counter,
  size,
  unit,
  onClick,
  hasSelectionBorder,
}) => {
  return images.map((image, index) => (
    <img
      src={image.image}
      alt={image.title}
      title={image.title}
      key={image.id}
      style={{
        left: `${(index + 1) * size - counter * size}${unit}`,
        border:
          hasSelectionBorder && index + 1 === counter
            ? '2px solid rgb(248, 19, 19)'
            : '',
      }}
      onClick={() => onClick(image.id)}
    />
  ));
};

export default ImageList;

//left: `${(index + 1) * 100 - counter * 100}%`
