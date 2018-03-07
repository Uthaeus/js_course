
class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
}

const jon = new Instructor({name: 'Jon Snow'});
const brayden = new Instructor({name: 'Brayden', role: 'teacher'});

jon.renderDetails(); // => Jon Snow: assistant --> uses default role
brayden.renderDetails(); // => Brayden: teacher