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

### Tile Fall Condition

A tile will fall if its adjacent supports have been removed. As such, the chosen tile will check if its diagonally-adjacent tile has fallen, thereafter remove its adjacent tiles. for this example, if player chooses tile 2, and it checks tile 1 had already fallen, tile 3 and 4 will fall

![tile1](.\tile1.png) ![tile2](.\tile2.png) ![tile3](.\tile3.png)

The code is:
`for (let i = 0; i < tileElements.length; i++) {
        if (tileElements[i].classList.contains("fell")) {
        if (T_LEFT.indexOf(i) >= 0) {
            if (tileElements[i - 7].classList.contains("fell")) {
            tileElements[i - 6].classList.add("fell");
            tileElements[i - 1].classList.add("fell");
            }}}}`
where T_LEFT is an array of tile indexes that would be required to check their top left tile.

This is replicated for top right, bottom left and bottom right.

### Penguin Fall Condition

The penguin will fall when full supports on adjacent sides of it have been removed. The minimum support can be from top/bottom or left/right.

![peng1](.\peng.png) ![peng2](.\peng2.png)

The index pairs of the tiles for minimum support are put into an array. A function checks each pair if any have fallen and returns `true` if every pair has at least one fallen tile. when `true`, penguin will fall.

The code is:
`function checkPengFall() {
  return FALL_CRITERIA.every((combination) => {
    return combination.some((index) => {
      return tileElements[index].classList.contains("fell");
    });
  });
}`

## Wireframe

## Unsolved problems/major hurdle
