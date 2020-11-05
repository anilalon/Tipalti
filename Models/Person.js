class Person {
    constructor(name, address){
    this.Fullname = name;
    this.Address = address; 
  }

  set newName(newName){
    this.Fullname  = newName;
   }

  set newAddress(newAddress){
    this.Address = newAddress;
  }

  get fullname(){
    return this.Fullname;
  }

  get address(){
    return this.Address;
  }
}

  // export the class
  module.exports = Person;

