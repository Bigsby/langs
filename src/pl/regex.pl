print "Is '^\\d+\$' mathed by '123456'?\n";
if ("123456" =~ /^[0-9]+$/){
    print "yes";
}else{
    print "no";
}

print "Groups of '^([a-z]+)\\-(\\d+)\$' found in 'abcdef-12345'\n";
@matches = ("abcdef-12345" =~ /^([a-z]+)\-(\d+)$/);
$matchCount = @matches;
print "Found $matchCount groups.\n";
foreach $groupIndex (0..$#matches){
    print "[$groupIndex] = $matches[$groupIndex]\n";
    $groupIndex++;
}