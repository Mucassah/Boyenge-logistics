import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logistics from "./Logistics";
import Quote from "./Quote"; 
import Contact from "./Contact"; 

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is your main landing page */}
        <Route path="/" element={<Logistics />} />
        
        {/* This is where the "Get a Quote" buttons will lead */}
        <Route path="/quote" element={<Quote />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;