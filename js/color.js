var updateClockColor = function( ){
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  currentMinutes = hexToColor(currentMinutes);
  currentSeconds = hexToColor(currentSeconds);
  currentHours = hexToColor(currentHours);

  var currentColorString = "#" + currentHours + currentMinutes + currentSeconds;
  clock.innerHTML = currentColorString;

  var hexColor = clock.innerHTML;
  document.body.style.backgroundColor = hexColor; 
}

function hexToColor(number)
{
  number = parseInt(number);
  number = number.toString(16);
  number = number.length == 1 ? '0' + number : number;
  return number;
}

