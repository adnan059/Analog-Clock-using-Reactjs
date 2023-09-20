import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const hourHand = useRef();
  const minuteHand = useRef();
  const secondHand = useRef();
  const clockRef = useRef();

  const clockFunction = () => {
    function propertyValue(el, ratio) {
      el.style.setProperty("--pos", ratio * 360);
    }

    const d = new Date();
    const secondRatio = d.getSeconds() / 60;
    const minuteRatio = (secondRatio + d.getMinutes()) / 60;
    const hourRatio = (minuteRatio + d.getHours()) / 12;

    propertyValue(hourHand.current, hourRatio);
    propertyValue(minuteHand.current, minuteRatio);
    propertyValue(secondHand.current, secondRatio);
  };

  const startClock = () => {
    clockRef.current = setInterval(clockFunction, 1000);
  };

  const stopClock = () => clearInterval(clockRef.current);

  return (
    <>
      <div className="clock">
        <div className="hand hour" ref={hourHand}></div>
        <div className="hand minute" ref={minuteHand}></div>
        <div className="hand second" ref={secondHand}></div>
      </div>

      <button className="startbtn" onClick={startClock}>
        Start
      </button>
      <button className="stopbtn" onClick={stopClock}>
        Stop
      </button>
    </>
  );
};

export default App;
