var secondid=document.getElementById("secondaryID");
var counter = 1;
console.log(secondid) 
secondid.addEventListener("click", function() {
    alert("Hello World!")
    secondid.innerHTML = "Clicked! " + counter;
    counter = counter + 1;
})

// Initializes citiesTable, will be called later
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
	table.appendChild(headerRow);
	console.log('Created header row');

	// City and Population header row
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

	// Loop to add a new row for each city
	for (let i=0; i < cityPop.length; i++) {
        // Assign html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        
        // Add the row's html string to the table
        table.insertAdjacentHTML('beforeend', rowHtml);
		console.log(`Added row ${rowHtml}`);
	};

    // Pushes the table to cityTable div
    document.querySelector("#cityTable").appendChild(table);
	console.log('Pushed table to #cityTable')

	// Calls functions for adding columns & events to the page
	addColumns(cityPop);
	console.log('Calling adddColumns')
	addEvents();
	console.log('Calling addEvents')
}

// Function that will add additional rows to each column
function addColumns(cityPop){

	// All rows
	var rows = document.querySelectorAll("tr")

	// This for loop iterates and creates a new column for each row
	for (let i=0; i < cityPop.length + 1; i++){
		// Since there is i citySize rows, i==0 represents the City Size header
		if (i==0) {
			rows[i].insertAdjacentHTML('beforeend', '<th>City Size</th>');
		} else {
			var citySize;

			// We do i-1 to remove the additional row created by the header
			if (cityPop[i-1].population < 100000){
				citySize = 'Small'
			} else if (cityPop[i-1].population < 500000){
				citySize = 'Medium'
			} else {
				citySize = 'Large'
			};

			// Adds the citySize rows
			rows[i].insertAdjacentHTML('beforeend', '<td>' + citySize +  '</td>');
		};
	};
};

// Handles event listeners for cities table
function addEvents(){

	// Gets the table element
	table = document.querySelector("table");

	// Picks a random color when the "mouseover" event is called
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			// This was previously set to a string, so it didn't actually do anything
			// color += "random";
			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
		// Sets the table's color
		table.style.color = color;
	}});

	// Alert when clicking on the cities table
	function clickme(){

		alert('Hey, you clicked me!');
	};

	// Event listener for clicking on the cities table
	document.querySelector("table").addEventListener("click", clickme)
};

// Calls citiesTable
initialize();