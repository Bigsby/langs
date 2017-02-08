sub DoStuff {
	print "Doing stuff!\n";
}

DoStuff();

sub DoSum {
	return $_[0] + $_[1];
}

$result = DoSum(2, 1);
print "2 + 1 = $result";