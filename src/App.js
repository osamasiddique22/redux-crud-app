import React, { useEffect } from 'react';
import Form from './screeens/form/Form';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PatientList from './screeens/patientData/PatientList';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate()
  const patientsData = useSelector((state) => state.formReducer.enteredPatientsData);


  useEffect(() => {
    if (patientsData.length > 0) {
      navigate('/PatientList')
    }
    else if (patientsData.length === 0) {
      navigate('/')
    }
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/PatientList" element={<PatientList />} />
      </Routes>
    </div>
  );
}
export default App;

