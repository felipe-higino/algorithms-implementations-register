using System;

namespace CSconsol
{
    class Program
    {
        static void Main(string[] args)
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            
            Console.WriteLine(fibo(40).ToString());
            
            watch.Stop();
            var elapsedMs = watch.ElapsedMilliseconds; 
            Console.WriteLine(elapsedMs.ToString()); 
        }

        static int fibo(int i)
        {
            if(i <= 1){
                return i;
            }
            return fibo(i-2) + fibo(i-1);
        }

    }
}
