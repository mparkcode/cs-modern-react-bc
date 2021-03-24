const getRandomPokemon = arr => {
  const pokemon =  arr[Math.floor(Math.random() * arr.length)];
  arr.splice(arr.indexOf(pokemon), 1)
  return pokemon
}

const divideArray = arr => {
  const pokemonOne = [];
  while(pokemonOne.length !== arr.length){
    pokemonOne.push(getRandomPokemon(arr))
  }
  return [arr, pokemonOne]
}

const determineWinner = arr => {
  let totalExp = 0;
  arr.forEach(item => {
    totalExp += item.base_experience;
  })
  return totalExp;
}

export {getRandomPokemon, divideArray, determineWinner};