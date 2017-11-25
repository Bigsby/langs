if (scalar(@ARGV)) {
    print "No parameters"
}
elsif (scalar(@ARGV) == 1) {
    print "Parameter is " . $ARGV[0]
}
else {
    print "Too many parameters"
}