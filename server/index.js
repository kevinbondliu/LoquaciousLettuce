'use strict';
const app = require('./app');
const db = require('../db');
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log('Tessel8 listening on port', PORT, 'at', timeFormat(new Date()));
}); 

let timeFormat = function(time) {

  var zeroes = function(number) {
    return (number < 10) ? '0' + number : number;
  };
  
  let hours = zeroes(time.getHours());
  let minutes = zeroes(time.getMinutes());
  let seconds = zeroes(time.getSeconds());
  let timeString = hours + ':' + minutes + ':' + seconds;

  return timeString;
};
