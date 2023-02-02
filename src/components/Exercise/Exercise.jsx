import "./Exercise.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Weight from "../Weight/Weight";
import Sets from "../Sets/Sets";
import Reps from "../Reps/Reps";
import Time from "../Time/Time";
import Notes from "../Notes/Notes";

const Exercise = ({ exercise }) => {
  return (
    <div className="exercise">
      <h1 className="exercise__title">{exercise.title}</h1>
      <Weight />
      <Sets />
      <Reps />
      <Time />
      <Notes />
      <div className="exercise__toggle-btns">
        <FontAwesomeIcon
          className="exercise__toggle-icon"
          icon={faWeightHanging}
        />
        <span className="exercise__toggle-icon exercise__toggle-icon-letter">
          S
        </span>
        <span className="exercise__toggle-icon exercise__toggle-icon-letter">
          R
        </span>
        <FontAwesomeIcon className="exercise__toggle-icon " icon={faClock} />
        <FontAwesomeIcon
          className="exercise__toggle-icon"
          icon={faNoteSticky}
        />
      </div>
    </div>
  );
};

export default Exercise;
