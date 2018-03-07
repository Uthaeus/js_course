class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }

  static helloWorld() {
    console.log('Hi there');
  }

  static canTeach(instructor) {
    return (instructor.role === 'classroom');
  }
}

Instructor.helloWorld(); // => Hi there

let jon = new Instructor({ 'name': 'Jon'});
jon.helloWorld(); // => will not work
                  // => Static methods must be called on the class itself

let jon = new Instructor({ 'name': 'Jon'});
console.log(
  `${jon.name} can teach: ${Instructor.canTeach(jon)}`
); // => Jon can teach: false

let alice = new Instructor({ 'name': 'Alice', 'role': 'classroom'});
console.log(
  `${alice.name} can teach: ${Instructor.canTeach(alice)}`
); // => Alice can teach: true