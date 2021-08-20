$(document).ready(function(){
    $("#btt").click(function(){
        $(".fr").slideToggle(3000,function(){
            alert("Message Send");
            $('#btt').html("Success!");
            $('#btt').css({"border-color":"#5cb85c"})
            $('#btt').css({"background-color":"#5cb85c"})
            $(".en").html("Message Send!!");
            
        });
    });
});