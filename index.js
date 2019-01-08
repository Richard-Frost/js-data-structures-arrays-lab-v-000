// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop(drivers.length - 1)
}


function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name){
  const appendDriver = [...drivers, name]
  return appendDriver
}

function prependDriver(name) {
  const prependDriver = [name, ...drivers]
  return prependDriver
}
  
  
  
  
  