import axios from 'axios';

const API_URL = 'http://localhost:5008/api'; // Replace with your backend API base URL

// Create an Axios instance with base URL
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Add a response interceptor to handle successful responses
axiosInstance.interceptors.response.use(
    response => response.data,
    error => {
        console.error('Axios request error:', error);
        return Promise.reject(error);
    }
);

// Define CRUD operations
const getStudents = () => {
    return axiosInstance.get('/students');
};

const getStudent = (id) => {
    return axiosInstance.get(`/students/${id}`);
};

const createStudent = async (student) => {
    try {
        const response = await axiosInstance.post('/students', student);
        console.log('Student created successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
};

const updateStudent = async (id, student) => {
    try {
      const response = await axiosInstance.put(`/students/${id}`, student);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

const deleteStudent = (id) => {
    return axiosInstance.delete(`/students/${id}`);
};

const studentService = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
};

export default studentService;
