// import logo from './logo.svg';
// import './App.css';

// function App(props) {
//   const subject = props.subject;
//   console.log(props);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React {subject}
//         </a>
//       </header>
//     </div>
//   );
// }

// import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import HomeCard from "./components/HomeCard";
import CitySection from "./components/CitySection";
import icon from "./assets/images/triangle.svg"

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function App(props) {
  // hook
  const [filter, setFilter] = useState('All');
  const [tasks, setTasks] = useState(props.tasks);
  
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(tasks)
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks)
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
    console.log(tasks)
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);
  useEffect(() => {
    document.title = "????????????????????????"
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    // <div className="todoapp stack-large">
    //   <h1>TodoMatic</h1>
    //   <Form addTask={addTask} />
    //   <div className="filters btn-group stack-exception">
    //     {filterList}
    //   </div>
    //   <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
    //     {headingText}
    //   </h2>
    //   <ul
    //     role="list"
    //     className="todo-list stack-large stack-exception"
    //     aria-labelledby="list-heading"
    //   >
    //     {taskList}
    //   </ul>
    // </div>

    <div className="container">
      <HomeCard></HomeCard>
      <div className="shadow shadow-left"></div>
      <div className="shadow shadow-right"></div>
      <div className="section-title">
        <embed className="title-icon" src={icon} alt="map"></embed>
        <p>????????????</p>
      </div>
      <CitySection></CitySection>
    </div>
  );
}

export default App;
