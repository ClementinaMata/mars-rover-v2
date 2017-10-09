// Rover Object Goes Here
var rover = new Object (); {
rover.direction='N';
rover.x = 0;
rover.y = 0;
}
// directions= ["N","S","E","W"];
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case 'N':
        rover.direction = 'W';
        break;
    case 'W':
        rover.direction = 'S';
        break;
    case 'S':
        rover.direction = 'E';
        break;
    case 'E':
        rover.direction = 'N';
        break;
    default:
        rover.direction = 'N';
        break;
  }
  console.log("direction: " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case 'N':
        rover.direction = 'E';
        break;
    case 'E':
        rover.direction = 'S';
        break;
    case 'S':
        rover.direction = 'W';
        break;
    case 'W':
        rover.direction = 'N';
        break;
    default:
        rover.direction = 'N';
        break;
  }
  console.log("direction = " + rover.direction);
}

var board = [
  [rover, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


  for (var i = 0; i < board.length; i++){
    var row = board[i];
  for (var j = 0; j < row.length; j++){
    var column = row[j];
    if (column === rover){
      console.log("Rover’s coordinates: " + i + ", " + j);
    }
  }
}

function executeCommands (commands, rover) {
  for (var i=0; i<commands.lengh; i++){
    if (commands[i]=='r'){
      turnRight(rover);
    }
    else if(commands[i] == 'l'){
      turnLeft(rover);
    }
    else if(commands[i] == 'f'){
      moveForward(rover);
    }
    else if (commands [i] == 'b'){
      moveBackwards(rover);
    }
    else{
      console.log("command not exist");
    }
  }
}

var commands = "rffrfflfrff";
executeCommands(commands, rover);

function checkLimits () {
    if(rover.y <= -1){
      rover.y = 0;
    }
    if(rover.x <= -1){
      rover.x = 0;
    }
    if(rover.y == 10){
      rover.y = 9;
    }
    if(rover.x == 10){
      rover.x = 9;
    }
  }
