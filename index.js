var animal = 'dog'
var animals = 'cat'
var two = 2

function myAnimal() {
  return animal
}

function yourAnimal() {

  return animals
}

function add2(n) {
  return n + two

}

var funkyFunction = function(){
  return function(){
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
