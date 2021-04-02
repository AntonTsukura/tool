document.addEventListener('DOMContentLoaded',function(){
    function data_send_to_remove_item_db(item_id){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == XMLHttpRequest.DONE) {
               if (xhttp.status == 200) {
                   console.log("The item with id("+item_id+") removed from data base");
               } else if (xhttp.status == 400) {
                   console.log('There was an error 400');
               } else {
                   console.log('something else other than 200 was returned');
               }
            }
         };
         xhttp.open("GET", "php/remove_line_db_items.php?item_id=" + item_id, true);
         xhttp.send();
    };

    var delete_buttons = document.querySelectorAll('.delete_item_button');
    for (var i = 0; i < delete_buttons.length; i++) {
        delete_buttons[i].onclick = function(){
            console.log(this.parentNode.id);
            data_send_to_remove_item_db(this.parentNode.id);
            this.parentNode.parentNode.removeChild(this.parentNode);    
        };
    };
});