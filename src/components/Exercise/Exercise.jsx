import "./Exercise.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import Weight from "../Weight/Weight";
import Sets from "../Sets/Sets";
import Reps from "../Reps/Reps";
import Time from "../Time/Time";
import Notes from "../Notes/Notes";

import { useState } from "react";

const Exercise = ({ exercise, deleteExercise, index, workoutId }) => {
  const [toggles, setToggles] = useState({
    weight: false,
    sets: false,
    reps: false,
    time: false,
    notes: false,
  });

  const toggleColors = {
    weight: "#50514f",
    sets: "#f25f5c",
    reps: "#70c1b3",
    time: "#247ba0",
    notes: "#ffe066",
  };

  function handleToggle(stateKey, e) {
    setToggles({ ...toggles, [stateKey]: !toggles[stateKey] });
    !toggles[stateKey]
      ? (e.target.style.color = toggleColors[stateKey])
      : (e.target.style.color = "lightgrey");
  }

  return (
    <div className="exercise">
      <h1 className="exercise__title">{exercise.title}</h1>
      <FontAwesomeIcon
        onClick={() => deleteExercise(workoutId, index)}
        className="exercise__delete"
        icon={faCircleXmark}
      />
      <div className="exercise__toggle-btns">
        <FontAwesomeIcon
          onClick={(e) => handleToggle("weight", e)}
          className="exercise__toggle-icon"
          icon={faWeightHanging}
        />
        <span
          onClick={(e) => handleToggle("sets", e)}
          className="exercise__toggle-icon exercise__toggle-icon-letter"
        >
          S
        </span>
        <span
          onClick={(e) => handleToggle("reps", e)}
          className="exercise__toggle-icon exercise__toggle-icon-letter"
        >
          R
        </span>
        <FontAwesomeIcon
          onClick={(e) => handleToggle("time", e)}
          className="exercise__toggle-icon "
          icon={faClock}
        />
        <FontAwesomeIcon
          onClick={(e) => handleToggle("notes", e)}
          className="exercise__toggle-icon"
          icon={faNoteSticky}
        />
      </div>
      {toggles["weight"] ? <Weight /> : <div></div>}
      {toggles["sets"] ? <Sets /> : <div></div>}
      {toggles["reps"] ? <Reps /> : <div></div>}
      {toggles["time"] ? <Time /> : <div></div>}
      {toggles["notes"] ? <Notes /> : <div></div>}
    </div>
  );
};

export default Exercise;
