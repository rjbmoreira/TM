namespace TM.API.Models
{
    public class TimeInput{

        public int Id {get;set;}
        public Customer Customer {get;set;}
        public Project Project {get;set;}
        public int TimeSpent {get;set;}
    }
}