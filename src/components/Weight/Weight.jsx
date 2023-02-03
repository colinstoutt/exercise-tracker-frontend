import "./Weight.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Weight = () => {
  const [weight, setWeight] = useState(0);

  function handleIncrement() {
    setWeight((prev) => prev + 5);
  }
  function handleDecrement() {
    weight > 0 ? setWeight((prev) => prev - 5) : setWeight(0);
  }

  return (
    <div className="exercise__row exercise__row-weight ">
      <div onClick={handleDecrement} className="exercise__decrease">
        <FontAwesomeIcon className="exercise__minus-icon" icon={faMinus} />
      </div>
      <span className="exercise__counter">
        {weight}
        <span className="exercise__counter-span">lbs</span>
      </span>
      <div onClick={handleIncrement} className="exercise__increase">
        <FontAwesomeIcon className="exercise__plus-icon" icon={faPlus} />
      </div>
    </div>
  );
};

export default Weight;
