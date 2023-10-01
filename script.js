const container = document.querySelector(".container");

let size = 16;

const makeGrid = (sz) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < sz; i++) {
    for (let j = 0; j < sz; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "black";
      });
      grid.style.width = `calc(1/${sz} * 100%)`;
      container.appendChild(grid);
    }
  }
};

makeGrid(size);

const changeBtn = document.querySelector(".changeBtn");
changeBtn.addEventListener("click", () => {
  size = Math.min(+prompt("New Grid size, Max is 100", 16), 100);
  makeGrid(size);
});

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
  for (const child of container.children) {
    child.style.backgroundColor = "";
  }
});
