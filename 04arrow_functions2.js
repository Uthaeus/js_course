// function Invoice() {
//   this.taxRate = 0.06;
//   this.subTotal = subTotal;

//   this.total = setInterval(function totalNumbers() {
//     console.log((this.taxRate * this.subTotal) + this.subTotal)
//   }, 2000);
// }

// const inv = new Invoice(200);

// => will throw an error
//console.log(inv.taxRate);

function Invoice() {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {
    console.log((this.taxRate * this.subTotal) + this.subTotal)
  }, 2000);
}

const inv = new Invoice(200);

//arrow function here solved the bug with this and setInterval