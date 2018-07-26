exports.showHTML = (req, res) => {
  console.log(`farto and farta`)
  res.set("Content-Type", "text/html")
  res.status(200).sendFile('index.html', {root: __dirname })
} 