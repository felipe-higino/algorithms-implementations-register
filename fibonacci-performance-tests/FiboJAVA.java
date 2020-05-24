package TestesFibo;

public class FiboJAVA
{
	public static void main(String[] args) {
	    long inicio = System.currentTimeMillis(); 
	    System.out.println(fibo(40));
        long fim  = System.currentTimeMillis();  
        System.out.println( fim - inicio );
		
	}
	
	public static int fibo(int i){
	    if(i <= 1){
            return i;
        }
        return fibo(i-2) + fibo(i-1);
	}
}
