import React, { useEffect, useState, useRef } from 'react';
import Style from './FirstPage.module.css';

export const FirstPage = () => {
  const [formInput, setFormInput] = useState<string[]>([]);
  const [formInputValue, setFormInputValue] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const [buttonCount, setButtonCount] = useState(0);
  const [coloredSquares, setColoredSquares] = useState<{ color: string; id: number }[]>([]);
  const [colorValue, setColorValue] = useState('red');

  const inputRef = useRef<HTMLInputElement>(null);
  const disabledButtonRef = useRef<HTMLButtonElement>(null);

  const setDisabledToFalse = () => setDisabledButton(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setInterval(setDisabledToFalse, 5000);
  }, []);

  const showFormInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newInput = [...formInput, formInputValue];
    setFormInput(newInput);
    setFormInputValue('');
  };

  const addColoredSquare = () => {
    if (colorValue) {
      const newSquare = {
        color: colorValue,
        id: Date.now(),
      };
      setColoredSquares((prevSquares) => [...prevSquares, newSquare]);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColorValue(e.target.value);
  };

  return (
    <>
      <form>
        <input type='text' placeholder='Write something...' ref={inputRef} className='input' />
      </form>

      <div className={Style.formWrapper}>
        <form onSubmit={(e) => showFormInput(e)}>
          <input
            type='text'
            placeholder='Write something...'
            value={formInputValue}
            onChange={(e) => setFormInputValue(e.target.value)}
            className='input'
          />
          <button className='button'>Submit</button>
        </form>
        <h3>{formInput}</h3>
      </div>

      <button disabled={disabledButton} ref={disabledButtonRef} className='button'>
        Disabled
      </button>

      <button onClick={() => setButtonCount(buttonCount + 1)} className='button'>
        Count: {buttonCount}
      </button>
      <div className='squareCountX2'>
        <h3>{buttonCount * 2}</h3>
      </div>

      <div>
        <button onClick={() => addColoredSquare()} className='button'>
          +
        </button>
        <select name='colors' onChange={handleColorChange} value={colorValue} className='select'>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='black'>Black</option>
        </select>
      </div>
      <div className={Style.coloredSquares}>
        {coloredSquares.map((square) => (
          <div
            key={square.id}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: square.color,
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
