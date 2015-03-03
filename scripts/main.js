/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';
var Elo = require('./arpad2');

var elo = new Elo();

var alice = 1600;
var bob = 1300;
var elo = new Elo();
;
//elo.new_bob();
//var new_alice = elo.newRatingIfWon(alice, bob);
//console.log("Alice's new rating if she won:", new_alice); // 1605
elo.new_alice()
//var new_bob = elo.newRatingIfWon(bob, alice);
//console.log("Bob's new rating if he won:", new_bob); // 1327

//var App = require('./app.js');

//var app = new App();

//app.beep();