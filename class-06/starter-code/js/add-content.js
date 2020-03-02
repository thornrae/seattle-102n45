var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');







// var today = new Date();
        //i'm going to assign this new time to the variable today
// var hourNow = today.getHours();
        //assinging hour now the value of current time
        //hourNow - refered to as camel cause, when (-) is used its called kabob case, (_) is called snake case
// var greeting;
        //telling you that a greeting will appear, greeting is a variable. when you create a variable you can assign a value or just say HEY there's a var coming!

// if (hourNow > 18) {
             //conditional camel statement
             //evaluates as, if true then do the thing 
             //if, for and while
             //if the time now is more than 18hr(after 6pm) then... 
//     greeting = 'Good evening!';
            //assigns the value of Good evening! 
// } else if (hourNow > 12) {
            //conditional camel statement
            //if hour is greater than 12 then...
//     greeting = 'Good afternoon!';
            //assigns the value good afternoon
// } else if (hourNow > 0) {
            //conditional camel, if hourNow is greater than 0 then message below
//     greeting = 'Good morning!';
// } else {
            //this is a catch in that if there are any errors in the condtional statement then you would still at least get some message. this is good programming
//     greeting = 'Welcome!';
// }

// document.write('<h3>' + greeting + '</h3>');
