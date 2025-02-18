let numOfTilesPerSide = 16;
const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-grid-btn");
const clearBtn = document.querySelector("#clear-grid-btn")
const containerSize = container.offsetHeight;


resizeBtn.addEventListener("click", () => {
  let newNumOfTiles = prompt("Please Enter The New Number Of Tiles Per Side (1-100) only");
  if(isNaN(newNumOfTiles)) {
    return;
  }
  
  newNumOfTiles = parseInt(newNumOfTiles);
  
  if(Number.isInteger(newNumOfTiles) == false) {
    return;
  }

  if (newNumOfTiles >= 0 && newNumOfTiles <= 100) {
    numOfTilesPerSide = newNumOfTiles;
  }


  while(container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  populateContainer();
})

clearBtn.addEventListener("click", () => {
  while(container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  populateContainer();
})

function populateContainer() {
  if (numOfTilesPerSide > 100 || numOfTilesPerSide < 0) {
    return;
  }
  const tileSize = Math.floor((containerSize/numOfTilesPerSide) - 0.5);
  
  for (let i = 0; i < numOfTilesPerSide**2; i++){
    const tile = document.createElement("div");
    tile.style.height = `${tileSize}px`;
    tile.style.width = `${tileSize}px`;

    tile.addEventListener("mouseover", () => {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let backgroundColorValue = `rgb(${red},${green},${blue})`;
      tile.style.backgroundColor = backgroundColorValue;
    });
    container.appendChild(tile);
    
  }
}

populateContainer();
