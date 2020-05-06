import React from 'react';
import './App.css';

import TodoHook from './components/hooks/todo-hook.component';
import TodoClass from './components/class/todo-class.component';

function App() {
  return (
    <div className="App">
      <TodoHook/>
      <TodoClass/>
    </div>
  );
}

export default App;
