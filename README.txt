# Student Management System

A comprehensive system to manage students and their grades, providing an easy way to view and manage student information.

## Authors
- Mihail
- Goran
- Denis

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)
8. [Acknowledgments](#acknowledgments)

---

## Introduction

The Student Management System is designed to simplify the process of managing student data and their respective grades. It aims to streamline administrative tasks, reduce manual workload, minimize errors, and provide quick access to student data.

## Features

- Add, update, and delete student records
- Add and manage grades for students
- User-friendly interface
- Efficient tracking and reporting of student information

## Technologies Used

- **Frontend:**
  - React
  - JavaScript
  - HTML/CSS

- **Backend:**
  - .NET Core
  - C#

- **Database:**
  - SQL Server

- **Development Tools:**
  - Visual Studio
  - Visual Studio Code

- **Version Control:**
  - Git
  - GitHub

## Setup and Installation

### Prerequisites

- Node.js
- .NET Core SDK
- SQL Server

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MihailIchkov/SOAProject.git
   cd SOAProject
Set up the backend:

bash
Copy code
cd Mihail_Goran_Denis_Final_Project_Backend
dotnet restore
dotnet build

Set up the frontend:

bash
Copy code
cd ../Mihail_Goran_Denis_Final_Project_Frontend
npm install
npm run build

Configure the database:

Update the connection string in appsettings.json for the backend project to point to your SQL Server instance.
dotnet ef database update
Run the application:

bash
Copy code
cd ../Mihail_Goran_Denis_Final_Project_Backend
dotnet run
The backend should now be running on https://localhost:5008.

Run the frontend:

bash
Copy code
cd ../Mihail_Goran_Denis_Final_Project_Frontend
npm start
The frontend should now be running on http://localhost:3000.

Usage
Navigate to http://localhost:3000 in your web browser.
Use the interface to add, update, delete, and manage student records and grades.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards and includes necessary tests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to all team members for their contributions.
Special thanks to our instructors and mentors.