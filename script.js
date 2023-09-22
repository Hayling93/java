let subject="JavaScript"; 
console.log("Hello" + subject);

let chooseColor = document.getElementById("chooseColor");
let chooseBtn = document.getElementById("chooseBtn");

let content = document.getElementById("content")

console.log(chooseBtn);

let age = document.getElementById ("age");
let testAge = document.getElementById("testAge");

chooseBtn.addEventListener("click", (e) => {
console.log("klicka på kanppen")

 let chosenColor = chooseColor.value; 
 console.log("c", chosenColor);
 document.body.style.backgroundColor = chosenColor;


})

testAge.addEventListener("click", (e) => {
let getAge = age.value; 

console.log ("age" + getAge); 

let yearsLeft = 18 - getAge;

if (getAge < 18) {
    console.log ("Minder än 18");
    content.innerText = "Sorry, kom tillbaks om några år " + yearsLeft + " år!";
} else { 
    console.log ("Större än 18");
    content.innerText = "Vassegod ta en öl";
}

})