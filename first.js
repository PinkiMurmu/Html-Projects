// There is all the things from first to last for learning JavaScript....!




// console.log("Pinki Murmu");
// console.log("Welcome to My first code!");
// console.log ("I love javascript.");
// name="Pinki Murmu";
// console.log(name);
// x=null;
// y=undefined;
// console.log(x);
// console.log(y);
// const student = {
//     name: "Pinki",
//     age: 20,
//     cgpa: 8.2,
//     isPass: true
// };
// const insta ={
//     userName: "shradhakhapra",
//     isFollow: true,
//     posts: 195,
//     followers: 569,
//     following: 4,
//     name: "Shradha Khapra",
//     bio: "Enterpreneur Apna College"
// };
// alert ("Welcome to the page! ");
// let grade = prompt("Enter grade of the student");
// if (grade>=90 && grade<=100){
//     console.log("Grade is: A.");
// }else if (grade>=70 && grade<=89)
//     console.log("Grade is: B.");
//     else if (grade>=60 && grade<=69)
//         console.log("Grade is: C.");
//     else if (grade>=50 && grade<=59)
//         console.log("Grade is: D.");
//     else (grade>=0 && grade<=49)
//         console.log("Grade is: F.");


// for-of loop

// let str="Javascript";
// let size=0;

// for(let val of str){
//     console.log("val = ", val);
//     size++;
// }
// console.log("String size is: ",size);


//for-in loop

// let student={
//     name: "Pinki",
//     dept: "CS",
//     rollNo: 52,
//     regNo: 182,
//     cgpa:8.2,
//     isPass: true
// };
// for(let key in student){
//     console.log("key=",key,"Value=",student[key]);
// }

//even numbers from 0 to 100

// for (let i=0; i<=100; i++){
//     if (i%2===0){
//         console.log(i);
//     }
// }

//My own game

// realNum=50;
// let userNum= prompt("Guess the number: ");
// while(userNum != realNum){
//         userNum = prompt("You entered the wrong number. Guess again: ");
// }
// console.log("Congratulations! You entered the right number.");
// console.log(userNum);

//Practice Question

// let userName = prompt("Enter your fullname without spaces: ");
// console.log("@"+userName+userName.length);

// arrays

// let marks=[85,97,44,37,76,60];
// let sum=0;
// let avg;
// for (let i of marks){
//         sum=sum+i;
//         avg= sum/(marks.length);
// }
// console.log(sum);
// console.log (`Average is ${avg}`);

// let prices =  [250,645,300,900,50];
// for (let i=0; i<prices.length; i++){
//         prices[i] =prices[i]- prices[i]* 0.1 ;     
// }
// console.log(prices);

//Array methods

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// console.log(companies);

// companies.splice(1,1,"Ola");
// console.log(companies);

// let comp = companies.push("Amazon");
// console.log(comp);

// Arrow function

// const multiplication = (a,b) =>{
//     return ( a*b);
// }
// multiplication(12,4);

//Practice questions

// function noOfVowel(str){
//     let count = 0;
//     for (let i of str){
//         if (i==="a"||i==="A"||i==="e"||i==="E"||i==="i"||i==="I"||i==="o"||i=="O"||i==="u"||i==="U"){
//             count++;
//         }
//     }
//     console.log ("Number of vowels is: ",count);
// }

// let countVow = (str) => {
//     let count = 0;
//     for (let i of str){
//         if (i==="a"||i==="A"||i==="e"||i==="E"||i==="i"||i==="I"||i==="o"||i=="O"||i==="u"||i==="U"){
//             count++;
//         }
//     }
//     console.log ("Number of vowels is: ",count);
// }

//forEach function

// let arr=["Pune","Delhi","Mumbai"];
// arr.forEach((val, idx, arr)=>{
//     console.log(val.toUpperCase(), idx, arr);
// })

// let array=[5,6,7,8,9,10];
// let calSquare= (val) => {
//     console.log(val*val);
// }
// array.forEach(calSquare);

//Filter method

// let marks=[87,93,64,99,86];
// let newArr= marks.filter((val)=> {
//     return val>90;
// })
// console.log(newArr);

// Practice questions
 
// let last = prompt("Enter a number: ");
// let numbers = [];
// for (let i=1; i<=last; i++){
//     numbers.push(i);
// }
// console.log(numbers);

// let addNum = numbers.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(`sum = ${addNum}`);

// let proNum = numbers.reduce((prev, curr)=>{
//     return prev*curr;
// })
// console.log(`product = ${proNum}`);

//window object

// console.log(window);
// console.log("Hello");
// window.console.log("Hello1");
// window.alert("Hello");

// Practice questions

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Apna College students";

// let access = document.querySelectorAll(".box");
// console.dir(access[0]);
// idx=1;
// for(let i of access){
//     i.innerText = `new unique value ${idx}`
//     idx++;
// }

//Practice questions

// let ap = document.createElement("button");
// ap.innerText = "Click me!"; 

// ap.style.color = "white";
// ap.style.backgroundColor = "red";
// document.querySelector("body").prepend(ap);

// //Q2
// let myPara = document.querySelector("p");
// myPara.setAttribute("myPara","newPara");

//Practice question

let modeBtn = document.querySelector("button");
let body = document.querySelector("body");
let currMode="light";

modeBtn.addEventListener("click",() =>{
    if (currMode=="light"){
        currMode="dark";
        // alert("Switching to dark mode..");
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})

//Practice question

// let mouse = document.querySelector("div");

// mouse.addEventListener("mouseover",()=>{
//     if (currMode=="light"){
//         alert("Do you want to change to the dark mode..");
//         currMode="dark";
//         // alert("Switching to dark mode..");
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         alert("Do you want to change to the light mode..");
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })