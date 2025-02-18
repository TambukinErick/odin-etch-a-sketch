let numOfTilesPerSide = 16;
const container = document.querySelector("#container");

const containerSize = container.offsetHeight;
console.log(containerSize);
function populateContainer(numOfTilesPerSide) {
  if (numOfTilesPerSide > 100 || numOfTilesPerSide < 0) {
    return;
  }

  const tileSize = Math.floor(
    containerSize/numOfTilesPerSide
  ) - 1;
  console.log(tileSize);
  
  for (let i = 0; i < numOfTilesPerSide**2; i++){
    const tile = document.createElement("div");
    tile.style.height = `${tileSize}px`;
    tile.style.width = `${tileSize}px`;
    tile.style.borderStyle = "solid";
    tile.style.borderColor = "black";
    tile.style.borderWidth = "1px";
    container.appendChild(tile);
  }
}

populateContainer(numOfTilesPerSide);
