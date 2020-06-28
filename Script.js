// Creates an Etch-A-Sketch grid
document.getElementById("CTA-Button").onclick = function () {
  var gridSize = getUserInput();
  if (gridSize < 0 || gridSize > 100) {
    alert("Grid Size must be greater than 0 and less than 100!");
  } else {
    var gridColor = document.querySelector("#colors");
    var color = gridColor.options[gridColor.selectedIndex].text;

    for (x = 1; x <= gridSize; x++) {
      for (y = 1; y <= gridSize; y++) {
        const grid = document.querySelector(".main-container");

        const newSquare = document.createElement("div");
        newSquare.style.cssText =
          "background-color: " + color + "; margin: 0.5px; opacity: 0.1;";
        newSquare.classList.add("block");

        grid.append(newSquare);
      }
    }

    document.querySelectorAll(".block").forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.style.opacity = parseFloat(item.style.opacity) + 0.2;
      });
    });
  }
};

// Uses user input to set grid size and arrange elements on the screen
function getUserInput() {
  var input = document.getElementById("grid-size").value - 1;
  var container = document.querySelector(".main-container");
  var blockSize = 960 / input;

  container.style.gridTemplateColumns =
    "repeat(" + input + ", " + blockSize + "px)";
  container.style.gridTemplateRows =
    "repeat(" + input + ", " + blockSize + "px)";

  return input;
}
