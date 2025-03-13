const startButton = document.querySelector("#startButton");
const storySection = document.querySelector("#story");

let playerChoice = "";

function startAdventure() {
  // Confirm before starting the adventure
  if (window.confirm("Are you sure you want to start your adventure?")) {
    storySection.innerHTML = 
      `<p>You are a brave knight embarking on a dangerous quest in search of a hidden treasure. 
      In front of you lies a dark forest. Do you want to enter?</p>
      <button id="enterForest">Enter the Forest</button>
      <button id="stayHome">Stay at Home</button>`;

    document.getElementById("enterForest").addEventListener("click", enterForest);
    document.getElementById("stayHome").addEventListener("click", stayHome);
  }
}

function enterForest() {
  // Confirm before entering the forest
  if (window.confirm("Are you sure you want to enter the forest?")) {
    storySection.innerHTML = 
      `<p>You venture deep into the forest and come across a fork in the path. Do you go left or right?</p>
      <button id="goLeft">Go Left</button>
      <button id="goRight">Go Right</button>`;
    
    document.getElementById("goLeft").addEventListener("click", goLeft);
    document.getElementById("goRight").addEventListener("click", goRight);
  }
}

function stayHome() {
  storySection.innerHTML = 
    `<p>You decide it's too dangerous and stay home. The (boring) end. :/ </p>`;
  
  
}

function goLeft() {
  storySection.innerHTML = 
    `<p>You find a hidden cave. Inside, you discover the treasure! Congratulations, you've won! :)</p>`;
  
  
}

function goRight() {
  storySection.innerHTML = 
    `<p>You are attacked by a wild animal! Unfortunately, your journey ends here. Try again! :(</p>`;
  
  
}

startButton.addEventListener("click", startAdventure);
