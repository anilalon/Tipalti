const initPersons = require('./Init');
const BFS = require('../Algos/BFS');

class Graph{
    constructor(){
        this.graph = [];
    }

    get(){
    return this.graph;
    }

    init(persons){
    this.graph = initPersons(persons);
    }  
        
    findMinRelationLevel(personA, personB){
    let source = this.graph.find(s => s.value === personA); 
    let target = this.graph.find(t => t.value === personB); 
    return( BFS(this.graph, source ,target ));
    }

    clearGraph(){
        this.graph.forEach(node => {
            node.hasVisited = false;
        });
    }
}

module.exports = Graph;