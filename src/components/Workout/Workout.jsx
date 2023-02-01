import "./Workout.scss";
import Exercise from "../Exercise/Exercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Workout = ({ workouts, deleteWorkout }) => {
  return workouts.map((workout, index) => {
    return (
      <div className="workout" key={index}>
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
            <div idx={index}>
              <h1>Test123</h1>
            </div>
          );
        })}
        <div className="workout__btns">
          <button className="workout__btn workout__btn-add-exercise">
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
            <p>Add new exercise</p>
          </button>
          <button
            className="workout__btn workout__btn-del-workout"
            onClick={() => deleteWorkout(workout._id)}
          >
            <FontAwesomeIcon className="minus-icon" icon={faMinus} />
            <p>Delete Workout</p>
          </button>
        </div>
      </div>
    );
  });
};

export default Workout;
