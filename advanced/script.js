var cards = [1,2,3,4,5,6,7,8,9,10];
	var order = [4,3,5,1,9,10,2,8,7,6];

function allowDrop(ev) {
 		ev.preventDefault();
	}

	function drag(ev) {
  		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
  		ev.preventDefault();
   		var data = order[ev.dataTransfer.getData("text")-1];
   		if(data!=ev.target.id){

   		}
   		else{
   			ev.target.appendChild(document.getElementById(ev.dataTransfer.getData("text")));	
   		}
   		
	}

$(document).ready(function(){

	
	var innerStr="";
	var innerStr2="";
	for(i=1;i<11;i++){
		innerStr += "<div ondrop='drop(event)' ondragover='allowDrop(event)' class='slots' style='z-index: -1' id='"+i+"'>"+i+"</div>";
		innerStr2 += "<div class='cards' containment='document' cursor='move' snap='#"+i+"' draggable='true' ondragstart='drag(event)' id='"+i+"'>"+order[i-1]+"</div>";
	}



	document.getElementById("slots").innerHTML += innerStr;
	document.getElementById("cards").innerHTML += innerStr2;




 });


