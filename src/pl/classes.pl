package MontyPython;
sub new{
    my $class = shift;
    my ($args) = @_;
    my $self = {
        firstName => $args->{firstName},
        lastName => $args->{lastName}
    };

    return bless $self, $class;
}

sub fullName{
    my $self = shift;
    return $self->{firstName} . " " . $self->{lastName};
}

package Main;
$montyPython = MontyPython->new({
    firstName => "John",
    lastName => "Cleese"
});
print "Monty Python is " . $montyPython->fullName() . ".\n";

$montyPython->{firstName} = "Eric";
$montyPython->{lastName} = "Idle";
print "Now, Monty Python is " . $montyPython->fullName() . ".";