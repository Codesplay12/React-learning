import React, { useState } from 'react'

const TodoApp = () => {

    const [tasks, setTasks] = useState([]);

    const [newtasks, setNewTasks] = useState("");

    const handleInput = (e) =>
    {
       setNewTasks(e.target.value)
    }

     const AddTask = () =>
    {
        if(newtasks.trim() !== "")
      setTasks(t => [...t,newtasks])
      setNewTasks("");
    }


     const DeleteTask = (index) =>
    {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }


     const MoveTaskUp = (index) =>
    {
         if(index > 0)
         {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
         }
    }


     const MoveTaskDown = (index) =>
    {
   if(index < tasks.length -1){
    const updatedTasks = [...tasks];
     [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
   }
    }


     




  return (
    <div className='to-do-list'>
      <h1>To-Do List</h1>
      <div>
        <input
        type='text'
        placeholder='Enter a Task'
        value={newtasks}
        onChange={handleInput}
        />
        <button className='add-btn' 
        onClick={AddTask}
        >Add</button>
      </div>
      <ol>
        {tasks.map((task,index) => 
        <li key={index}>
            <span 
                 className='text'>
                {task}
            </span>
            <button className='delete-btn' onClick={() =>DeleteTask(index)}>Delete</button>
            <button className='move-btn' onClick={ () =>MoveTaskUp(index)}>Move Up</button>
            <button className='move-btn' onClick={() => MoveTaskDown(index)}>Move Down</button>
        </li>
        )}
      </ol>
    </div>
  )
}

export default TodoApp
