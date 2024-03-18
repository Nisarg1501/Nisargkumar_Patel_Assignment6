"use strict";

$(document).ready(function() {
    const clockModule = createClock($("#hours") , $("#minutes") , $("#seconds") , $("#ampm"));
    const stopwatchModule = createStopwatch($("#s_minutes") , $("#s_seconds") , $("#s_ms"));
    
    clockModule.start();

    $("#start").click(stopwatchModule.start);
    $("#stop").click(stopwatchModule.stop);
    $("#reset").click(stopwatchModule.reset);

}); // end ready()
