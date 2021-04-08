//Create initial function to     
    d3.json("/data/samples.json").then((data) => {
        //  populate dropdown menus with data
        //  use a forEach to loop over each name in the array data.names to populate dropdowns with IDs
        data.names.forEach((name => {
            var subjectId = idSelect.append("subjectId");
            subjectId.text(name);
        }));

        // get the first ID from the list for initial charts as a default
        var initId = idSelect.property("value")

        // plot charts with initial ID
        plotCharts(initId);
    });

function plotCharts (id){

    // read in JSON data
    d3.json("/data/samples.json").then((data) => {

        // get data for demographics table -> filter based on id 
        var identityMetaData = data.metadata.filter(participant => participant.id == id)[0]; 

        // get each key and value pair of metadata
        Object.entries(identityMetaData).forEach(([key, value]) => {

            //add each key value pair to a list
            var newList = demographicsTable.append("ul");
            newList.attr("class", "list-group");

            // append a li item to the unordered list
            var listItem = newList.append("li");

            // change the class attributes of the list item
            listItem.attr("class", "list-group-item");

            // add the key value pair from the metadata to the demographics list
            listItem.text(`${key}: ${value}`);

        });

        //Get data for plotting

         
        
    )};
    };



        