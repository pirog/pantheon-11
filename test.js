'use strict'

var cp = require('child_process');
var p = require('procstreams');

// set env
process.env.PATH = [process.env.PATH, '/Users/pirog/.kalabox/bin'].join(':');
process.env.DOCKER_TLS_VERIFY = '1'
process.env.DOCKER_HOST = 'tcp://10.13.37.100:2376'
process.env.DOCKER_CERT_PATH = '/Users/pirog/.docker/machine/machines/Kalabox2'
process.env.DOCKER_MACHINE_NAME = 'Kalabox2'
process.env.KALABOX_APP_ROOT_BIND = '/Users/pirog/Desktop/apps/pantheon/code/drops-7'

// compose things

var composeBin = 'docker-compose';
var cmd = [
  '--project-name',
  'pantheon',
  '--file',
  '/Users/pirog/Desktop/apps/pantheon/kalabox-compose.yml',
  '--file',
  '/Users/pirog/Desktop/apps/pantheon/kalabox-cli.yml',
  'run',
  '--entrypoint',
  'git',
  '--rm',
  'cli',
  'status'
];

// Spawn
var stream = cp.spawn(composeBin, cmd,  { stdio: [process.stdin, process.stdout, process.stderr] });

/*
stream.stdout.setEncoding('utf8');
stream.stdout.pipe(process.stdout);
stream.stderr.pipe(process.stderr);
process.stdin.resume();
process.stdin.setEncoding('utf8');
if (process.stdin.setRawMode) {
  process.stdin.setRawMode(true);
}
process.stdin.pipe(stream.stdin);

stream.on('end', function() {
  if (process.stdin.setRawMode) {
    process.stdin.setRawMode(false);
  }
});


/*
stream.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
  //Here is where the output goes
});
stream.stderr.on('data', function(data) {
  console.log('stdout: ' + data);
  //Here is where the error output goes
});
stream.on('close', function(code) {
  console.log('closing code: ' + code);
  //Here you can get the exit code of the script
});
*/

