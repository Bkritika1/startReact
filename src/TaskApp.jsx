import { useState } from "react"
import TaskList from "./TaskList"
import AddTask from "./AddTask";
let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function TaskApp() {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
    
  }

    function handleTaskChange(task){
        setTasks(
            tasks.map((t)=>{
                if(t.id === task.id){
                    return task;
                }else{
                    return t;
                }
            })
        )
    }
    function handleTaskDelete(taskId){
      setTasks(tasks.filter((t) => t.id !== taskId));
    }
   
    return (
<div className="Task-app">
    <h2>To-do List</h2>
    <AddTask onAddTask={ handleAddTask}/>
<TaskList tasks={tasks}   onTaskChange={handleTaskChange}
    onDeleteTask={handleTaskDelete}/>
        </div>
    )
}