const fs = require("fs")
const html = fs.readFileSync("./index.html")

exports.showHTML = (req, res) => {
  console.log(`farto and farta`)
  res.send(html)
}