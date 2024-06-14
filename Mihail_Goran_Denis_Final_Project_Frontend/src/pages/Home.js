import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Student Management System</h1>
      <p>Welcome to Student Management</p>
      <p>Manage your students efficiently with our easy-to-use system.</p>
      <div className="buttons">
        <Link to="/students">
          <button>View Students</button>
        </Link>
        <Link to="/students/add">
          <button>Add Student</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
