fibo(0,0).
fibo(1,1).
fibo(N,R):-
    Naux1 is N-1,
    fibo(Naux1,R1),
    Naux2 is N-2,
    fibo(Naux2,R2),
    R is R1+R2,
    !.
