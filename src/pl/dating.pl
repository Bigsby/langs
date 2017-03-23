use DateTime;
use Date::Parse;
use Date::Format;

sub GetAgeInYears{
    my $birthday = @_[0];
    my $today = DateTime->today();
    my $age = $today - $birthday;
    return $age->years();
}

my $birthday = DateTime->new(
    year => 1939,
    month => 10,
    day => 27
);
my $formattedBirthday = $birthday->strftime("%Y-%m-%d");
my $age = GetAgeInYears($birthday);
print "John Cleese was born in $formattedBirthday and is $age years old.\n";

my $parsedDate = str2time("1975-11-10T01:25:00");
my $formatedParsedDate = time2str("%Y-%m-%dT%X", $parsedDate);
print "Parsed date is $formatedParsedDate";