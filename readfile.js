var fs = require('fs');

fs.readFile('meaning_of_life.txt', 'utf-8', function(err, data) {
  console.log(data);
});

console.log('end');
