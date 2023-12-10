import { useRef } from 'react';
import Style from './ThirdPage.module.css';

export const ThirdPage = () => {
  const goldSquareRef = useRef<HTMLDivElement>(null);
  const clonedSquareRef = useRef<HTMLDivElement>(null);
  const cornerSquareRef = useRef<HTMLDivElement>(null);

  // Change the color of the square to gold
  const changeColorToGold = () => {
    if (goldSquareRef.current) {
      goldSquareRef.current.style.backgroundColor = 'gold';
    }
  };

  // Clone the square and append it to the div that has the ref of clonedSquareRef
  const cloneSquare = () => {
    if (clonedSquareRef.current) {
      const clonedSquare = clonedSquareRef.current.cloneNode(true);
      clonedSquareRef.current.appendChild(clonedSquare);
    }
  };

  // Change the position of the square and add text to it
  const sendToCornerAndAddText = () => {
    if (cornerSquareRef.current) {
      cornerSquareRef.current.classList.add(Style.cornerSquare);
      cornerSquareRef.current.textContent = 'esmu sturi';
    }
  };

  return (
    <>
      <div ref={goldSquareRef} className={Style.redSquare}></div>
      <button onClick={changeColorToGold} className='button'>
        Change color
      </button>

      <div className='clonedSquares' ref={clonedSquareRef}>
        <div className={Style.redSquare}></div>
      </div>
      <button onClick={cloneSquare} className='button'>
        Clone square
      </button>

      <div ref={cornerSquareRef} className={Style.redSquare}></div>
      <button onClick={sendToCornerAndAddText} className='button'>
        Send to corner
      </button>
    </>
  );
};
