import React from 'react';
import './App.css';
 
function App() {
  const name = '리액트';
  return (
    <>
       {/* 주석처리 되나요? */}
      <div className="react">{ name }</div>
      <input/>
    </>
  );
}
 
export default App;