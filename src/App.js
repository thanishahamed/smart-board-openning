import './App.css';
import { useState } from 'react';
import LottieViewer from './LottieViewer';

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
    setIsOpened(false);
    setScaleUp(false)
  };

  return (
    <div>
    <div className={`ceremony-container ${startAnimate ? "opened" : "background"}`}>
      {!isOpened ? (
<></>
      ) : (
        <>
          <div className="curtains">
            <div className="curtain-left">Hey</div>
            <div className="curtain-right">Hey</div>
          </div>
          <div className={`content ${startAnimate ? "move" : ""}`}>
            {!scaleUp ? (
              <div>
                 <h1>Smart Board Launching</h1>
              </div>
            ) : <></>}
            <video autoPlay loop muted className={`video ${scaleUp ? 'video-max' : ''}`}>
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button style={{position: 'absolute', top: '50%', left: '50%', backgroundColor: 'transparent', border: 'none'}} onClick={handleClose}>x</button>
          </div>
        </>
      )}
    </div>
    {!isOpened ? <>
      <button onClick={handleOpen} className="open-button">
          <img src='/5.png' />
          <div style={{color: '#111184', fontWeight: 'bold'}}>TAP HERE</div>
        </button></> :             <LottieViewer lottieName={'particles'} loop={false}/>
      }
    </div>
  );
}

export default App;
