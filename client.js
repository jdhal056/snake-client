const net = require('net');
const {IP, PORT} = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // handles incoming data and prints it
  conn.on('data', (data) => {
    console.log(data);
  });
  // let interval;
  // prints connect message when connection is established
  conn.on('connect', (data) => {
    console.log("Sucessfully connected to the game server.");
    conn.write('Name: JSD');
    // interval = setInterval(() => {
    //   conn.write('Move: up')
    // },500);
  }); 
  // conn.on('error', () => {
  //   console.log("quit");
  //   clearTimeout(interval);
  // });
  return conn;
};

module.exports = {connect};