# Project 1 - Don't Break the Ice

## Overview

Don't Break the Ice is a turn-based game based on the real-life game with the exact name produced by Hasbro. The premise is simple - two players take turns to tap on the ice and the player who drops the penguin loses. The penguin's position will be fixed at the centre.

<!-- However, this game would not replicate the element of physics that would apply in the real-life game (friction between tiles, force of player taps, etc.) -->

## Technologies used

<p>HTML, CSS, Javascript</p>

## General Approach

The general idea is to utilize an array, designed into a 6x6 grid using css, to manipulate each tile. Players will take turns to click on one of the tiles to make it 'fall', which triggers a DOM manipulation of the tile. The penguin will take up a 2x2 grid at the centre.

The game will then check the two 'fall conditions' - firstly for the chosen tile and its adjacent tiles, then for the penguin's surrounding tiles. If the penguin's fall condition is not met, player turn will be swapped and the game continues. If the penguin's fall condition is met, the result screen will be displayed.

The game also has a toggle function to keep track of each player's choices.

## Unsolved problems/major hurdle

The ripple effect for the tiles does not extend further at times. Due to the size of the board, this is not very apparent but it will be if the board gets bigger. This may be solved by designing the array for tiles to be 2D or using a recursive function, but not yet explored.
