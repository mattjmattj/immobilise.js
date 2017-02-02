var should = require('should')

var immobilise = require("../src/immobilise").immobilise;

describe ('immobilise', function() {
  
  it('doit empêcher l\'alternance', function() {
    var situation = {
      gouvernement: "parti socialiste"
    }
    
    immobilise(situation, 'gouvernement')
    
    should(function(){situation.gouvernement = "front national"}).throw()
    should(situation.gouvernement).eql("parti socialiste")
  });
});
