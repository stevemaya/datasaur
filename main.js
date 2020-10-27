/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function(newSpecies, newPeriod, isACarnivore, newExtinct) {
  return {
    species: newSpecies,
    period: newPeriod,
    carnivore: isACarnivore,
    extinct: newExtinct || false
  }
}

const makeSingular = function(dino) {
  let newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  let newName = newDino.species;

  if(newName.slice(-2) === "us") {1
    const singularSpecies = newName.slice(0, -2);
    newDino.species = singularSpecies;
  }

  return newDino;
}

const truncateSpecies = function(dino) {
  let truncatedName = dino.species;
  if(truncatedName.length >= 10) {
    truncatedName = truncatedName.slice(0, 7) + "...";
  }

  return makeDino(truncatedName, dino.period, dino.carnivore, dino.extinct);
}

const makeExtinct = function(dino) {
  return makeDino(dino.species, dino.period, dino.carnivore, true);
}

const isCarnivore = function(dino) {
  return dino.carnivore;
}

const isHerbivore = function(dino) {
  return !dino.carnivore;
}

const isExtinct = function(dino) {
  return dino.extinct;
}

const isNotExtinct = function(dino) {
  return !dino.extinct;
}

const isTriassic = function(dino) {
  if(dino.period === "Triassic") {
    return true;
  }

  return false;
}

const isJurassic = function(dino) {
  if(dino.period === "Jurassic") {
    return true;
  }

  return false;
}

const isCretaceous = function(dino) {
  if(dino.period === "Cretaceous") {
    return true;
  }

  return false;
}




/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function(dinos) {
  const newDinos = dinos.map(makeSingular)
  return newDinos;
}

const truncateDinos = function(dinos) {
  const truncatedDinos = dinos.map(truncateSpecies);
  return truncatedDinos;
}

const makeAllExtinct = function(dinos) {
  const extinctDinos = dinos.map(makeExtinct);
  return extinctDinos;
}

const carnivoresOnly = function(dinos) {
  const carnivores = dinos.filter(isCarnivore);
  return carnivores;
}

const herbivoresOnly = function(dinos) {
  const herbivores = dinos.filter(isHerbivore);
  return herbivores;
}

const extinctOnly = function(dinos) {
  const extincts = dinos.filter(isExtinct);
  return extincts;
}

const notExtinct = function(dinos) {
  const exists = dinos.filter(isNotExtinct);
  return exists;
}

const triassicOnly = function(dinos) {
  const triassicDinos = dinos.filter(isTriassic);
  return triassicDinos;
}

const notTriassic = function(dinos) {
  const jurassicDinos = dinos.filter(isJurassic);
  const cretaceousDinos = dinos.filter(isCretaceous)
  const nonTriassicDinos = jurassicDinos.concat(cretaceousDinos)
  
  return nonTriassicDinos;
}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isNotExtinct === 'undefined') {
    isNotExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isNotExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
}
