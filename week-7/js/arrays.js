const favoriteRepriles = ["Gecko", "Komodo Dragon", "Bearded Dragon"];

console.log(favoriteRepriles);
console.table(favoriteRepriles);

console.log("first thing:", favoriteRepriles[0]);

console.log("Idk:", favoriteRepriles[9]);

console.log("# of favorite reptiles", favoriteRepriles.length);

for (let i = 0; i < favoriteRepriles.length; i++) {
    const reptile = favoriteRepriles[i];
    console.log(reptile);
    
}

for (let i =  favoriteRepriles.length - 1; i > -1; i--) {
    console.log("")
    
}