const net = require('net');
const stdin = process.stdin;
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // handles incoming data and prints it
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

console.log('Connecting ...');
connect();