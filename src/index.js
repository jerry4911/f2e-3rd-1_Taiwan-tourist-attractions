import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

const NAV_DATA = [
  { id: "attractions", name: "台灣景點", color:'pink', icon:'triangle'},
  { id: "food", name: "美食住宿", color:'yellow', icon:'square' },
  { id: "transportation", name: "景點交通", color:'green', icon:'circle' }
];

ReactDOM.render(
  <React.StrictMode>
    <Header 
      className="header"
      navbuttons={NAV_DATA}>
    </Header>
    <App subject="o(^ω^)o123" tasks={DATA}/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();