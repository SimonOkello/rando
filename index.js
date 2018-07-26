exports.showHTML = (req, res) => {		
  console.log(`josh`)		
  res.set("Content-Type", "text/html")		
  res.status(200).sendFile('index.html', {root: __dirname })		
}   