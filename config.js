const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "aJRDhD7D#Io66l6JkyY_nJcR9Fm4-tctM873S7lfA2l5t0gb5aGE",
  OWNER_NUM: process.env.OWNER_NUM || "94772469026",
  PREFIX: process.env.PREFIX || ".",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
  MODE : process.env.MODE || "public", 
  AUTO_STATUS_LIKE: process.env.AUTO_STATUS_LIKE || "true", 
  AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING || "true"), 
  ANTI_DELETE: convertToBool(process.env.ANTI_DELETE || "true"),
};
