import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import LogIn from '../src/Pages/LogIn';
import SignUp from '../src/Pages/SignUp';
import App2 from '../src/Pages/App2';
import React from 'react';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/LogIn" element= {<LogIn/>}/>
        <Route path="/Home" element = {<Home/>}/>
        <Route path="/SignUp" element = {<SignUp/>}/>
        <Route path="/dashboard" element = {<App2 />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
