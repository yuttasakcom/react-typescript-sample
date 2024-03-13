import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/react.svg";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      return [
        ...prevGoals,
        {
          id: Math.random(),
          title: "My New Goal",
          description: "Description of my new goal",
        },
      ];
    });
  }

  function handleDeleteGoal(goalId: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
};

export default App;
