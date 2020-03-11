const {connect} = require('./client');

console.log('Connecting ...');
connect();

const handleUserInput = (data) => {
  if(data === "\x03") {
    process.exit();
  };
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}


setupInput();