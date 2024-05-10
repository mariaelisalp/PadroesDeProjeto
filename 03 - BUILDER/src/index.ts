import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./director/Director";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Preparando Sanduiche...");
console.log("Tipo: " + hotdog.sanduicheType);
console.log("Proteina: " + hotdog.protein);
console.log("Salada: " + hotdog.salad);
console.log("Pao: " + hotdog.bread);
console.log("Molhos:\n ");
hotdog.sauce.forEach(function (value) {
    console.log(value);
});
console.log();

director.constructXsalada();
const xSalada : Sanduiche = builder.getSanduiche();
console.log("Preparando Sanduiche...");
console.log("Tipo: " + xSalada.sanduicheType);
console.log("Proteina: " + xSalada.protein);
console.log("Salada: " + xSalada.salad);
console.log("Pao: " + xSalada.bread);
console.log("Molhos:\n ");
xSalada.sauce.forEach(function (value) {
    console.log(value);
});
console.log();

console.log();