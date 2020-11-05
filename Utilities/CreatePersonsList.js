const Address = require('../Models/index').Address;
const Name = require('../Models/index').Name;
const Person = require('../Models/index').Person;

let name1 = new Name("Anil", "Alon");
let name2 = new  Name("Daniel", "Cohen");
let name3 = new  Name("Ron", "Cohen");
let name4 = new  Name("Roni", "Cohen");
let address1 = new Address("Bugrashov", "Tel Aviv");
let address2 = new Address("Derech Eylot", " Ganey Tikva");
let address3 = new Address("Dizingoff", "Tel Aviv");

let person1 = new Person(name1.fullName(), address1);
let person2 = new Person(name1.fullName(), address2 );
let person3 = new Person(name2.fullName(), address1);
let person4 = new Person(name3.fullName(), address1);
let person5 = new Person(name3.fullName(), address2);
let person6 = new Person(name4.fullName(), address3);

let persons = [person1, person2, person3, person4, person5, person6];

module.exports = persons;
