exports.showHTML = (req, res) => {
  console.log(`farto and farta`)
  res.status(200).sendFile('index.html', {root: __dirname }
}