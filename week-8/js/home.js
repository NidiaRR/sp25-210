//Reference Variables
const petsUlRef = document.querySelector("#pets")

//Data Variables
const pets = ["Cat", "Dog", "Fox", "Mouse", "Snake", "Fish", "Bird"];

console.table(pets);

//Loop through our list
for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    console.log(pet);

    petsUlRef.innerHTML += "<li>" + pet + "</li>";
}