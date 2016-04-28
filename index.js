'use strict';

class Stopwatch {
  constructor(name) {
    var now = Date.now();
    this.startTime = now;
    this.lastTime = now;
    this.step = 0;
    this.name = name;
  }

  split(name) {
    var now = Date.now();
    var cumulative = now - this.startTime;
    var delta = now - this.lastTime;
    this.lastTime = now;
    this.step++;
    console.log('\u001b[33m' + this.name + '\u001b[39m' + ': ' + this.step + ". " + name, cumulative + "ms ", delta + "ms");
  }

}

module.exports = function stopwatch(name) {
  return new Stopwatch(name);
}
