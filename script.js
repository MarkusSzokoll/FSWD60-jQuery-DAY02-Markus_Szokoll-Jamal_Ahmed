$(document).ready(function() {
    $("img").on('click', function() {
        if (this.id == "chris") {
            document.getElementById('msg').innerHTML = "You clicked gift";
        } else if (this.id == "claus") {
            document.getElementById('msg').innerHTML = "You clicked santa";
        } else {
            document.getElementById('msg').innerHTML = "You clicked the bell";
        }



    });
});
