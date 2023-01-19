// setup interface to handle user input from stdin
const {connect} = require('./client');
// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  if (key === "w") {
    connection.write("Move: up");
    // console.log("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
    // console.log("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
    // console.log("Move: right");
  }
  if (key === "s") {
    connection.write("Move: down");
    // console.log("Move: down");
  }
  if (key === "m") {
    // console.log("Say: Try harder!");
    connection.write("Say: Better luck next time!")
  }
  if (key === "n") {
    connection.write("gg ez");
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