import React from 'react'
import './CoundDownTimer.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

const CountDownTimer = () => {
    return (
    <div className="timer-wrapper">
        <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [true, 1000]}
            >
            {renderTime}
        </CountdownCircleTimer>
    </div>
    );
}

export default CountDownTimer