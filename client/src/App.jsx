import React from 'react';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Notes from './components/pages/Notes';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';


export default function App() {
  return (
    <>
      <Navbar />  
      <Routes> 
        <Route element={<PrivateRoutes />}>
          <Route path='/notes' element={<Notes />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

