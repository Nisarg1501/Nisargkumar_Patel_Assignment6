"use strict";

$(document).ready( () => {
    $("#add_trip").click( () => {
        const trip = new Trip( 
          $("#destination").val(), $("#km").val(), $("#litres").val() );

        if (trip.isValid) {
            tripsModule.push(trip); 
            $("#trip_list").val(tripsModule.toString());

            $("#destination").val("");
            $("#km").val("");
            $("#litres").val("");

            $("#destination").focus();
        } 
        else {
            alert("Please complete all fields.\nKilometers and litres " 
                + "must be numeric and greater than zero.");
            $("#destination").select();
        }
    });
    
    $("#destination").focus();
}); 

