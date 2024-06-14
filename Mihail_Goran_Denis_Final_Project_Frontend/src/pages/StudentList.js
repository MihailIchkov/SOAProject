import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        StudentService.getStudents()
            .then(response => {
                setStudents(response);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
                setStudents([]); // Set students to an empty array on error
            });
    };

    const deleteStudent = (id) => {
        StudentService.deleteStudent(id)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => {
                console.error('Error deleting student:', error);
            });
    };

    return (
        <div className="container">
            <h1>Students</h1>
            <Link to="/students/add" className="btn btn-primary mb-2">Add Student</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Grade</th>
                        <th>Actions</th> {/* Added Actions column */}
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(students) && students.length > 0 ? (
                        students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>{student.grade}</td>
                                <td className="actions-column"> {/* Added class for styling */}
                                    <button onClick={() => deleteStudent(student.id)} className="btn btn-danger btn-sm ml-2">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No students found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
