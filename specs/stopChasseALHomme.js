var should = require('should')

var Immobilise = require("../src/immobilise")
var immobilise = Immobilise.immobilise;
var stopChasseALHomme = Immobilise.stopChasseALHomme;

describe ('stopChasseALHomme', function() {
  
  it('doit mettre à mal les tenants de l\'immobilise', function() {
    var situation = {
      gouvernement: "parti socialiste"
    }
    
    immobilise(situation, 'gouvernement')
    stopChasseALHomme(situation, 'gouvernement')
    
    
    should(function(){situation.gouvernement = "Matthias président !"}).not.throw()
    should(situation.gouvernement).eql("Matthias président !")
  });
});