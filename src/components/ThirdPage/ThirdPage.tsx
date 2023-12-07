import { useRef } from 'react';

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
      cornerSquareRef.current.style.position = 'absolute';
      cornerSquareRef.current.style.right = '0';
      cornerSquareRef.current.textContent = 'esmu sturi';
    }
  };

  return (
    <>
      <div
        ref={goldSquareRef}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          margin: '5px',
        }}
      ></div>
      <button onClick={changeColorToGold} className='button'>
        Change color
      </button>

      <div className='clonedSquares' ref={clonedSquareRef}>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'red',
            margin: '5px',
          }}
        ></div>
      </div>
      <button onClick={cloneSquare} className='button'>
        Clone square
      </button>

      <div
        ref={cornerSquareRef}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          margin: '5px',
        }}
      ></div>
      <button onClick={sendToCornerAndAddText} className='button'>
        Send to corner
      </button>
    </>
  );
};
