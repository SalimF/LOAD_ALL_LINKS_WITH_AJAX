
$(document).ready(  
function(){
$("a").click(function(e)  {
e.preventDefault();//
pageurl = $(this).attr('href');  //alert(pageurl);
$.ajax(  {  url:pageurl,success: function(data)   {  
$('body').html(data);  
    }    }   )     ;      

if(pageurl!=window.location)  {
window.history.pushState(  {  path:pageurl  },'', pageurl  );
   }
return false;
   }   )   ;
}
	  ) ;	
	  
$(document).ready	(   	 
$(window).bind('popstate', 
function() {
  $.ajax(  {  url:location.pathname,
  success: function(data)  {  $('body').html(data);      }  
               }           
			   )   ;      
              } 
	         )   	 
	 		 ) ;
