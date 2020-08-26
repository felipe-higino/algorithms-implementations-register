using System;

namespace Anonymous_objects
{
    class Program
    {
        
        public static object generateObj()
        {
            return new {name = "menor", age = 12};
        }
        
        static void Main(string[] args)
        {
            var obj = generateObj();
            var obj2 = new 
            {
                some  = obj,
                thing = "any",
                matters = 2,
                oder = new {
                    min=1,
                    max=10,
                    anin = new { 
                        hello ="world"
                    }
                }
            };

            
            Console.WriteLine(generateObj());
        }
    }
}
