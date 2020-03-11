let connection;

const handleUserInput = (data) => {
  if(data === "\x03") {
    console.log("Exiting");
    process.exit();
  } else if (data === "w") {
    connection.write('Move: up');
  } else if (data === "a") {
    connection.write('Move: left');
  } else if (data === "s") {
    connection.write('Move: down'); 
  } else if (data === "d") {
    connection.write('Move: right');
  } else if (data === "q") {
    connection.write('Say: You\'re going down!');
  } else if (data === "z") {
    connection.write('Say: AHHHH');
  } else if (data === "t") {
    connection.write('Say: hello');
  };
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};