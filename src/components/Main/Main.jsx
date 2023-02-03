import "./Main.scss";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import CONFIG from "../config/index";
import SignupPage from "../../pages/SignupPage";
import LoginPage from "../../pages/LoginPage";
import ProtectedRoute from "../../components/Protected-Route";
import { getToken } from "../../services/tokenService";

import Index from "../../pages/Index/Index";

const Main = (props) => {
  const [workouts, setWorkouts] = useState(null);
  const workoutApi = "http://localhost:3001/api/workouts/";

  const getWorkouts = async (props) => {
    const data = await fetch(workoutApi, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    setWorkouts(data);
  };

  const createWorkout = async (workout) => {
    await fetch(workoutApi, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        // Add this header - don't forget the space after Bearer
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(workout),
    });
    getWorkouts();
  };
  // console.log(workouts);

  const updateWorkout = async (workout, id) => {
    await fetch(workoutApi + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Add this header - don't forget the space after Bearer
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(workout),
    });
    getWorkouts();
  };

  const deleteWorkout = async (id) => {
    await fetch(workoutApi + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add this header - don't forget the space after Bearer
        Authorization: `Bearer ${getToken()}`,
      },
    });
    getWorkouts();
  };

  const addExercise = async (workout, id) => {
    await fetch(workoutApi + id, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        // Add this header - don't forget the space after Bearer
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(workout),
    });
    getWorkouts();
  };

  const deleteExercise = async (id, index) => {
    await fetch(`${workoutApi}${id}/${index}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add this header - don't forget the space after Bearer
        Authorization: `Bearer ${getToken()}`,
      },
    });
    getWorkouts();
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={props.user}>
              <Index
                user={props.user}
                workouts={workouts}
                setWorkouts={setWorkouts}
                getWorkouts={getWorkouts}
                createWorkout={createWorkout}
                deleteWorkout={deleteWorkout}
                updateWorkout={updateWorkout}
                addExercise={addExercise}
                deleteExercise={deleteExercise}
              />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignupPage {...props} />} />
        <Route path="/login" element={<LoginPage {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;
