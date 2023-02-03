import "./Time.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Time = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function handleIncrement() {
    setSeconds((prev) => prev + 5);
    if (seconds > 54) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }
  }
  function handleDecrement() {
    setSeconds((prev) => prev - 5);
    if (minutes > 0 && seconds === 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(55);
    }
    if (seconds === 0 && minutes === 0) {
      setSeconds(0);
    }
  }

  return (
    <div className="exercise__row exercise__row-weight ">
      <div onClick={handleDecrement} className="exercise__decrease">
        <FontAwesomeIcon className="exercise__minus-icon" icon={faMinus} />
      </div>
      <span className="exercise__counter">
        {minutes}
        <span className="exercise__counter-span">m</span>
        {seconds}
        <span className="exercise__counter-span">s</span>
      </span>
      <div onClick={handleIncrement} className="exercise__increase">
        <FontAwesomeIcon className="exercise__plus-icon" icon={faPlus} />
      </div>
    </div>
  );
};

export default Time;
