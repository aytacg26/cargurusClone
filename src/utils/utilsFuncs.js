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

export const chunkArray = (arr, len) => {
  const chunks = [];
  let chunk = [];
  const chunkNum = Math.floor(arr.length / len);
  const remaining = arr.length % len;

  arr.forEach((el) => {
    chunk.push(el);

    if (chunk.length === len) {
      chunks.push(chunk);
      chunk = [];
    }

    if (
      chunks.length === chunkNum &&
      chunk.length === remaining &&
      remaining !== 0
    ) {
      chunks.push(chunk);
    }
  });

  return chunks;
};

export const textEllipsis = (text, maxLength = 100) => {
  if (text && text.trim().split(' ').length > maxLength) {
    let ellipsisText = '';
    const textArr = text.split(' ');

    for (let i = 0; i < maxLength; i++) {
      ellipsisText += textArr[i] + ' ';
    }

    return `${ellipsisText.trim()}...`;
  }

  return text;
};

export const emailValidation = (email) => {
  const isNotEmpty = email.trim() !== '';
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmail = regex.test(email);

  return isNotEmpty && isEmail;
};

//this func is valid for name, surname or middlename but for these validations, developer may also use his/her own func. as a first argument
//to Hook
export const textValidation = (name) => {
  const isNotEmpty = name.trim() !== '';
  // eslint-disable-next-line no-useless-escape
  const notAllowedRegex = /[%&()-*\/?$#€\[\]!$£€=@;{}_]+/;
  const hasNotAllowedChars = notAllowedRegex.test(name);
  const hasValidLength = name.length > 1 && name.length <= 40;

  return isNotEmpty && !hasNotAllowedChars && hasValidLength;
};
