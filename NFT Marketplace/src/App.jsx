import React from 'react'
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Slidebar from './components/Slidebar';
import Home from './pages/Home';
import Active from './pages/Active';
import Favorites from './pages/Favorites';
import Collections from './pages/Collections';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/Navbar'
;
export default function App() {
  return (
    <>
     <BrowserRouter>
      <Slidebar />
      <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />           
           <Route path="/Active" element={<Active />} />
           <Route path="/Favorites" element={<Favorites />} />
           <Route path="/Collections" element={<Collections />} />
           <Route path="/Profile" element={<Profile />} />
           <Route path="/Settings" element={<Settings />} />
        </Routes>   
    
    </BrowserRouter>
    
    
    </>
  )
}
