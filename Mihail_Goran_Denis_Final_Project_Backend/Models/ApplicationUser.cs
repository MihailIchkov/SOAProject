// ApplicationUser.cs

using Microsoft.AspNetCore.Identity;

namespace Mihail_Goran_Denis_Final_Project_Backend.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        // Implement methods to hash and verify passwords
        public void SetPassword(string password)
        {
            // Implement password hashing logic and store hash and salt
        }

        public bool VerifyPassword(string password)
        {
            // Implement password verification logic
            return true; // Replace with actual verification logic
        }
    }
}
