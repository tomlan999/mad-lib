// Start of notes section created during class

//var first_name = "Tom"; two forward slashes mean single line comment
//var last_name = "Landeis";

/* This
is 
a block
comment */

/*var greeting = "Hello!";
var first_name = "Tom";
var last_name = "Landeis";
var message1 = "Don't forget to pick up these items";
var message2 = "also, make sure to gather wood for dooms day prepping";
var favoriteQuote = "\"Shut up Donny\"";
var my_image = "<img src=\"images/myimage.png\" />";
var goodbye = "see you later!!"; */

//Bad variable names - will give errors:
//var first name = 
//var 2first_name = 
//var time = (time is a keyword)

//operators
// = assigns a value
// += (concatenation assignment operator with strings) adds to whatever the variable currently has
// \ is an escape character that prevents javascript from parsing the characters in between
// use single quotes if you have a lot of illegal characters
// var my_image = '<img src=\"images/myimage.png\" />';

//output variables to the console

/* console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye); */

// console.log(greeting + " " + first_name + " "  + message1 + " " + message2 + " " + favoriteQuote + " " + goodbye);

// end of notes section created during class, start of homework javascript

var static_words1 = "I hate to advocate ";
var static_words2 = ", ";
var static_words3 = ", ";
var static_words4 = " or ";
var static_words5 = " to anyone, but they always worked for ";
var static_words6 = ". --Hunter S Thompson";

//create a variable that is used as a reference to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function called OnClick when the submit button is clicked on
//function that handles an event (in this case a click) is called an Event Handler
button.addEventListener("click", onClick, false);

//define a function called onClick
//all incoming data to the function is represented by "evt"
//when a function is invoked, it fires off all the code between the curly brackets, aka the function body

function onClick(evt) {
  evt.preventDefault(evt); //this line stops the form from submitting by preventing its default action
  
  //for each variable, go to form1, get the value of each field (item) and assign it to a variable
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6);
}