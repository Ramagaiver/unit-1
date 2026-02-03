var secondid=document.getElementById("secondaryID");
var counter = 1;
console.log(secondid) 
secondid.addEventListener("click", function() {
    alert("Hello World!")
    secondid.innerHTML = "Clicked! " + counter;
    counter = counter + 1;
})

function initialize(){
	cititesTable();
}

// Creates a table with citites and their population
function cititesTable(){
	// Arrays for city and population
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
];

	// Checking if cityPop data was created properly
	for (let i=0; i < cityPop.length; i++) {
		console.log(`Initialized: ${cityPop[i].city}, ${cityPop[i].population}`);
	};

    // Create table element
    var table = document.createElement("table");
	console.log('Created table element');

    // Create header row
    var headerRow = document.createElement("tr");
	console.log('Created header row');


	// Loop to add a new row for each city
	for (let i=0; i < cityPop.length; i++) {
        // Assign html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td><tr>";
        
        // Add the row's html string to the table
        table.insertAdjacentHTML('beforeend', rowHtml);
		console.log(`Added row ${rowHtml}`);
	};

    // Pushes the table to cityTable
    document.querySelector("#cityTable").appendChild(table);
	console.log('Pushed table to #cityTable')

	// Calls functions for adding columns & events to the page
	addColumns(cityPop);
	console.log('Calling adddColumns')
	addEvents();
	console.log('Calling addEvents')
}

function addColumns(cipyPop){
	var rows = document.querySelectorAll("tr")

	for (let i=0; i < rows.length; i++){
		if (i==0) {
			rows.insertAdjacentHTML('beforeend', '<th>City Size,/th.');
		} else {
			var citySize;

			if (cityPop[i-1].population < 100000){
				citySize = 'Small'
			} else if (cityPop[i-1].population < 500000){
				citySize = 'Medium'
			} else {
				citySiz = 'Large'
			};

			rows.insertAdjacentHTML('beforeend', '<td>' + citySize +  '</td>');
		};
	};
};

function initialize(){
	cititesTable();
};

// function addColumns(cityPop){
    
//     document.querySelectorAll("tr").forEach(function(row, i){

//     	if (i == 0){

//     		row.insertAdjacntHTML('beforeend', '<th>City Size</th>');
//     	} else {

//     		var citySize;

//     		if (cityPop[i-1].population < 100000){
//     			citySize = 'Small';

//     		} else if (cityPop[i-1].population < 500000){
//     			citysize = 'Medium';

//     		} else {
//     			citySize = 'Large';
//     		};

// 			row.insertAdjacntHTML = '<td' + citySize + '</td>';
//     	};
//     });
// };

// function addEvents(){

// 	document.querySelector("table").addEventListener("mouseover", function(){
		
// 		var color = "rgb(";

// 		for (var i=0; i<3; i++){

// 			var random = Math.round(Math.random() * 255);

// 			color += "random";

// 			if (i<2){
// 				color += ",";
			
// 			} else {
// 				color += ")";
// 		};

// 		document.querySelector("table").color = color;
// 	});

// 	function clickme(){

// 		alert('Hey, you clicked me!');
// 	};

// 	document.querySelector("table").addEventListener("click", clickme)
// };

initialize();