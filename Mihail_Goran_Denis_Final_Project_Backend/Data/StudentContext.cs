// StudentContext.cs
using Microsoft.EntityFrameworkCore;
using Mihail_Goran_Denis_Final_Project_Backend.Models;

namespace Mihail_Goran_Denis_Final_Project_Backend.Data
{
    public class StudentContext : DbContext
    {
        public StudentContext(DbContextOptions<StudentContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().ToTable("Students"); // Set table name
            modelBuilder.Entity<Student>().HasKey(s => s.Id); // Set primary key

            // Seed initial data for Students
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = 1, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", DateOfBirth = new DateTime(2000, 2, 22), Grade = "A" },
                new Student { Id = 2, FirstName = "Jane", LastName = "Smith", Email = "jane.smith@example.com", DateOfBirth = new DateTime(2000, 2, 22), Grade = "B" }
            );

            base.OnModelCreating(modelBuilder);
        }
    }
}
