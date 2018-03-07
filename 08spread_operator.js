
// Syntax => ...word

// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 124];

shoppingCart.push(newItems);
console.log(shoppingCart); // => [345, 375, 765, 123, [98, 124]]

// Using the spread operator
shoppingCart.push(...newItems);
console.log(shoppingCart); // => [345, 375, 765, 123, 98, 124]


// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = shoppingCart;
updatedCart.push(5);
console.log(updatedCart); // => [345, 375, 765, 123, 5]
console.log(shoppingCart); // => [345, 375, 765, 123, 5]
  // => changed the shoppingCart variable as well

const shoppingCart = [345, 375, 765, 123];
const updatedCart = shoppingCart.slice();
updatedCart.push(5);
console.log(updatedCart); // => [345, 375, 765, 123, 5]
console.log(shoppingCart); // => [345, 375, 765, 123]
  // => Using slice() did not change the shoppingCart variable

const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart); // => [345, 375, 765, 123, 5]
console.log(shoppingCart); // => [345, 375, 765, 123]
  // => Using the spread operator more cleanly gives us the result we want


console.log(Math.max(1, 5, 1, 10, 2, 3)); // => 10

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(orderTotals)); // => NaN

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals)); // => 10

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3] => 1, 5, 1, 10, 2, 3

const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter); // => Verlander
console.log(closer); // => Giles
console.log(relievers); // => Object {
                        //      relief_1: "Morton",
                        //      relief_2: "Gregerson"   
                        //    }










