/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding
* 2. Implicit binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
// console.log(this)
// // code example for Window Binding

// // Principle 2
// const myObj = {
//     greeting: "What's up",
//     sayHi: function (name) {
//         console.log(`${this.greeting} my name is ${name}`);
//     }
// }
// myObj.sayHi('Zach')
// code example for Implicit Binding
// function Person(speaker, favColor){
//     this.opener = "Good afternoon";
//     this.speaker = speaker;
//     this.favColor = favColor;
//     this.talk = function(){
//         console.log(`${this.opener} ladies and gentleman, my name is ${this.speaker} and my favorite color is ${this.favColor}`)
//     }

// }
// const Zach = new Person ('Zach', 'red')
// const Alex = new Person ('Alex', 'green')

// // Zach.talk();
// // Alex.talk();
// // Principle 3

// // code example for New Binding
// Zach.talk.call(Alex)
// Principle 4

// code example for Explicit Binding