//Math Constants
console.log(Math.PI);
console.log(Math.E);  

//Min & Max
console.log(Math.min(2, 5, 1)); 
console.log(Math.max(2, 5, 1)); 
//Random Numbers
console.log(Math.random()); 

// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// 4-digit OTP
let otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);

//Logarithmic Methods
console.log(Math.log(10));   
console.log(Math.log10(100)); 
console.log(Math.log2(8)); 
//Trignometric methods
Math.sin(0);       
Math.cos(0);        
Math.tan(0);        
// Examples
// Area of a circle
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log(area);

// Highest mark from array
let marks = [45, 67, 89, 34];
console.log(Math.max(...marks));
