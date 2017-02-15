public class ifelse {

	public static void main(String[] args) {

		boolean value = true;
		if (value) {
			System.out.println("Got true");
		} else {
			System.out.println("Got else");
		}

		value = false;
		if (value)
			System.out.println("Got true");
		else
			System.out.println("Got else");

		int result = 3;
		if (result == 1)
			System.out.println("Got true");
		else if (result == 2)
			System.out.println("Got else");
		else
			System.out.println("Got if else");
	}

}