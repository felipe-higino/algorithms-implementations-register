def fibo(i):
    if (i <= 1):
        return i
    return fibo(i-2) + fibo(i-1)

import time
start_time = time.time()

print(fibo(40))

print("--- %s seconds ---" % (time.time() - start_time))