// Student.cs
using System.ComponentModel.DataAnnotations;

namespace Mihail_Goran_Denis_Final_Project_Backend.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty; 
        public string LastName { get; set; } = string.Empty;  
        public string Email { get; set; } = string.Empty;     
        public DateTime DateOfBirth { get; set; }
        public string Grade { get; set; } = string.Empty; 
    }

}

