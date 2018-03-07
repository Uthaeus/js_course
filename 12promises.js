// Twitter > Posts
// Show page
// Show posts

let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello...')
  }, 2000);

  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

sleepyGreeting
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
    // => .then is an expected function of a promise and mapped to resolve
    // => .catch is also expected and mapped to reject


