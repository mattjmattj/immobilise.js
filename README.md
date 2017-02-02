# immobilise.js

## pourquoi ?
Les partisans de François FIllon nous l'ont expliqué : ["Les tenants de l'immobilise veulent empêcher l'alternance politique. #StopChasseàLHomme"](https://twitter.com/search?f=tweets&vertical=default&q=tenants%20de%20l%27immobilise&src=typd)

Tu veux mettre dire stop à la chasse à l'homme dans tes objets javascript ?
Tu te reconnais plutôt parmi les tenants de l'immobilise ? immobilise.js est fait pour toi.

## exemple

La situation politique est décrite ainsi:

```javascript
const situation = {
    gouvernement: "parti socialiste"
}
```

Normalement, on devrait pouvoir faire

```javascript
situation.gouvernement = "républicains"
```

Mais grâce à immobilise.js, les tenants de l'immobilise peuvent empêcher l'alternance:

```javascript
import * from 'immobilise'

const situation = {
    gouvernement: "parti socialiste"
}

immobilise(situation, 'gouvernement')

situation.gouvernement = "front national"
// >> TypeError !

console.log(situation.gouvernement)
// >> "parti socialiste"

```

Bien sûr, on peut à tout moment dire stop à la chasse à l'homme

```javascript
stopALaChasseALHomme(situation, "gouvernement")

situation.gouvernement = "Matthias président !"

console.log(situation.gouvernement)
// >> "Matthias président !"

```

Lire "specs/" pour quelques détails.