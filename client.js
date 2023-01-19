const net = require("net");
const {IP, PORT} = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: FAY"); //My name
    // conn.write("Move: up");
  })

  //Experimenting with movement at connect
  // conn.on("connect", () => {
  //   setInterval(()=>{conn.write("Move: up")}, 50);
  //   // setTimeout(()=>{conn.write("Move: left")}, 150);
  // })

  //Ability to receive data from the server
  // conn.on("data", (data) => {
  //   console.log(data);
  // })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;