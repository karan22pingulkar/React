import React from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  { useEffect, useState } from "react";
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import useToken from './components/App/useToken';







function App() {
const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
     <div className="wrapper">
      
      <BrowserRouter>
        <Routes>
           <Route exact path="/"  element={<Main />}>
           </Route>
           <Route path="/main"  element={<Main />}>
           </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;