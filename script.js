$(document).ready(function(){
     $("img").on('click', function(){
     	if(this.id==0){
		     document.getElementById('msg').innerHTML = "You clicked gift";
 		     }
	     else if(this.id==1){
			document.getElementById('msg').innerHTML = "You clicked santa";
	     }
	     else{
	     	document.getElementById('msg').innerHTML = "You clicked the bell";
	     }
	     


	      

    });
});