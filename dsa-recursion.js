//Counting Sheep

const countSheep = function(n) {
  if (n === 0) {
    return 'All Sheep jumped over the fence';
  } else {
    return `${n}: Another sheep jump over the fence` + '\n' + countSheep(n - 1);
  }
};

// console.log(countSheep(3));

//Power Calculator

function powerCalculator(base, exp) {
  if (exp === 0) {
    return 1;
  }
  //negative
  else if (exp < 0) {
    return 'exponent should be >= 0';
  }
  //positive
  else {
    return base * powerCalculator(base, exp - 1);
  }
}

// console.log(powerCalculator(10, 2));
// console.log(powerCalculator(10, -2));

//Reverse String
function reverseString(string) {
  if (string.length === 0) {
    return '';
  } else {
    return (
      string[string.length - 1] +
      reverseString(string.slice(0, string.length - 1))
    );
  }
}

// console.log(reverseString('racecar'))

//nth Triangular Number

function nthTriangle(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + nthTriangle(n - 1);
  }
}

// console.log(nthTriangle(4));

//String Splitter

function stringSplitter(string, separator) {
  //base case
  if (string.length === 0) {
    return '';
  } else if (string[0] === separator) {
    return stringSplitter(string.slice(1), separator);
  } else {
    return string[0] + stringSplitter(string.slice(1), separator);
  }
}

// console.log(stringSplitter('02/20/2020', '/'));
// console.log(stringSplitter('12:00 PM, April 1, 2019', ','));

function fibonacci(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(11));

//Factorial

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log(factorial(5));

//Maze

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeRunner(
  maze,
  position = 0,
  x = 0,
  y = 0,
  direction = 'S',
  path = []
) {
  if (y < 0 || x < 0) {
    return;
  }
  if (y >= maze[0].length || x >= maze.length) {
    return;
  }
  path[position] = direction;
  position++;

  if (maze[x][y] === 'e') {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (maze[x][y] === ' ') {
    // The current cell is free. Mark it as visited
    maze[x][y] = 's';
    // Invoke recursion to explore all possible directions
    mazeRunner(maze, position, x, y - 1, 'L', path); // left
    mazeRunner(maze, position, x - 1, y, 'U', path); // up
    mazeRunner(maze, position, x, y + 1, 'R', path); // right
    mazeRunner(maze, position, x + 1, y, 'D', path); // down
  }
  // Remove the last direction from the path
  position--;
}
const PrintPath = function(path, startPos, endPos) {
  console.log('Found path to the exit: ');
  console.log(path);
};

console.log(mazeRunner(maze), maze);

//All ways out of the Maze

function mazeRunnerAll(
  maze,
  position = 0,
  x = 0,
  y = 0,
  direction = 'S',
  path = []
) {
  if (y < 0 || x < 0) {
    return;
  }
  if (y >= maze[0].length || x >= maze.length) {
    return;
  }
  path[position] = direction;
  position++;

  if (maze[x][y] === 'e') {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (maze[x][y] === ' ') {
    // The current cell is free. Mark it as visited
    maze[x][y] = 's';
    // Invoke recursion to explore all possible directions
    mazeRunnerAll(maze, position, x, y - 1, 'L', path); // left
    mazeRunnerAll(maze, position, x - 1, y, 'U', path); // up
    mazeRunnerAll(maze, position, x, y + 1, 'R', path); // right
    mazeRunnerAll(maze, position, x + 1, y, 'D', path); // down
    //remarks current position as unvisited so we can check back for all exits
    maze[x][y] = ' ';
  }
  // Remove the last direction from the path
  position--;
}

// console.log(mazeRunnerAll(maze));

//Anagrams

function anagrams(word) {
  const anagramList = [];
  if (word.length === 1) {
    anagramList.push(word[0]);
    return anagramList;
  }
  for (let i = 0; i < word.length; i++) {
    let prefix = word[i];
    let otherChars = word.substring(0, i) + word.substring(i + 1);
    let permutations = anagrams(otherChars);
    for (let j = 0; j < permutations.length; j++) {
      anagramList.push(prefix + permutations[j]);
    }
  }
  return anagramList;
}

// console.log(anagrams("east"));

//Organization Chart

const facebook = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

function orgChart(org, indent = 0) {
  for (var key in org) {
    console.log(' '.repeat(indent), key);
    orgChart(org[key], indent + 4);
  }
}

// console.log(orgChart(facebook));

//Binary Representation

function binaryRep(n) {
  if (n === 0) {
    return '0';
  }
  if (n === 1) {
    return '1';
  }
  if (n % 2 === 0) {
    return binaryRep(n / 2) + '0';
  } else {
    return binaryRep((n - 1) / 2) + '1';
  }
}

// console.log(binaryRep(3));
// console.log(binaryRep(25));
