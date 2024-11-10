import './App.css';
import { useState } from 'react';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [startAnimate, setStartAnimate] = useState(false);
  const [scaleUp, setScaleUp] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      setStartAnimate(true);
    }, 100);

    setTimeout(() => {
      setScaleUp(true)
    }, 5000)
  };

  const handleClose = () => {
    setStartAnimate(false);
    setTimeout(() => {
      setIsOpened(false);
    }, 100);
  };

  return (
    <div className={`ceremony-container ${startAnimate ? "opened" : ""}`}>
      {!isOpened ? (
        <button onClick={handleOpen} className="open-button">
          <img src='https://clc-smart-admin-client-qa.vercel.app/static/media/logo.55134aa1b1092bea5cdd.png' />
          <div style={{color: '#111184', fontWeight: 'bold'}}>TAP HERE</div>
        </button>
      ) : (
        <>
          <div className="curtains">
            <div className="curtain-left">Hey</div>
            <div className="curtain-right">Hey</div>
          </div>
          <div className={`content ${startAnimate ? "move" : ""}`}>
            {!scaleUp ? (
              <div>
                 <h1>Smart Board Opening</h1>
              </div>
            ) : <></>}
            <video autoPlay loop muted className={`video ${scaleUp ? 'video-max' : ''}`}>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
          </div>
        </>
      )}
    </div>
  );
}

export default App;
