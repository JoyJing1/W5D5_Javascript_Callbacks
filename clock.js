function Clock () {
  // 1. Create a Date object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
  let now = new Date();
  this.hours = now.getHours();
  this.minutes = now.getMinutes();
  this.seconds = now.getSeconds();
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  // Use console.log to print it.
  console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  // 2. Call printTime.
  this.seconds += 1;
  if (this.seconds >= 60) {
    this.seconds = this.seconds % 60;
    this.minutes += 1;
    if (this.minutes >= 60) {
      this.minutes = this.minutes % 60;
      this.hours += 1;
      if (this.hours >= 24) {
        this.hours = this.hours % 24;
      }
    }
  }
  this.printTime();
};

const clock = new Clock();
const addSec = function () { setTimeout(clock._tick.bind(clock), 1000) };
setInterval(addSec, 1000);
