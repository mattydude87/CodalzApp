import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className="App">
<Router>
    <Routes>
        <Route path={"/"} element={<Login/>}/>
    </Routes>
</Router>
          <Login/>
        </div>

  );
}

export default App;
