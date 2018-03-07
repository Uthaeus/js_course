
const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

// assigns elements in order to variables
const [posts, repos, profile] = apiList;

console.log(posts); // => 'https://api.dailysmarty.com/posts'
console.log(repos); // => 'https://api.github.com/users/jordanhudgens/repos'
console.log(profiles); // => 'https://api.github.com/users/jordanhudgens'