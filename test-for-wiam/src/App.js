import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Form1} from './components/Form1';
import {Form2} from './components/Form2';
import {Form3} from './components/Form3';
import {Navigation} from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    gender: '',
    workPlace: '',
    address: '',
    loanAmount: 200,
    loanTerm: 10,
  });

  return (
    <Router>
      <div className="container mt-5">
        <Navigation />
        <Routes>
          <Route path="/form1" element={<Form1 formData={formData} setFormData={setFormData} />} />
          <Route path="/form2" element={<Form2 formData={formData} setFormData={setFormData} />} />
          <Route path="/form3" element={<Form3 formData={formData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;