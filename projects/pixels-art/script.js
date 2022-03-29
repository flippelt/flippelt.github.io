const colorPallete = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');

function createColors() {
  const avaliableColors = [
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
  ];
  for (let i = 0; i < avaliableColors.length; i += 1) {
    const color = document.createElement('div');
    const classes = ['color', avaliableColors[i]];
    color.classList.add(...classes);
    if (color.classList.contains('#000000')) {
      color.classList.add('selected');
    }
    color.style.backgroundColor = avaliableColors[i];
    colorPallete.appendChild(color);
  }
}
createColors();

function createPixels() {
  // TODO Board size...
  // Populate Board
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = '#FFFFFF';
    pixel.style.border = '1px solid #000000';
    pixel.style.height = '40px';
    pixel.style.width = '40px';
    board.appendChild(pixel);
  }
}
createPixels();

function removeSelected() {
  for (let i = 0; i < colorPallete.children.length; i += 1) {
    if (colorPallete.children[i].classList.contains('selected')) {
      colorPallete.children[i].classList.remove('selected');
    }
  }
}

function pickColor(event) {
  const selectColor = event.target;
  if (selectColor.classList.contains('color')) {
    removeSelected();
    selectColor.classList.add('selected');
  }
}

colorPallete.addEventListener('click', pickColor);

function paint(event) {
  const paintPixel = event.target.style;
  for (let i = 0; i < colorPallete.children.length; i += 1) {
    if (colorPallete.children[i].classList.contains('selected')) {
      paintPixel.backgroundColor = colorPallete.children[i].style.backgroundColor;
    }
  }
}

board.addEventListener('click', paint);

function clearBoard() {
  for (let i = 0; i < board.children.length; i += 1) {
    board.children[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);
