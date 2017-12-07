// minesweeper

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    // for every column make array with number of rows
  }
  return arr;
}



var grid;
var cols;
var rows;
var w = 20;

function setup() {
  createCanvas(301,301);
  cols = floor(width/w);
  rows = floor(height/w);
  grid = make2DArray(20,20);
  for (var i = 0; i <cols; i++){
    for (var j = 0; j < rows; j++){
      grid[i][j] = new Cell(i, j, w);  //expand i and j by width number of pixels
    }
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++){
      grid[i][j].countBees;
    }
  }
}

function mousePressed() {
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].reveal();
      }
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }

}
