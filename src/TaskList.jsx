
export default function TaskList({ tasks, onTaskChange, onDeleteTask }) {
    return (

        <ul>
            {
                tasks.map((task) => {
                    return (
                        <li key={task.id}>

                            <input type="checkbox" />
                            {task.text}
                          <button onClick={() => onTaskChange({ ...task, done: !task.done })}>Edit</button>

                            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}



