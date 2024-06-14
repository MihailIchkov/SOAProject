using Mihail_Goran_Denis_Final_Project_Backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Mihail_Goran_Denis_Final_Project_Backend.Services
{
	public interface IStudentService
	{
		Task<IEnumerable<Student>> GetStudentsAsync();
		Task<Student> GetStudentByIdAsync(int id);
		Task<Student> CreateStudentAsync(Student student);
		Task UpdateStudentAsync(int id, Student student);
		Task DeleteStudentAsync(int id);
	}
}
