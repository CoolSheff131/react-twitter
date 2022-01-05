import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} ></Route>
        <Route path="/" element={<Home />} ></Route>
      </Routes>


    </div>
  );
}

export default App;
