/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack McNulty
 * Created on: Oct 2025
 * This program gets the distance from a sensor
*/

//Variables
let distanceToObject: number = 0

//Setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//Getting distance
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
)
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})
