import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import './app.css'  
import logreg from './logreg';
import Home from './home';
import Login from './login';
import Register from './register';
import { Link } from 'react-router-dom';
import Italy from './italy/italy';
import Korea from './korea/korea';
import Pizza from './italy/pizza/pizza';
import Allrecipies from './allrecipies' ;
import Mexico from './mexico/mexico';
import Enchiladas from './mexico/enchiladas/enchiladas';
import RecipeListPage from './test';

ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allrecipies" element={<Allrecipies />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/korea" element={<Korea />} />
        <Route path="/pizza" element={<Pizza />} />
      </Routes>
    </Router>,
  document.getElementById('root') 
);
