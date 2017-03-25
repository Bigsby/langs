sub DoStuff {
    if ($_[0]){
        die "An error occured!\n";
    }

    print "Doing stuff!\n";
}

eval {
    DoStuff(0);
    DoStuff(1);
    DoStuff(0);
} || do {
    print $@;
}