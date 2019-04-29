This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Mandatory Exercise 4 - Advanced JavaScript with React
The deadline for this exercise is Friday, April 26, 08:59.

For this mandatory exercise you should work on master branch only
.
## Preparation
1. Create a new repository on GitHub called mandatory-advanced-js4
2. Follow the instructions that GitHub gives you; Create a local repository and add a remote
or clone the newly created repository.
## Submission
When you submit the exercise in PingPong, before the deadline, you will enter a link to your
repository, such as:


[https://github.com/mygithubusername/mandatory-advanced-js4](https://github.com/mygithubusername/mandatory-advanced-js4)

The teacher will look in the master branch. If any commits are done to the branch after the
deadline, the teacher will look at the last commit before the deadline.

You will get one of the grades G or IG.

## Instructions
In this exercise you will create a Connect Four game using React. Connect Four is a game where
two players take turns dropping colored discs into a 7x6 grid.

You can find more information about the game and its rules on Wikipedia.
[https://en.wikipedia.org/wiki/Connect_Four](https://en.wikipedia.org/wiki/Connect_Four)

The game should be implemented in React and the players drop discs into the columns by clicking
on the grid. When a column is filled, it should not be possible to drop into that column again.

A player wins when four discs of the same color are connected (vertically, horizontally or
diagonally). It is important that the logic for checking the winner is implemented correctly.

When a player wins, the game should display a message and it should not be possible to continue
playing. If the game is a draw, the game should show a message.

A “reset” button should be displayed after the game is over.

# Requirements
- The game should be written using React
- The game should display a 7x6 grid of circles
- Dropping discs should be implemented correctly. It should not be possible to drop discs
into a full column
- The logic to check if a player won should be implemented correctly
- The game should display messages when a player wins or the game is drawn
- The game should display a “reset” button when the game is over
# Tips
- Start by implementing the grid and the logic for dropping discs. The logic for deciding the
winner can be implemented last
- Before implementing the logic to check who won, try creating an algorithm with pen and
paper before writing any code