function getSum(num1 = 1, num2 = 1) {
    document.write(`${num1} + ${num2} = ${num1+num2} <br />`) // 3+1=4
    document.write(`${arguments[0]} + ${arguments[1]} <br />`) // 3 + undefined
}
getSum(3);

function getSumMore (...valores) {
    let sum = 0;
    for (let i=0, len = valores.length; i < len; i ++) {
        sum += valores[i];
    }
    document.write(`The sum is ${sum} <br />`);
}
getSumMore (1,2,3,4); // The sum is 

let valores = [1,2,3,4,5];
getSumMore(...valores); // The sum is 15 

let difference = (num1, num2) => num1 - num2;
document.write(` 5 - 10 = ${difference(5,10)} <br />`); //5 - 10 = -5 

let mult = (num1,num2) => {
    let product = num1 * num2;
    document.write(` ${num1} * ${num2} = ${product} <br />`); //5 * 50 = 250 
}
mult(5,50);