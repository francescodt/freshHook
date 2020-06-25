import React from 'react';
import useTheme from './contexts/theme';

import ToDo from './components/todo/todo.js';


function App() {
  
  const { mode } = useTheme();

  
  return (
    <div className={mode}>
      <ToDo />
    </div>
  );
}

export default App;
