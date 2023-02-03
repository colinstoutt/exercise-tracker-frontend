import "./Workout.scss";
import Exercise from "../Exercise/Exercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Workout = ({ workout, deleteWorkout, addExercise, deleteExercise }) => {
  const [exerciseForm, setExerciseForm] = useState({
    title: "",
  });
  const handleChange = (e) => {
    setExerciseForm({
      ...exerciseForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addExercise(exerciseForm, workout._id);
    setExerciseForm({
      title: "",
    });
  };
  return (
    <div className="workout">
      <FontAwesomeIcon
        onClick={() => deleteWorkout(workout._id)}
        className="workout__delete"
        icon={faCircleXmark}
      />
      <h1 className="workout__day">
        {workout.day.length > 3
          ? workout.day.toUpperCase().substring(0, 3)
          : workout.day.toUpperCase()}
      </h1>
      <h1 className="workout__muscle-group">
        {workout.muscleGroup.toUpperCase()}
      </h1>
      {workout.exercises.map((exercise, index) => {
        return (
          <Exercise
            workoutId={workout._id}
            deleteExercise={deleteExercise}
            exercise={exercise}
            index={index}
          />
        );
      })}

      <div className="workout__add-new">
        <form className="workout__exercise-form" onSubmit={handleSubmit}>
          <input
            className="workout__add-new-input"
            type="text"
            name="title"
            placeholder="Add new exercise..."
            value={exerciseForm.title}
            onChange={handleChange}
          />
          <button className="workout__exercise-form-submit" type="submit">
            <FontAwesomeIcon
              className="workout__exercise-form-submit-icon"
              icon={faPlus}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Workout;
