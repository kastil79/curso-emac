// ---------- OBJECTS ----------
// You create object literals like this
function createAnimal(name, owner){
  return {
    // Properties
    name,
    owner,
    // Create a method
    getInfo(){
      return `${this.name} is owned by ${this.owner}`
    },
    // Objects can contain other objects
  address: {
    street: '123 Main St',
    city: 'Pittsburgh'
  }
  };
}

var spot = createAnimal("Spot", "Doug");

// Execute method
document.write(`${spot.getInfo()}<br />`);

// Access object in the object
document.write(`${spot.name} is at ${spot.address.street}<br />`);

// Get properties and methods of object
document.write(`${Object.getOwnPropertyNames(spot).join(" ")} <br />`);

// You can store values from Objects with destructoring
let { name, owner } = spot;
document.write(`Name : ${name}<br />`);

// Get the inner class value
let { address } = spot
document.write(`Address : ${address.street}<br />`);

// You can destructor arrays as well
let favNums = [2.718, .5772, 4.6692];
let [,,chaos] = favNums;
document.write(`Chaos : ${chaos}<br />`);

// You can use rest items to grab part of an array
let [, ...last2] = favNums;
document.write(`2nd Num : ${last2[0]}<br />`);

// This can be used to switch values
let val1 = 1, val2 = 2;
[val1,val2] = [val2,val1];
document.write(`Val2 : ${val2}<br />`);