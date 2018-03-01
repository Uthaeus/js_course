// Using functions in object deconstruction

const user = {
  name: 'Kristine',
  email: 'kristine@devcamp.com'
}

// must use same variable names for mapping
const renderUser = ({ name, email}) => {
  console.log(`${name}: ${email}`);
}

renderUser(user); // => "Kristine: kristine@devcamp.com"