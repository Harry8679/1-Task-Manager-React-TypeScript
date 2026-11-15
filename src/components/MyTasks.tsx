import { useState } from "react";
import type { Task } from "../types/task";

const MyTasks = () => {
  const initialTasks: Task[] = [
    {
        id: 1,
        title: "Apprendre React",
        completed: false
    },
    {
        id: 2,
        title: "Pratiquer TypeScript",
        completed: true
    }
  ];
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2>My Tasks</h2>
          <p>You have {tasks.length} tasks</p>
          <ul>
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? "line-through" : ""}>{task.title}</li>
            ))}
          </ul>
        </div>

        <button type="button" className="text-white bg-blue-600 p-3 rounded-2xl">
          Add Task
        </button>
      </div>
    </section>
  );
};

export default MyTasks;