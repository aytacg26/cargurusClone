# A React Project (Clone of www.cargurus.com)

This will be a complete MERN project and will be the clone of cargurus.com
current sturcture contains half of home page with drop downs and different types
of search forms. All images are from cargurus.com, after completion of react part
a backend will be prepared with the help of Nodejs, Express and MongoDB

Json file added for all brands, models of brands and logos of brands inside BrandsModelsJSON folder,
this will be used for MongoDB brands collection

Facebook Style Expanding TextArea created :
TextArea automatically expands and shrinks vertically, no scroll required,
also with maxLength, optional remaining char size counter added, which shows how many more characters
remain to write message (something similar to Twitter)

### Completed Parts: (Without any state management - Redux will be used...)

- Nav
- Home Page
- Used Cars Page
- Product/#id page (No car image, will be added after completion of New Car Form and Backend for image upload)

```
let rowAdded = [{ count: 0, charSize: 0 }]; //This one used outside of function, instead of as state, state version tried but creates problems because of state update
                                            //latecy.
const TextArea = ({
  onChange,
  placeholder,
  name,
  title,
  value,
  maxLength,
  counterText,
  showCounter,
}) => {
  const [rowSize, setRowSize] = useState(4);
  const [currentScrollHeight, setCurrentScrollHeight] = useState(null);
  const [counter, setCounter] = useState(0);
  const [counterInit, setCounterInit] = useState(0);
  const [initScrollHeight, setInitScrollHeight] = useState(null);
  const textAreaRef = useRef();

  useEffect(() => {
    setCurrentScrollHeight(textAreaRef.current.scrollHeight);
    setInitScrollHeight(textAreaRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    const countValue = maxLength || 500;
    setCounter(countValue);
    setCounterInit(countValue);
  }, [maxLength]);

  const handleChange = (e) => {
    onChange && onChange(e);

    setCounter((prevState) => {
      if (counterInit - prevState > e.target.value.length) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    });

    if (e.target.scrollHeight > currentScrollHeight) {
      setRowSize((prevState) => prevState + 1);
      setCurrentScrollHeight(e.target.scrollHeight);
      rowAdded = [
        ...rowAdded,
        {
          count: rowAdded[rowAdded.length - 1].count + 1,
          charSize: e.target.value.length,
        },
      ];
    }

    if (
      rowAdded.length > 0 &&
      e.target.value.length < rowAdded[rowAdded.length - 1].charSize
    ) {
      setRowSize((prevState) => prevState - 1);
      rowAdded.pop();

      if (rowAdded.length === 1) {
        setCurrentScrollHeight(initScrollHeight);
      }
    }
  };

  return (
    <label className={classes.textareaLabel}>
      {/* <span>Label</span>  This part should work like in Input Component*/}
      <textarea
        rows={rowSize}
        cols='50'
        placeholder={placeholder}
        name={name}
        title={title}
        maxLength={counterInit}
        value={value}
        className={classes.TextArea}
        onChange={handleChange}
        ref={textAreaRef}
        style={{ marginBottom: !showCounter ? '15px' : '' }}
      ></textarea>
      {showCounter && (
        <div className={classes.remainingAmount}>
          <span className={classes.CounterText}>
            {counterText || 'Remaining : '}
          </span>
          <span className={classes.MaxLength}>{counter}</span>
        </div>
      )}
    </label>
  );
};

export default TextArea;

```
