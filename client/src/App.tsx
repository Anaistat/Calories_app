import React from 'react';
import './App.sass';
import {Route, Routes} from "react-router-dom";
import Questions from "./Pages/Questions/Questions";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/questions' element={<Questions/>}/>
      </Routes>
    </div>
  );
}

export default App;
