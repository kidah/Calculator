$(document).ready(function() {
      

    $('input[name=btn]').click(function() {
        if ($(this).val() == ".") {
            var txt = $('#displaybox').val();
                if(txt.slice(-1) == ".") {
                    return false;
                }  
        }
        $('#displaybox').val($('#displaybox').val() + $(this).val());
    });


    $('input[name=btnop]').click(function() {
        var txt = $('#displaybox').val();
        if ((txt.slice(-1) == '+')  || (txt.slice(-1) == '-') || (txt.slice(-1) == '*') || (txt.slice(-1) == '/') ) {
            return false;
        }    
        $('#displaybox').val($('#displaybox').val() + $(this).val());     
    });


    $('input[name=squareroot]').click(function() {
        txt = $('#displaybox').val();
        var txt2 = parseInt(txt);
        var result = Math.sqrt(txt2);
        $('#displaybox').val(result);  
    });


    $('input[name=square]').click(function() {
        txt = $('#displaybox').val();
        var txt2 = parseInt(txt);
        var result = txt2 * txt2 ;
        $('#displaybox').val(result);
    });


    $('input[name=toggle]').click(function() {
        txt = $('#displaybox').val();
        if (txt = +txt) {
           $('#displaybox').val(-txt); 
        }
        else {
            $('#displaybox').val(+txt);  
        } 
    });


    $('input[name=clear]').click(function() {
    	$('#displaybox').val('');
    });

    
    $('input[name=calculate]').click(function() {
    	var txt2 = $('#displaybox').val();
    	$('#displaybox').val(eval(txt2));
    });

    
});