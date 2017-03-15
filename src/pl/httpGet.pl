use LWP::Simple;

$content = get("http://langs.bigsbyspot.org/files/webcall.txt");
print "$content";