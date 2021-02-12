/* BRONZE
Write two variables. One will store your name and another will store a friend's name.  Find out what property you can use to check how long each name is.  Console log how many letters in each name. 
*/

let myName='Erin Lantz'
let myFriendsName='Jennifer DiDonato'
console.log(myName.length);
console.log(myFriendsName.length)


/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

if(myName > myFriendsName) {
   console.log('Erin has the longer name');
}else {
   console.log('Jenny has the longer name');
}


/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let myName = 'Erin Lantz';
let myFriendsName = 'Jennifer DiDonato';
let x = myName.length;
let y = myFriendsName.length;
let c = x-y;
let q =y-x;
if(x>y) {
    console.log(`${myName} is longer by ${c}.`)
} else if (y > x) {
    console.log(`${myFriendsName} is longer by ${q}.`)
} else {
    console.log('The names are the same length')
}