import React from "react";
import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

const Todo = () => {
  /*const [inputTodoText, setInputTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSetTodo = (event) => {
    setInputTodoText(event.target.value);
    console.log(inputTodoText);
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, inputTodoText]);
    setInputTodoText("");
  };*/
  /*return (
    <div className="App">
      <div className="addtask">
        <input onChange={handleSetTodo} />
        <button onClick={handleAddTodo}>Add task</button>
      </div>

      <div className="list">
        {todoList.map((todo, index) => (
          <h3 key={index}>{todo}</h3>
        ))}
      </div>

    </div>
    );*/
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewtask] = useState("");

  const handleChange = (event) => {
    setNewtask(event.target.value);
  };

  // const addTask = () => {
  //   // const newTodoList = [...todoList, newTask];
  //   setTodoList([...todoList, newTask]);
  // };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false
    };

    setTodoList([...todoList, task]);
  };




  // const deleteTodo = (todoName) => {
  //   // const newTodoList = todoList.filter((task)=>{
  //   //   return task !== todoName
  //   //   // if (task===todoName) {
  //   //   //   return false
  //   //   // } else {
  //   //   //   return true
  //   //   // }
  //   // })
  //   setTodoList(todoList.filter((task) => task !== todoName));
  // };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const completeTask = (id)=>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id===id){
          return {...task, complete:true}
        }else {
          return task
        }
      })
    )
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              complete = {task.complete}
              deleteTodo={deleteTodo}
              completeTask = {completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
