import "./Index.scss";
import { useState } from "react";

const Index = ({
  user,
  workouts,
  setWorkouts,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
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
  };

  const loaded = () => {
    return workouts.map((workout, index) => {
      return (
        <div key={index}>
          <h1 className="index__day">{workout.day.toUpperCase()}</h1>
          <h1 className="index__muscle-group">
            {workout.muscleGroup.toUpperCase()}
          </h1>
          {workout.exercises.map((exercise, index) => {
            return (
              <div idx={index}>
                <h1>Test123</h1>
              </div>
            );
          })}
          <button>Add new exercise</button>
          <button onClick={() => deleteWorkout(workout._id)}>
            Delete Workout
          </button>
        </div>
      );
    });
  };
  const loading = () => <h1>Loading...</h1>;

  return (
    <div className="index">
      {workouts ? loaded() : loading()}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="day"
          placeholder="Day"
          value={workoutForm.day}
          onChange={handleChange}
        />
        <input
          type="text"
          name="muscleGroup"
          placeholder="Muscle Group"
          value={workoutForm.muscleGroup}
          onChange={handleChange}
        />
        <button type="submit">Create Workout</button>
      </form>
    </div>
  );
};

export default Index;
