import Data.Time

fibo 0 = 1
fibo 1 = 1
fibo x = fibo (x-1) + fibo (x-2)

main::IO()

main = do
    start <- getCurrentTime
    print (fibo 40)
    stop <- getCurrentTime
    print $ diffUTCTime stop start
    