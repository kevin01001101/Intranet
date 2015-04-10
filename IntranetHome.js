var Stratcom = (function() {
    
    
    function hammerTime() {            
        $("#worldCLock > span").text("12:12:00");
        setInterval(function() {
            var now = new Date();
            var hours = now.getUTCHours();
            if (hours < 10) { hours = "0" + hours; }
            var minutes = now.getUTCMinutes();
            if (minutes < 10) { minutes = "0" + minutes; }            
            var seconds = now.getUTCSeconds();
            if (seconds < 10) { seconds = "0" + seconds; }
            $("#worldClock > span").text(hours +":"+ minutes +":"+ seconds);
        }, 1000);            
    }

    
    
    var initialize = function() {
        console.log("Initializing");
        $("#preferences").height($("#mainView").height());
        hammerTime();
    };
    
    
    var showPreferences = function() {
        $("#mainView").toggleClass("mainFlipped");        
        $("#preferences").toggleClass("flippedPref");
    };
    
    
    return {
        Initialize: initialize,
        ShowPreferences: showPreferences
    }
    
})();

Stratcom.Initialize();