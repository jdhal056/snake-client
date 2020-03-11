const net = require('net');

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
  });
  // prints connect message when connection is established
  conn.on('connect', (data) => {
    console.log("Sucessfully connected to the game server.");
    conn.write('Name: JSD');
  }); 

  return conn;
};

module.exports = {connect};