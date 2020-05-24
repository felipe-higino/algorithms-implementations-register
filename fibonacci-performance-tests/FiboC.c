#include <stdio.h>
#include <time.h>

int main()
{
    clock_t begin = clock();

    printf("%i", fibo(40));

    clock_t end = clock();
    double time_spent = (double)(end - begin) / CLOCKS_PER_SEC;
    printf("\n%f", time_spent);

    return 0;
}

int fibo(int i){
    if(i <= 1){
        return i;
    }
    return fibo(i-2) + fibo(i-1);
}