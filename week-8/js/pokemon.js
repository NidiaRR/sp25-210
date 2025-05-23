console.log("Pokemon");

function showAlert() {
    alert("Annoying Message");
}

const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm() {
    const userConfirmed = confirm("You are a robot, right?");

    console.log(userConfirmed);
}


confirmBtnRef.onclick = showConfirm;


function showPrompt() {
    const userInput = prompt (
        "What's your favorite flavor of ice cream?", "Vanilla"
    );

    console.log(userInput);
}

//code for pokemon journey

const journeyRef = document.querySelector("#journey");

function startJourney() {
    journeyRef.innerHTML = 
    "<p>You are so excited, today you get your first pokemon! Sitting in front of you are pokeballs for Bublbasaur, Charmander, Squirtle. Choose your pokemon.</p>";

    const starterPokemon = [
        {
        name: "Bulbasaur", 
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    },
        {
        name: "Charmander", 
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
    },
        {
        name:"Squirtle",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    },
    ];

    for (let i = 0; i < starterPokemon.length; i++) {
        const pokemon = starterPokemon[i];

        const newSection = document.createElement("section");

        newSection.innerHTML +="<img height='100' src='" + pokemon.img + "'alt='" + pokemon.name + "'/>"; 
        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.dataset.pokemonName = pokemon.name;
        newSection.dataset.pokemonimage = pokemon.img;
        newSection.onclick = choosePokemon;

        newSection.onclick = choosePokemon;

        journeyRef.appendChild(newSection);
        console.log(pokemon);
        
    }

 
}

function choosePokemon(e) {
    console.log(e.currentTarget);
    const pokemonName = e.currentTarget.dataset.pokemonName
    const pokemonImg = e.currentTarget.dataset.pokemonImg

    const confirmChoice = confirm("you chose" + pokemonName);

    if (confirmChoice) {
        journeyRef.innerHTML +=
        "you chose" + pokemonName + "as your starter pokemon.";

        myPokemon = { name: pokemonName, img: pokemonImg};
    }
}