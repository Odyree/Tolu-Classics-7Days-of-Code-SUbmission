$(document).ready(function(){
        // select a color value from the color picker
        $.color = $("#colorPicker").val();

        // Select the values of the width and height of the canvas
        var width = $('#inputWeight').val();
        var height = $('#inputHeight').val();

        // disable the default function of the submit button

        $(".submit").click(function(event){
            event.preventDefault();
        })    
        
        // add borders to the table
        $('#pixelCanvas').css("border","solid 2px");

        // Add a class to the table used to create each table cell
        $("#pixelCanvas").addClass("tolu")

        // The Pixel Creator
        $(".submit").on('click',function(){
                var width = $('#inputWeight').val();
                var height = $('#inputHeight').val();

                    // Create rows
                     for(i=1 ; i <= height ; i++){

                        $('.tolu').append("<tr></tr>");
                    }
                    
                    // Create Columns
                    for(i=1 ; i <= width ; i++){
                        $("tr").append("<td></td>");
                        $("td").addClass('cell');
                    }  
            
            var table = $("#pixelCanvas")[0];
                
                // Loop through the cells and columns clicked to change the backgrounds
                $("#pixelCanvas tr").each(function(){
                    $("#pixelCanvas td").each(function(){
                       $(this).click(function(){
                         $.color = $("#colorPicker").val();
                            $(this).css("background-color",$.color);    
                        }) 
                    })
                })

                // disable the submit button after creating canvas
                $('input[type="submit"]').attr('disabled','disabled');  
            })  
            
        })