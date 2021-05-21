/*Declare three variables, a and b and c.

If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions
*/

//Task 1

let a = 3;
let b = 5;
let c;

let output = 'let a= 3;\n let b= 5 ;\n let c; \n ---------------';

output= output+ '\n a+b =' + (a + b)  ; //prints 8
output= output+ '\n a-b =' + (a - b)  ; //prints -2
output= output+ '\n a*b =' + (a * b)  ; //prints 15
output= output+ '\n a/b =' + (a / b)  ; //prints 0.6
output= output+ '\n a%b =' + (a % b)  ; //prints 3
output= output+ '\n a+=b =' + (a += b); //prints 8
output= output+ '\n a-=b =' + (a -= b); //prints 3
output= output+ '\n a*=b =' + (a *= b) ; //prints 15
output= output+ '\n a/=b =' + (a /= b) ; //prints 3
output= output+ '\n a%=b =' + (a %= b) ; //prints 3

output= output+ '\n a==b :' + (a == b) ; //prints false
output= output+ '\n a!=b :' + (a != b) ; //prints true
output= output+ '\n a>b :' + (a > b) ; //prints false
output= output+ '\n a<b :' + (a < b) ; //prints true
output= output+ '\n !a&&!c :' + (!a&&!c) ; //prints false
output= output+ '\n !a||!c :' + (!a||!c) ; //prints true

alert(output);

//Task 2

 //variable name declared
let first_name ='Ravnoor';
let last_name = 'Bajaj';
let email = ['baja0011@algonquinlive.com'];

alert("My name is " + first_name + " "+ last_name + "."+" You can contact me at " + email +"."); //concatenation

