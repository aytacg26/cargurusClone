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

export const numberList = (min, max, step, isObject = true) => {
  const numArr = [];
  const incStep = step || 1;
  if (!isObject) {
    for (let i = min; i < max + incStep; i += incStep) {
      numArr.push(i);
    }
  } else {
    for (let i = min; i < max + incStep; i += incStep) {
      let numObj = {
        id: `numObj-00${i}-${i}00${i}`,
        name: `${i}`,
        value: i,
      };

      numArr.push(numObj);
    }
  }

  return numArr;
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

export const checkDevice = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return { isMobile: true, deviceType: 'Mobile or Tablet' };
  } else {
    return { isMobile: false, deviceType: 'Desktop' };
  }
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

const MEDIAS = [
  {
    media:
      'only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
    device: 'iPhone 4 and 4S',
    orientation: 'Portrait',
    minDeviceWidth: 320,
    maxDeviceWidth: 480,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 320,
    deviceHeight: 480,
  },
  {
    media:
      'only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)',
    device: 'iPhone 4 and 4S',
    orientation: 'Landscape',
    minDeviceWidth: 320,
    maxDeviceWidth: 480,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 320,
    deviceHeight: 480,
  },

  {
    media:
      'only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
    device: 'iPhone 5, 5S, 5C and 5SE',
    orientation: 'Portrait',
    minDeviceWidth: 320,
    maxDeviceWidth: 568,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 320,
    deviceHeight: 568,
  },
  {
    media:
      'only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)',
    device: 'iPhone 5, 5S, 5C and 5SE',
    orientation: 'Landscape',
    minDeviceWidth: 320,
    maxDeviceWidth: 568,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 320,
    deviceHeight: 568,
  },

  {
    media:
      'only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
    device: 'iPhone 6, 6S, 7 and 8',
    orientation: 'Portrait',
    minDeviceWidth: 375,
    maxDeviceWidth: 667,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 375,
    deviceHeight: 667,
  },
  {
    media:
      'only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)',
    device: 'iPhone 6, 6S, 7 and 8',
    orientation: 'Landscape',
    minDeviceWidth: 375,
    maxDeviceWidth: 667,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 375,
    deviceHeight: 667,
  },

  {
    media:
      'only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)',
    device: 'iPhone 6+, 7+ and 8+',
    orientation: 'Portrait',
    minDeviceWidth: 414,
    maxDeviceWidth: 736,
    webKitMinDevicePixelRatio: 3,
    deviceWidth: 414,
    deviceHeight: 736,
  },
  {
    media:
      'only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)',
    device: 'iPhone 6+, 7+ and 8+',
    orientation: 'Landscape',
    minDeviceWidth: 414,
    maxDeviceWidth: 736,
    webKitMinDevicePixelRatio: 3,
    deviceWidth: 414,
    deviceHeight: 736,
  },

  {
    media:
      'only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)',
    device: 'iPhone X',
    orientation: 'Portrait',
    minDeviceWidth: 375,
    maxDeviceWidth: 812,
    webKitMinDevicePixelRatio: 3,
    deviceWidth: 375,
    deviceHeight: 812,
  },
  {
    media:
      'only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)',
    device: 'iPhone X',
    orientation: 'Landscape',
    minDeviceWidth: 375,
    maxDeviceWidth: 812,
    webKitMinDevicePixelRatio: 3,
    deviceWidth: 375,
    deviceHeight: 812,
  },

  {
    media:
      'screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    device: 'Galaxy S3',
    orientation: 'Portrait',
    minDeviceWidth: 320,
    maxDeviceWidth: 640,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 320,
    deviceHeight: 640,
  },
  {
    media:
      'screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    device: 'Galaxy S3',
    orientation: 'Landscape',
    minDeviceWidth: 320,
    maxDeviceWidth: 640,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 320,
    deviceHeight: 640,
  },

  {
    media:
      'screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    device: 'Galaxy S4, S5 and Note 3',
    orientation: 'Portrait',
    minDeviceWidth: 360,
    maxDeviceWidth: 640,
    webKitMinDevicePixelRatio: 3,
    deviceWidth: 360,
    deviceHeight: 640,
  },
  {
    media:
      'screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    device: 'Galaxy S4, S5 and Note 3',
    orientation: 'Landscape',
    minDeviceWidth: 360,
    maxDeviceWidth: 640,
    webKitMinDevicePixelRatio: 3,
    deviceWidth: 360,
    deviceHeight: 640,
  },

  {
    media:
      'screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4) and (orientation: portrait)',
    device: 'Galaxy S6',
    orientation: 'Portrait',
    minDeviceWidth: 360,
    maxDeviceWidth: 640,
    webKitMinDevicePixelRatio: 4,
    deviceWidth: 360,
    deviceHeight: 640,
  },
  {
    media:
      'screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4) and (orientation: landscape)',
    device: 'Galaxy S6',
    orientation: 'Landscape',
    minDeviceWidth: 360,
    maxDeviceWidth: 640,
    webKitMinDevicePixelRatio: 4,
    deviceWidth: 360,
    deviceHeight: 640,
  },

  {
    media:
      'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1)',
    device: 'iPad 1, 2, Mini and Air',
    orientation: 'Portrait',
    minDeviceWidth: 768,
    maxDeviceWidth: 1024,
    webKitMinDevicePixelRatio: 1,
    deviceWidth: 768,
    deviceHeight: 1024,
  },
  {
    media:
      'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1)',
    device: 'iPad 1, 2, Mini and Air',
    orientation: 'Landscape',
    minDeviceWidth: 768,
    maxDeviceWidth: 1024,
    webKitMinDevicePixelRatio: 1,
    deviceWidth: 768,
    deviceHeight: 1024,
  },

  {
    media:
      'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)',
    device: 'iPad 3, 4 and Pro 9.7"',
    orientation: 'Portrait',
    minDeviceWidth: 768,
    maxDeviceWidth: 1024,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 768,
    deviceHeight: 1024,
  },
  {
    media:
      'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)',
    device: 'iPad 3, 4 and Pro 9.7"',
    orientation: 'Landscape',
    minDeviceWidth: 768,
    maxDeviceWidth: 1024,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 768,
    deviceHeight: 1024,
  },
  {
    media:
      'only screen and (min-device-width: 834px) and (max-device-width: 834px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)',
    device: 'iPad Pro 10.5"',
    orientation: 'Portrait',
    minDeviceWidth: 834,
    maxDeviceWidth: 834,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 834,
    deviceHeight: 1112,
  },
  {
    media:
      'only screen and (min-device-width: 1112px) and (max-device-width: 1112px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)',
    device: 'iPad Pro 10.5"',
    orientation: 'Landscape',
    minDeviceWidth: 1112,
    maxDeviceWidth: 1112,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 834,
    deviceHeight: 1112,
  },
  {
    media:
      'only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)',
    device: 'iPad Pro 12.9"',
    orientation: 'Portrait',
    minDeviceWidth: 1024,
    maxDeviceWidth: 1024,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 1024,
    deviceHeight: 1366,
  },
  {
    media:
      'only screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)',
    device: 'iPad Pro 12.9"',
    orientation: 'Landscape',
    minDeviceWidth: 1366,
    maxDeviceWidth: 1366,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: 1024,
    deviceHeight: 1366,
  },
  {
    media: '(max-device-width: 800px) and (orientation: portrait)',
    device: 'Galaxy Tab 2',
    orientation: 'Portrait',
    minDeviceWidth: '',
    maxDeviceWidth: 800,
    webKitMinDevicePixelRatio: '',
    deviceWidth: '',
    deviceHeight: '',
  },
  {
    media: '(max-device-width: 1280px) and (orientation: landscape)',
    device: 'Galaxy Tab 2',
    orientation: 'Landscape',
    minDeviceWidth: '',
    maxDeviceWidth: 1280,
    webKitMinDevicePixelRatio: '',
    deviceWidth: '',
    deviceHeight: '',
  },
  {
    media:
      '(max-device-width: 800px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)',
    device: 'Galaxy Tab S',
    orientation: 'Portrait',
    minDeviceWidth: '',
    maxDeviceWidth: 800,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: '',
    deviceHeight: '',
  },
  {
    media:
      '(max-device-width: 1280px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)',
    device: 'Galaxy Tab S',
    orientation: 'Portrait',
    minDeviceWidth: '',
    maxDeviceWidth: 1280,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: '',
    deviceHeight: '',
  },
  {
    media:
      'screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)',
    device: 'Non-Retina Screens',
    orientation: '',
    minDeviceWidth: 1200,
    maxDeviceWidth: 1600,
    webKitMinDevicePixelRatio: 1,
    deviceWidth: '',
    deviceHeight: '',
  },
  {
    media:
      'screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)',
    device: 'Retina Screens',
    orientation: '',
    minDeviceWidth: 1200,
    maxDeviceWidth: 1600,
    webKitMinDevicePixelRatio: 2,
    deviceWidth: '',
    deviceHeight: '',
  },
  {
    media: 'only screen  and (min-width : 1824px)',
    device: 'Large screens',
    orientation: '',
    minDeviceWidth: 1824,
    maxDeviceWidth: '',
    webKitMinDevicePixelRatio: '',
    deviceWidth: '',
    deviceHeight: '',
  },
  {
    media: 'only screen  and (min-width : 1224px)',
    device: 'Desktops and laptops',
    orientation: '',
    minDeviceWidth: 1224,
    maxDeviceWidth: '',
    webKitMinDevicePixelRatio: '',
    deviceWidth: '',
    deviceHeight: '',
  },
  {
    media: 'screen and (min-width: 992px)',
    device: 'Desktops and laptops',
    orientation: '',
    minDeviceWidth: 1224,
    maxDeviceWidth: '',
    webKitMinDevicePixelRatio: '',
    deviceWidth: '',
    deviceHeight: '',
  },
];

export const getMedia = () => {
  const winDim = getWindowDimensions();
  for (let media of MEDIAS) {
    if (
      window.matchMedia(media.media).matches &&
      (media.deviceHeight === winDim.height || media.deviceHeight === '')
    ) {
      return { ...media, matches: true };
    }
  }
};
