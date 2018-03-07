
class Instructor {
  constructor({ name }) {
    this.name = name;
  }
}

// Instantiation
const jon = new Instructor({ name: 'Jon Snow'});
console.log(jon);
// Object {
//    name: "Jon Snow"
//  }
console.log(jon.name); // => Jon Snow