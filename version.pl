#!/usr/bin/env perl
use Data::Dumper qw(Dumper);
use JSON;
################################
my $tag ='';
my $commit ='';
my $ll;
my $size;
my $hash ='';
################################
my $gitDescription = `git describe`;
my @gitArray = split /-/, $gitDescription;
$size = @gitArray ;
if ($size eq '1'){
    $ll = (length @gitArray[0])-1 ;
    $tag = substr @gitArray[0],0,$ll;        
}else{    
    $tag = @gitArray[0] ;
    $commit = @gitArray[1] ;
    $ll = (length @gitArray[2])-1 ;
    $hash = substr @gitArray[2],0,$ll;    
}
print  "<<<< TAG  '$tag' .\n";
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

if ($data->{version} eq $tag){
    print"Version is good \n";
}
else{
    print"Version is not good ,need to be updated !";
    $data->{version} = $tag;
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

const GIT_VERSION = '@tag';
const GIT_COMMIT_SINCE_TAG = '@commit';
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

