public class dry {

	static void DoStuff() {
		System.out.println("Doing stuff!");
	}
	
	static int DoSum(int a, int b) {
		return a + b;
	}
	
    public static void main(String[] args) {
		DoStuff();
        System.out.println("2 + 1 = " + DoSum(2, 1));
    }

}