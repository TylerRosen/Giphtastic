 //Global Variables

 // ------------------------------------------------------------

 var search = "";

 //Perform function when button is clicked

    $("#submit").on("click", function () {

//Searches for query

      search = $("#gifs").val().trim();

//API URL/Key

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=dc6zaTOxFJmzC&limit=10";

//AJAX info

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

//Checks results

          for (var i = 0; i < results.length; i++) {

          	//Adds search term to URL

            var searchURL = queryURL + "&q=" + search;
            console.log(searchURL)

            //Creates div for gif

            var gifDiv = $("<div class='item'>");

            //Searches for rating of gif

            var rating = results[i].rating;

            //Adds rating

            var p = $("<p>").text("Rating: " + rating);

            //Looks for gifs matching search term

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            //Adds gif to page
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gif-display").prepend(gifDiv);


          }

 //Creates buttons for search terms

          var button = $('<input type = "button"/>').val(search);
          $("#buttons").append(button).append("  ");

           // $("#buttons").on("click", function() {
          	

      });

        });

    // });

