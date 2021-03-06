import { useState, useEffect, useCallback } from 'react';

export const useDropForm = (dropNamesArray) => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  const [thirdDrop, setthirdDrop] = useState(false);
  const [fourthDrop, setfourthDrop] = useState(false);

  const handleDropClick = useCallback(
    (name) => {
      switch (name) {
        case dropNamesArray[0]:
          setFirstDrop((prevState) => !prevState);
          setSecondDrop(false);
          setthirdDrop(false);
          setfourthDrop(false);
          break;
        case dropNamesArray[1]:
          setFirstDrop(false);
          setSecondDrop((prevState) => !prevState);
          setthirdDrop(false);
          setfourthDrop(false);
          break;
        case dropNamesArray[2]:
          setFirstDrop(false);
          setSecondDrop(false);
          setthirdDrop((prevState) => !prevState);
          setfourthDrop(false);
          break;

        case dropNamesArray[3]:
          setFirstDrop(false);
          setSecondDrop(false);
          setthirdDrop(false);
          setfourthDrop((prevState) => !prevState);
          break;

        default:
          setFirstDrop(false);
          setSecondDrop(false);
          setthirdDrop(false);
          break;
      }
    },
    //eslint-disable-next-line
    []
  );

  useEffect(() => {
    document.addEventListener('keyup', handleDropClick);

    return () => {
      document.removeEventListener('keypress', handleDropClick);
    };
  }, [handleDropClick]);

  return { firstDrop, secondDrop, thirdDrop, fourthDrop, handleDropClick };
};
