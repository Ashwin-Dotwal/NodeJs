const lodash=require('lodash');

const names=['ashwin','john','terry','mai'];

const capitalize=lodash.map(names,lodash.capitalize);

console.log(capitalize);
