$(document).ready(function(){
	var cards = [1,2,3,4,5,6,7,8,9,10];
	var order = [4,3,5,1,9,10,2,8,7,6];
	var innerStr="";
	var innerStr2="";
	for(i=1;i<11;i++){
		innerStr += "<div class='slots' id='"+i+"'>"+i+"</div>";
		innerStr2 += "<div class='cards' id='"+i+"'>"+order[i-1]+"</div>";
	}
	document.getElementById("slots").innerHTML += innerStr;
	document.getElementById("cards").innerHTML += innerStr2;
	$('.cards').draggable();
});