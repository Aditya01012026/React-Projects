import React from 'react';
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import ThemeToggle from "./components/ThemeToggle";
import QuoteBox from "./components/QuoteBox";
import "./index.css";


function App() {
  return (
    <>
      <div className='dashboard'>
        <ThemeToggle />
        <h1>Productivity Dashboard</h1>
        <div className='"widgets'>
          <TodoList />
          <Timer />
          <QuoteBox />
        </div>

      </div>
      
    </>
  )
}

export default App;
