// setup interface to handle user input from stdin
const {connect} = require('./client');

let connection;

const handleUserInput = function(key) {
  if (key === "w") {
    // conn.write("Move: up");
    console.log("Move: up");
  }
  if (key === "a") {
    // conn.write("Move: left");
    console.log("Move: left");
  }
  if (key === "d") {
    // conn.write("Move: right");
    console.log("Move: right");
  }
  if (key === "s") {
    // conn.write("Move: down");
    console.log("Move: down");
  }
  if (key === "m") {
    console.log("Say: Try harder!");
  }
  if (key === '\u0003') {
    process.exit();
 }
}
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};