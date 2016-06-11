function Hanoi(reader) {
  this.reader = reader;
  this.stacks = new Array([3,2,1],[],[]);
}

Hanoi.prototype.run = function () {
  this.print();
  if (this.isWon()) {
    console.log("Congratulations, you won the game!");
    this.reader.close();
  } else {
    this.promptMove(this.move.bind(this));
  }
};

Hanoi.prototype.promptMove = function(callback) {
  this.reader.question("Which tower would you like to move from? ", fromTower => {
    const startTowerIdx = parseInt(fromTower);

    this.reader.question("Which tower would you like to move to? ", toTower => {
      const endTowerIdx = parseInt(toTower);
      console.log(startTowerIdx, endTowerIdx);
      callback(startTowerIdx, endTowerIdx);
    })
  })
}

Hanoi.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  let startTower = this.stacks[startTowerIdx];
  let endTower = this.stacks[endTowerIdx];

  if (startTower.length === 0) {
    return false;
  }
  let disk = startTower[startTower.length-1];
  return (endTower.length === 0 || disk < endTower[endTower.length-1]);
}

Hanoi.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    let startTower = this.stacks[startTowerIdx];
    let endTower = this.stacks[endTowerIdx];
    let disk = startTower.pop();
    endTower.push(disk);
    console.log('moved tower')
  } else {
    console.log('did not move tower')
  }
  this.run();
}

Hanoi.prototype.print = function () {
  console.log(JSON.stringify(this.stacks))
}

Hanoi.prototype.isWon = function() {
  const firstTower = this.stacks[0]
  if (firstTower.length > 0) {
    return false
  } else {
    return this.stacks[1].length === 0 || this.stacks[2].length === 0;
  }
}

module.exports = Hanoi;
