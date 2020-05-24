#include <iostream>
#include <time.h>

using namespace std;

int fibo(int i){
    if(i <= 1){
        return i;
    }
    return fibo(i-2) + fibo(i-1);
}

int main()
{
    clock_t c2, c1;
    float tempo;
    c1 = clock();
    
    cout<<fibo(40);
    
    c2 = clock();
    tempo = (c2 - c1)*1000/CLOCKS_PER_SEC;
    cout<<'\n'<<tempo;
    cin.get();
    return 0;
}