const Node = require('../Models/index').Node;

// Initialze tree graph structure with nodes
var init = (persons) => {
  var  personsTree = persons.map((person, index) => {
    var node = new Node(index, person, [], false);
    return(
      node
  )})

 for(let personNodeIndex = 0; personNodeIndex < personsTree.length; personNodeIndex++){
 
    // Fill neighbors - if name or\and address are eqal (and the person is not the same person)  
    personsTree[personNodeIndex].neighbors = persons.filter((curr, i)=> { 
   if((curr.Fullname === personsTree[personNodeIndex].value.Fullname || 
   ( curr.Address.City === personsTree[personNodeIndex].value.Address.City  )
   &&  curr.address.Street === personsTree[personNodeIndex].value.Address.Street ) &&
   personNodeIndex !== i ){
     return true;
        }})
    }

    return personsTree;
}
module.exports = init;
