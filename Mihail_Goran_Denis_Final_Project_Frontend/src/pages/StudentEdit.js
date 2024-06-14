// StudentEdit.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentService from '../services/StudentService'; // Import the service

function StudentEdit() {
    const { id } = useParams(); // Access the route parameter 'id' using useParams()
    const [student, setStudent] = useState({}); // State to hold student data
  
    useEffect(() => {
      fetchStudent();
    }, []);
  
    const fetchStudent = async () => {
      try {
        const fetchedStudent = await StudentService.getStudent(id); // Call the correct function
        setStudent(fetchedStudent); // Update state with fetched student data
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };
  
    const handleUpdate = async () => {
      try {
        await StudentService.updateStudent(id, student); // Example: Update student data
        // Optionally, navigate to another page or display a success message
      } catch (error) {
        console.error('Error updating student:', error);
      }
    };
  
    return (
      <div>
        <h1>Edit Student</h1>
        {/* Form inputs for editing student */}
        <button onClick={handleUpdate}>Update Student</button>
      </div>
    );
  }
  
  export default StudentEdit;
