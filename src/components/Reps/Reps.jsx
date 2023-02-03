import "./Reps.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Reps = () => {
  const [reps, setReps] = useState(0);

  function handleIncrement() {
    setReps((prev) => prev + 1);
  }
  function handleDecrement() {
    reps > 0 ? setReps((prev) => prev - 1) : setReps(0);
  }
  function renderWordReps() {
    if (reps === 1) {
      return <span className="exercise__counter-span">rep</span>;
    } else if (reps === 0) {
      return <span className="exercise__counter-span">reps</span>;
    } else {
      return <span className="exercise__counter-span">reps</span>;
    }
  }
  return (
    <div className="exercise__row exercise__row-weight ">
      <div onClick={handleDecrement} className="exercise__decrease">
        <FontAwesomeIcon className="exercise__minus-icon" icon={faMinus} />
      </div>
      <span className="exercise__counter">
        {reps}
        {renderWordReps()}
      </span>
      <div onClick={handleIncrement} className="exercise__increase">
        <FontAwesomeIcon className="exercise__plus-icon" icon={faPlus} />
      </div>
    </div>
  );
};

export default Reps;
