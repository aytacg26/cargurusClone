import noImage from '../assets/images/noImageAvailable.png';

export const formatDate = (
  date,
  locale = 'en-US',
  options = { year: 'numeric', month: 'long', day: 'numeric' }
) => {
  const isObject = typeof date === 'object';
  const isString = typeof date === 'string';

  if (date !== undefined) {
    if (isObject) {
      return date.toLocaleString(locale, options);
    } else if (isString) {
      return new Date(date).toLocaleString(locale, options);
    } else {
      return null;
    }
  }

  return null;
};

export const randomNum = (minNum, maxNum) => {
  const randNum = Math.floor(Math.random() * maxNum) + minNum;
  return randNum;
};

export const loadImage = async (url, elem, setter) => {
  return new Promise((resolve, reject) => {
    elem.onload = () => {
      resolve(elem);
    };
    elem.onerror = () => {
      elem.src = noImage;
    };

    elem.src = url;
    setter && setter(true);
  });
};
