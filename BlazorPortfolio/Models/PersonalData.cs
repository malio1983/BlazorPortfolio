namespace BlazorPortfolio.Models
{

    public class PersonalData
    {
        public PersonalData()
        {
            SocialMedias = new List<SocialMedia>();
            Skills = new List<Skill>();
            Experiences = new List<Experience>();
            Projects = new List<Project>();
        }

        public string Name { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty; 
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public List<SocialMedia> SocialMedias { get; set; }
        public List<Skill> Skills { get; set; }
        public List<Experience> Experiences { get; set; }
        public List<Project> Projects { get; set; }
    }

    public class SocialMedia 
    {
       
        public string Name { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public string Link { get; set; } = string.Empty;
    }

    public class Skill 
    {
        
        public string Text { get; set; } = string.Empty;
        public int Procent { get; set; } 
    }

    public class Experience 
    {
        
        public string From { get; set; } = string.Empty;
        public string To { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
    }

    public class Project 
    {
        
        public string Title { get; set; } = string.Empty;
        public string Link { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
    }

}
