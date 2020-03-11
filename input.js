const handleUserInput = (data) => {
  if(data === "\x03") {
    console.log("Exiting");
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
};

module.exports = {setupInput};