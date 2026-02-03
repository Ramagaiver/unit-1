var secondid=document.getElementById("secondaryID");
var counter = 1;
console.log(secondid) 
secondid.addEventListener("click", function() {
    alert("Hello World!")
    secondid.innerHTML = "Clicked! " + counter;
    counter = counter + 1;
})

/*
// HTML LINKING EXAMPLE

// this links elements in html to js
var myDiv = document.getElementById("mydiv");

// this sets a property to the html element we linked
// .innerHTML represents elements within the myDiv tag.
myDiv.innerHTML = "Hello world";

// FUNCTION EXAMPLE 

// function does not run on HTML initialization
function myFunc() {
    var myDiv = document.getElementById("mydiv");
    myDiv.innerHTML = "Hello World.";
};

// window.onload triggers functions after HTML initializes
window.onload = myFunc();

// WHILE LOOP EXAMPLE

let i = 0
while (i < 10) {
    console.log(i);
    i++;
};

// IF, ELSE IF, ELSE EXAMPLE 

if (cityPop[i].population < 500) {
    pop.innerHTML = 'Small town';
} else if (cityPop[i].population > 500) {
    pop.innerHTML = 'Large town';
} else {
    pop.innerHTML = 'Just right!';
};

// INITIALIZER EXAMPLE 

// The initialize function is called when the script loads. Put the function at the top of the document,
// call it at the bottom of the document.
function initialize () {
    cities();
};

// Example cities function called by the initializer
function cities() {
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
        // ...        
    ]

    // Create table element
    var table = document.createElement("table");

    // Create header row
    var headerRow = document.createElement("tr");

    // Add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>")

    // Add the row to the table
    table.appendChild(headerRow);

    // Loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++) {

        // Assign html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td><tr>";
        
        // Add the row's html string to the table
        table.insertAdjacentHTML('beforeend', rowHtml);
    }

    // Pushes the table to mydiv
    document.querySelector("#mydiv").appendChild(table);
}

// addEventListener() allows for actions to be configured to an element
document.addEventListener('DOMContentLoaded', initialize)
*/