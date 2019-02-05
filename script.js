$(document).ready(function(){
       $("img").on('click', function(eventObject)){
      var senta="you cliked santa claus";
      var christ="you cliked chrismas";
      var bell="you cliked Chrismas bell";
       var eventType = eventObject.type; 
      document.getElementById('msg').innerHTML = "The event type is " + eventType + christ;

       }


    });