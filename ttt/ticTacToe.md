# Tic Tac Toe

[Here's][ruby-ttt] a link to the old instructions for Tic Tac Toe.

* Write a `Board` class in `ttt/board.js`.
    * There should be no UI in your `Board`, except maybe to
      `console.log` a representation of the grid.
* Write a `Game` class in `ttt/game.js`. You'll want to require your
  `ttt/board.js` file.
    * Write the `Game` constructor such that it takes a reader interface
      as an argument. As in the previous exercise, write a
      `#run` method that takes in both this reader and a completion callback (`#run(reader, completionCallback)`).
* Copy your `playScript.js` from [Hanoi Node][node-ttt]. It should work for Tic Tac Toe as well.

[ruby-ttt]: ruby_ttt.md
[node-ttt]: ../hanoi_node


#Tic Tac Toe

Let's write a Tic-Tac-Toe game!

* You should have a `Board` class and a `Game` class. The board should
  have methods like `#won?`, `winner`, `empty?(pos)`, `place_mark(pos,
  mark)`, etc.
* If you want to be a little fancy, [read this][bracket-methods].
* The `Game` class should have a `play` method that loops, reading in
  user moves. When the game is over, exit the loop.
* You should have a class that represents a human player
  (`HumanPlayer`), and another class for a computer player
  (`ComputerPlayer`). Start with the human player first.
* Both `HumanPlayer` and `ComputerPlayer` should have the same API;
  they should have the same set of public methods. This means they
  should be interchangeable.
    * Your `Game` class should be passed two player objects on
      instantiation; because both player classes have the same API,
      the game should not know nor care what kind of players it is
      given.
* Keep the computer AI simple: make a winning move if available; else
  move randomly.
