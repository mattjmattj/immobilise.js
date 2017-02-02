'use strict'

function immobilise(object, property) {
  
  var previousValue
  if (typeof object[property] != 'undefined') {
    previousValue = object[property]
  }
  
  Object.defineProperty(object, property, {
    set: function() {
      throw new TypeError('Pas d\'alternance ici !')
    },
    
    get: function() {
      return previousValue
    }
  })
  
  return object
}

function stopALaChasseALHomme (object, property) {
  var previousValue
  if (typeof object[property] != 'undefined') {
    previousValue = object[property]
  }
  
  delete object[property]
  object[property] = previousValue
  
  return object
}

module.exports = {
  immobilise: immobilise,
  stopALaChasseALHomme: stopALaChasseALHomme
}