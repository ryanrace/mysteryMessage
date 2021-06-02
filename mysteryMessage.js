function generateRandomNumber(array) {
    return Math.floor(Math.random() * array.length)
  }

  const pokemonList = ['Mareep', 'Wooper', 'Krookodile', 'Celebi', 'Shelgon', 'Machoke'];
  const encounterList = ['running in Tall Grass', 'surfing on the Ocean', 'using the Old Rod', 'using Rock Smash', 'using Sweet Scent on trees'];
  const ballList = ['Pokeball', 'Great Ball', 'Ultra Ball', 'Master Ball', 'Quick Ball', 'Luxury Ball'];
  const captureList = ['successful', 'unsuccessful'];

  let pokemon = pokemonList[generateRandomNumber(pokemonList)];
  let encounter = encounterList[generateRandomNumber(encounterList)];
  let ball = ballList[generateRandomNumber(ballList)];
  let capture = captureList[generateRandomNumber(captureList)];

  const fullEncounter = `You encountered a wild ${pokemon} while ${encounter}. You decide to throw a ${ball} at the ${pokemon}. The capture attempt was ${capture}`;
  console.log(fullEncounter)
