import React, { useState } from 'react';
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState(''); // New grade state
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const student = { firstName, lastName, email, grade };
    try {
      await StudentService.createStudent(student);
      navigate('/students'); // Redirect to students list after successful form submission
    } catch (error) {
      console.error('Error creating student:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Grade</label>
          <input
            type="text"
            className="form-control"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
