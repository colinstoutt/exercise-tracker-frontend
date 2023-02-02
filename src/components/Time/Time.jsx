import "./Time.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Time = () => {
  return (
    <div className="exercise__row exercise__row-weight ">
      <div className="exercise__decrease">
        <FontAwesomeIcon className="exercise__minus-icon" icon={faMinus} />
      </div>
      <span className="exercise__counter">
        0<span className="exercise__counter-span">m</span>00
        <span className="exercise__counter-span">s</span>
      </span>
      <div className="exercise__increase">
        <FontAwesomeIcon className="exercise__plus-icon" icon={faPlus} />
      </div>
    </div>
  );
};

export default Time;
