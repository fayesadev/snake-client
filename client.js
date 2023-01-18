const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541 // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: FAY");
    // conn.write("Move: up");
  })
//Experimenting with movement at connect
  // conn.on("connect", () => {
  //   setInterval(()=>{conn.write("Move: up")}, 50);
  //   // setTimeout(()=>{conn.write("Move: left")}, 150);
  // })

//Ability to receive data from the server
  conn.on("data", (data) => {
    console.log(data);
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;