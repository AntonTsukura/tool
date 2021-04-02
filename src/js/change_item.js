/*document.querySelector(".item_input").addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
       var ajax_function = function(){
          var item_input = document.getElementById("search_input"),
          text = search_input.value;
          if(text != ""){
            dataload_item_new_value(text); 
          }
       };
       setTimeout(ajax_function, 1200);
       showIndicator();
       activateIndicator(this);
       setTimeout(removeIndicator, 1200);
    }
 });
 */
 document.addEventListener('click', function(e){
   var target = e.target;
   if (target.classList.contains("item_input")) { 
      target.addEventListener('keydown', function(event) {
         if (event.keyCode != 13) {return;};
         console.log(target.parentNode.parentNode.id);
         dataload_item_new_value(target.value, target.parentNode.parentNode.id); 
      });
   };
 }, true);

 function dataload_item_new_value(new_description, id_parent_item){
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
       if (xhttp.readyState == XMLHttpRequest.DONE) {
          if (xhttp.status == 200) {
              console.log("Description of item with id("+id_parent_item+") change in data base");
          } else if (xhttp.status == 400) {
              console.log('There was an error 400');
          } else {
              console.log('something else other than 200 was returned');
          }
       }
    };
    xhttp.open("GET", "php/input_item_new_value.php?parent_item_id=" + id_parent_item + "&new_description=" + new_description, true);
    xhttp.send();
};