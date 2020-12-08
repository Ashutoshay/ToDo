
    	var counter = 0;
    	function add(){
    	//	debugger;
    		var Add = $("#item").val();
    		$("ul").append("<li>" + "<input type= 'checkbox' id = 'check'/> <span>" + Add + "</span> <input class='sty' type = 'submit' id='edit" + counter + "' value = 'Edit'/>" + "<input class='sty' type = 'submit' onClick='del(this)' value = 'Delete'/>" +"</li>");

    		$('#edit' + counter).click(function(){
    			
    			$(this).prev().attr('contenteditable','true');
    			$(this).prev().focus();
    		});
    		
   $("#item").val("");
    	
  counter++;

    	}

        $(document).ready(function(){
            $("#go").on('click', '#check', function(){
                $(this).parent().appendTo("#com");
            });
             $("#com").on('click', '#check', function(){
                $(this).parent().appendTo("#go");
            });
             
        });

    	$(function(){
    		$('#button').on('click', add);
    	});

   

function del(e){
    
   $(e).parent().remove();
}