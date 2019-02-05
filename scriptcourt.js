  $(document).ready(function(i){
    var cart=[];
     function additem (name,price) {
     	var item = {name: name, price: price};
     	for(var i in cart){
     		if (cart[i].name==name){
     		document.getElementById("item").innerHTML= name ;
     			return;
     		}
     	}
     	cart.push(item)
       
}

$(".add-to-cart").on('click',function(event){
	additem("A gift from santa-claus")

   
    
})
        
    });



  


   
