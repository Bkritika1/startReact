export default function AddTask({onAddTask}){
    return(
        <div>
            <input type="text" placeholder="AddTask"/>
            <button onClick={()=> onAddTask(text)}>Add</button>
        </div>
    )
}