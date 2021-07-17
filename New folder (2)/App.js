import React from 'react';
 import Todo from './Component/Todo';


import './App.css';

function App() {
  return (
    <>
    <h1 style={{
      position:"relative",
      left:"50%"}}>TODO APP</h1>
    <div className="App">
          <Todo></Todo>
    </div>
    </>
  );
}

export default App;
