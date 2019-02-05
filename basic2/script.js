

$(document).ready(function(){
     	var innerStr = "";
 		for(i=0;i<3;i++){
 			for(j=0;j<3;j++){
 				innerStr += "<img ='"+i+"' src='santa-claus.png'>";
 			}
 			innerStr += "<br>";
 		}
 		document.getElementById("msg").innerHTML = innerStr;

 	$("img").on('click', function(){
 		this.remove();
    });
});



