#!/usr/bin/env perl
use Data::Dumper qw(Dumper);
use JSON;
#get  versio nand hash from git
my $gitDescription = `git describe`;
my @gitArray = split /-/, $gitDescription;
my $ll = (length @gitArray[2])-1 ;
my $hash = substr @gitArray[2],0,$ll;

# update package json version file 
my $data;
my $fjson = 'package.json';
if (open (my $json_str, $fjson))
{
  local $/ = undef;
  my $json = JSON->new;
  $data = $json->decode(<$json_str>);
  close($json_stream);
}
print  " current version '$data->{version}' .\n";

if ($data->{version} eq @gitArray[0]){
    print"Version is good \n";
}
else{
    print"Version is not good ,need to be updated !";
    $data->{version} = @gitArray[0];
    open my $fh, ">", "package.json";
    my $json = JSON->new;
    print $fh $json->pretty->encode($data);
    close $fh;
    printf " Done \n";
}


# now  print to file src/Version.js 
my $filename = 'src/Version.js';
open(my $fh, '>', $filename) or die "Could not open file '$filename' $!";
print $fh "/* Version.js File */

function Version() {
};

const GIT_VERSION = '@gitArray[0]';
const GIT_COMMIT_SINCE_TAG = '@gitArray[1]';
const GIT_HEAD_SHORT_HASH = '$hash';

Version.prototype.getVersion = function() {
    return GIT_VERSION;
};

Version.prototype.getCommits = function() {
    return GIT_COMMIT_SINCE_TAG;
};

Version.prototype.getShortHash = function() {
    return GIT_HEAD_SHORT_HASH;
};

export default Version;
";
close $fh;

