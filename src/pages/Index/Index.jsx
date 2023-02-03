import "./Index.scss";
import { useState } from "react";
import Workout from "../../components/Workout/Workout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Index = ({
  user,
  workouts,
  setWorkouts,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  addExercise,
  deleteExercise,
}) => {
  const [workoutForm, setWorkoutForm] = useState({
    user: user._id,
    day: "",
    muscleGroup: "",
    exercises: [],
  });

  const handleChange = (e) => {
    setWorkoutForm({
      ...workoutForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createWorkout(workoutForm);
    setWorkoutForm({
      user: user._id,
      day: "",
      muscleGroup: "",
      exercises: [],
    });
    console.log(workouts);
  };

  const loaded = () => {
    return workouts.map((workout, index) => {
      return (
        <Workout
          key={index}
          workout={workout}
          deleteWorkout={deleteWorkout}
          addExercise={addExercise}
          deleteExercise={deleteExercise}
        />
      );
    });
  };
  const loading = () => (
    <div className="index__spinner-icon">
      <i
        className="fa fa-circle-o-notch fa-spin"
        style={{ fontSize: "40px", textAlign: "center", margin: "auto" }}
      ></i>
    </div>
  );

  return (
    <div className="index">
      {workouts ? loaded() : loading()}
      <h1 className="index__create-title">Create a new workout</h1>

      <form className="index__form" onSubmit={handleSubmit}>
        <input
          className="index__input index__input-day"
          type="text"
          name="day"
          placeholder="Day"
          value={workoutForm.day}
          onChange={handleChange}
        />
        <input
          className="index__input index__input-muscle-group"
          type="text"
          name="muscleGroup"
          placeholder="Muscle Group"
          value={workoutForm.muscleGroup}
          onChange={handleChange}
        />

        <button className="index__input-submit" type="submit">
          <FontAwesomeIcon className="plus-icon" icon={faPlus} />
          <p>Create Workout</p>
        </button>
      </form>
    </div>
  );
};

export default Index;
