import "./Sets.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Sets = () => {
  const [sets, setSets] = useState(0);

  function handleIncrement() {
    setSets((prev) => prev + 1);
  }
  function handleDecrement() {
    sets > 0 ? setSets((prev) => prev - 1) : setSets(0);
  }
  function renderWordSets() {
    if (sets === 1) {
      return <span className="exercise__counter-span">set</span>;
    } else if (sets === 0) {
      return <span className="exercise__counter-span">sets</span>;
    } else {
      return <span className="exercise__counter-span">sets</span>;
    }
  }

  return (
    <div className="exercise__row exercise__row-weight ">
      <div onClick={handleDecrement} className="exercise__decrease">
        <FontAwesomeIcon className="exercise__minus-icon" icon={faMinus} />
      </div>
      <span className="exercise__counter">
        {sets}
        {renderWordSets()}
      </span>
      <div onClick={handleIncrement} className="exercise__increase">
        <FontAwesomeIcon className="exercise__plus-icon" icon={faPlus} />
      </div>
    </div>
  );
};

export default Sets;
