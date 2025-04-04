const { log } = require("console");
const path=require("path");

console.log("Directory name :",path.dirname(__filename));


console.log("file name",path.basename(__filename));

console.log();

console.log("file extention",path.extname(__filename));


const joinpath=path.join("/user","document","node","projects");
console.log("join path ",joinpath);

const resolvePath=path.resolve('user','document','node','projects');

console.log("Resolve path:",resolvePath);


const normalizepath=path.normalize('user/.document/../node/projects');

console.log("Normalizepath",normalizepath);
