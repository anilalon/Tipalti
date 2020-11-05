
class Address {
    constructor(street, city){
    this.Street = street;
    this.City = city; 
  }

  set newstreet(newStreet){
    this.Street = newStreet;
  }

  set newcity(newCity){
    this.City = newCity;
  }

  get city(){
    return  this.city;
  }

  get street(){
    return this.Street;
  }
}

  module.exports = Address;

  


