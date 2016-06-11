function Board() {
  this.grid = new Array(new Array(3), new Array(3), new Array(3));
}

Board.prototype.empty = function (pos) {
  return this.grid[pos[0]][pos[1]] === undefined;
};

Board.prototype.placeMark = function (pos, mark) {
  this.grid[pos[0]][pos[1]] = mark;
};

Board.prototype.won = function () {
  let didWin = false
  this.grid.forEach( row => {
    if (checkSet(row)) {
      console.log(row);
      didWin = true;
    }
  })

  for(let i = 0; i < 3; i++) {
    let col = [];
    for(let j = 0; j < 3; j++) {
      col.push(this.grid[j][i]);
    }
    if (checkSet(col)) {
      didWin = true;
    }
  }

  const leftDiag = [this.grid[0][0], this.grid[1][1], this.grid[2][2]]
  const rightDiag = [this.grid[0][2], this.grid[1][1], this.grid[2][0]]

  if (checkSet(leftDiag)) {
    didWin = true;
  } else if (checkSet(rightDiag)) {
    didWin = true;
  }
  return didWin;
};

function checkSet(arr) {
  return arr[0] !== undefined &&
    arr[0] === arr[1] &&
    arr[0] === arr[2];
}

Board.prototype.winner = function () {
};

// const x = 'x';
// const o = 'o';
//
// const b0 = new Board();
// console.log(b0.empty([0,0]));
// b0.placeMark([0,0], x);
// console.log(b0.grid);
// console.log(b0.won());
//
// const b1 = new Board();
// b1.grid = [[x,x,x], [,,], [,,]];
// console.log(b1.won());
//
// const b2 = new Board();
// b2.grid = [[x,,], [x,,], [x,,]];
// console.log(b2.won());
//
// const b3 = new Board();
// b3.grid = [[o,,], [,o,], [,,o]];
// console.log(b3.won());
//
// const b4 = new Board();
// b4.grid = [[,,o], [,o,], [o,,]];
// console.log(b4.won());
