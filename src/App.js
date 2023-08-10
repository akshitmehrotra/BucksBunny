import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Translatee from './pages/Transalate';
// import About from './About';
// import Contact from './Contact';
// import NotFound from './NotFound'; // Optional: Create a NotFound component

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/translate" element={<Translatee />} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} /> Optional: Handle 404 */}
        </Routes>
    </Router>
  );
}

export default App;
