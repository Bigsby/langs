use Cwd qw();
use File::Spec::Functions 'catfile';

my $folderPath = catfile(Cwd::cwd(), "../files");
my @folders = ();
my @files = ();

opendir(DIR, $folderPath) or die $!;

while (my $childItem = readdir(DIR)) {
    if ($childItem eq "." || $childItem eq ".."){
        next;
    }

    if (-d "$folderPath/$childItem"){
        push @folders, $childItem;
    }

    if (-f "$folderPath/$childItem"){
        push @files, $childItem;
    }
}

closedir(DIR);

foreach $folder (@folders) {
    print "/$folder\n";
}

foreach $file (@files) {
    my $fileSize = -s "$folderPath/$file";
    print "$file,$fileSize" . "B\n";
}