var BFS = (graph, source, target) => {

    // If the it's the same person - assume 0 relation 
    if (source.key === target.key || source.value === target.value) {       
      return 0;                
    }

    var queue = [ source ],
        predecessor = {  },
        tail = 0;

        source.hasVisited = true;
        
    while (tail < queue.length) {
        
      var u = queue[tail++], // Pop a vertex off the queue.
          neighbors = graph[u.key].neighbors;

      for (var i = 0; i < neighbors.length; ++i) {

        // Get the neighbor node from the graph
        var v = graph.find(e => e.value === neighbors[i])

        if (v.hasVisited) {             
          continue;
        }

        v.hasVisited = true;               // Mark node as visited

        if (v.value === target.value) {   // Check if the path is complete.
          var path = [ v ];               // If so, backtrack through the path.
          while (u !== source) {
            path.push(u);
            u = predecessor[u.key];          
          }
          path.push(u);

          // Return minimal level of relation (level = number of vertexes minus 1)
          return(path.length - 1); 
       
        }
        predecessor[v.key] = u;
        queue.push(v);
      }
    }

    return -1; // There is no relation between the persons
  }

module.exports = BFS;