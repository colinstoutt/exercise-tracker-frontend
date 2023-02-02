import "./Exercise.scss";
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
    </div>
  );
};

export default Exercise;
