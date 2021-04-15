//=============================================//
// VARIABLES NEEDED IN THE FUNCTIONS
//=============================================//

// select the user input field
var userChoice = d3.select("#selDataset");

// select the demographic info div's ul list group
var demographicsTable = d3.select("#sample-metadata");

// select the bar chart div
var barChart = d3.select("#bar");

// select the bubble chart div
var bubbleChart = d3.select("bubble");

//=============================================//
//  CREATE FUNCTIONS
//=============================================//

// create a function to populate dropdown menu with IDs and draw corresponding charts for first ID
function init() {
  // reset any previous data
  resetData();

  // read in JSON file
  d3.json("data/samples.json").then((data) => {
    // POPULATE DROPDOWN MENU WITH IDs

    // loop over each name in the array data.names to populate dropdowns with IDs
    data.names.forEach((name) => {
      var option = userChoice.append("option");
      option.text(name);
    });

    // get the first ID from the list for initial charts as a default
    var initId = userChoice.property("value");

    // plot initial charts with initial ID
    plotCharts(initId);
  });
}

// create a function to reset divs to prepare for new data
function resetData() {
  // CLEAR THE DATA

  demographicsTable.html("");
  barChart.html("");
  bubbleChart.html("");
}
