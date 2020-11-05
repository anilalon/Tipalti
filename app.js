const persons = require('./Utilities/CreatePersonsList');
const Utility = require('./Utilities/Utility');

// Create and init the main persons graph\utility
var graph = new Utility();
graph.init(persons); // initiallize graph

// Check relation --> -1 (No realtion)
console.log("Level of relation = " + 
graph.findMinRelationLevel(persons[0], persons[5]));
graph.clearGraph();

// Check relation --> level 0 (assumed zero relation for same person case)
console.log("Level of relation = "  + 
graph.findMinRelationLevel(persons[0], persons[0]));
graph.clearGraph();

// Check relation --> level 1
console.log("Level of relation = " + 
graph.findMinRelationLevel(persons[0], persons[1]));
graph.clearGraph();

// Check relation --> level 2
console.log("Level of relation = "  
+ graph.findMinRelationLevel(persons[0], persons[4]));
graph.clearGraph();







