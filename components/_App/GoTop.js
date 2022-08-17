import React, { useState, useEffect, useRef } from 'react';

const GoTop = ({ scrollStepInPx, delayInMs }) => {
  const [thePosition, setThePosition] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return (
      <div
        className={`go-top ${thePosition ? 'active' : ''}`}
        onClick={scrollToTop}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </div>
    );
  };

  return <>{renderGoTopIcon()}</>;
};

export default GoTop;
