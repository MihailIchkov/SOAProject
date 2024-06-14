import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import StudentForm from './pages/StudentForm'; 
import StudentList from './pages/StudentList';
import StudentEdit from './pages/StudentEdit';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">Student Management System</Link>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
          <Route path="" element={<Home />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/add" element={<StudentForm />} />
            <Route path="/students/edit/:id" element={<StudentEdit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
