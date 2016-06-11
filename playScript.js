const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const hanoiGame = require("./hanoiGame.js")
const game = new hanoiGame(reader);

game.run();
