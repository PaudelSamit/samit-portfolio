//0.2 about data types.



//alert(hello)
//==  we are using node js not a browser

// let name = "samit"//string
// let age = "18"  //int
// let isloggedin = "false"//bollean  
// // string   integer  undefined  symbols etc-->primitive datta type

// //another one is object

// console.log(typeof samit);

// let score = "33"
// console.log(typeof score);

// let isloggedin = 0 ///on boolean 1 is true and  o is false.
// let bolleanIsLoggedIN = Boolean(isloggedin)
// console.log(bolleanIsLoggedIN);


// let somenumber = 33
// let stringNumber = String(somenumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




//****************opertaions */

// console.log("1"+2);
// console.log("1"+2+3);
// console.log(1+2);
// console.log(1+2+"3");
// //non peremtive types are  object array and function

// arrays.arrays

// const heros = [ "samit","samndesh","ram"];
// let myobj ={
//     name: "supriya",
//     age: 22,

// }
// const myFunction = function(){
//     console.log("hello world");
// }
// console.log( typeof heros);

// let mydate = new Date()
// console.log(mydate.getDay);



//< Arrays>
// const myArr = [5,1,3,4,5,true,"samit"]
// console.log(myArr[2]);


// let score1 = 200
// let score2 = 200
// let score3 = 200
// console.log(Array .of (score1,score2,score3));
// output will be 
// 3
// [ 200, 200, 200 ]




/*********      OBJECT         ******** */

//ONJECT LITERALS

// const jsuser ={
//     name: "samit",
//     age: 18,
//     location:"pokhara",
//     emails: "samit.paudel@123gmail.com",
//     isloggedIn:false,

// }

// console.log(jsuser.age);
// console.log(jsuser);




// function samits(a, b) {
//     console.log(a + b);
// }

// samits(5, 6);

//for each loop 

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Element at index ${index}: ${number}`);
});


