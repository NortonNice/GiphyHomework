$(document).ready(function() {

var topics = ["The Smiths", "Pink Floyd", "Nirvana", "The Beastie Boys", "Public Enemy", "Willie Nelson",
 "Merle Haggard", "Waylon Jennings", "Johnny Cash"];
 
//CODE TO CREATE A BUTTON DYNAMICALLY:
for (i = 0; i < topics.length; i++) {
var bndBtn=$("<input/>").attr({type: "button", name: "myBtn", value: (topics[i])});
    $("#button-div").append(bndBtn);
}

//Get
var newBand = $("#txtBox").val();

var giphy = "https://api.giphy.com/v1/gifs/search?api_key=1PnOSB1fyFf03iP8k6sIFVIoYD0xBo6a&q=" + newBand + "&limit=10&offset=0&rating=G&lang=en";
     // Performing an AJAX request with the queryURL
     $.ajax({
        url: giphy,
        method: "GET"
      })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
      });
    });

//NEED TO CONVERT TEXT FROM DYNAMICALLY CREATED BUTTONS AND MAKE IT <BUTTON DATA-ARTIST = TEXT FROM BUTTON LIKE WHEN I CHANGED CAT TO SNAKE IN DYNAMIC ELEMENTS ASSIGNMENT
//NEED TO TAKE TEXT DATA FROM BUTTONS AND SEND IT TO API

//EVENT LISTENER FOR BUTTONS
/*$("button").on("click", function() {
    var artist = $(this).attr(value);
    console.log("clicked");*/


    
 



