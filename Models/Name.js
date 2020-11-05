class Name {
    constructor(first, last){
    this.FirstName = first;
    this.LastName = last;
    }

  set first(newFirst){
    this.FirstName = newFirst;
    }

  set last(newLast){
    this.LastName = newLast;
    }

  get first(){
    return(this.FirstName)
    }

  get last(){
    return(this.LastName)
    }
  }
  
Name.prototype.fullName = function() {
    return this.FirstName + " " + this.LastName;
  };

  module.exports = Name;

