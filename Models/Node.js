class Node{
    constructor(key, value, neighbors, hasVisited){
        this.key = key,
        this.value = value,
        this.neighbors = neighbors,
        this.hasVisited = hasVisited
    }
}

module.exports = Node;