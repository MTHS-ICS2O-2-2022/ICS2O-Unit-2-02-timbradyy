// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: Feb 2023
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("multiply-math").innerHTML = "<p>The area is:  " + (5 * 3) + "cm²</p>"
  document.getElementById("add-math").innerHTML = "<p>The perimeter is: " + 2*(5+3) + "cm</p>"  
}
