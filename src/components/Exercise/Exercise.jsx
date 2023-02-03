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
  const [toggleWeight, setToggleWeight] = useState(false);
  const [toggleSets, setToggleSets] = useState(false);
  const [toggleReps, setToggleReps] = useState(false);
  const [toggleTime, setToggleTime] = useState(false);
  const [toggleNotes, setToggleNotes] = useState(false);

  function handleToggle(state, setState, e) {
    setState(!state);
    !state
      ? (e.target.style.color = "black")
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
          onClick={() => handleToggle(toggleWeight, setToggleWeight)}
          className="exercise__toggle-icon"
          icon={faWeightHanging}
        />
        <span
          onClick={() => handleToggle(toggleSets, setToggleSets)}
          className="exercise__toggle-icon exercise__toggle-icon-letter"
        >
          S
        </span>
        <span
          onClick={() => handleToggle(toggleReps, setToggleReps)}
          className="exercise__toggle-icon exercise__toggle-icon-letter"
        >
          R
        </span>
        <FontAwesomeIcon
          onClick={() => handleToggle(toggleTime, setToggleTime)}
          className="exercise__toggle-icon "
          icon={faClock}
        />
        <FontAwesomeIcon
          onClick={() => handleToggle(toggleNotes, setToggleNotes)}
          className="exercise__toggle-icon"
          icon={faNoteSticky}
        />
      </div>
      {toggleWeight ? <Weight /> : <div></div>}
      {toggleSets ? <Sets /> : <div></div>}
      {toggleReps ? <Reps /> : <div></div>}
      {toggleTime ? <Time /> : <div></div>}
      {toggleNotes ? <Notes /> : <div></div>}
    </div>
  );
};

export default Exercise;
