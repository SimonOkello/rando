const pokemon = ["caterpie", "butterfree", "whimsicott", "lapras", "bellsprout", "oddish", "dratini"]

exports.randomPokemon = (req, res) => {
  console.log('hello')
  const muppet = pokemon[Math.floor(Math.random()*pokemon.length)]
  console.log(`Returned another muppet! ${pokemon}`)
  res.send(`${hello}`)
}
