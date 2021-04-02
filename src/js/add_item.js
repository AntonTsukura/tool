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

function add_item(response_server_id, item_value){
   var items_container = document.getElementById("items_container"),
   delete_button = document.createElement("a"),
   sense_item = document.createElement("div");

   new_item = document.createElement("div");
   new_item.classList.add('item');
   new_item.id = response_server_id;
   delete_button.classList.add('delete_item_button');
   delete_button.innerHTML = "<svg width='16px' height='16px' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 486.4 486.4' style='enable-background:new 0 0 486.4 486.4;' xml:space='preserve'><g><path d='M446,70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5,0-53.5,24-53.5,53.5V70H40.4c-7.5,0-13.5,6-13.5,13.5 S32.9,97,40.4,97h24.4v317.2c0,39.8,32.4,72.2,72.2,72.2h212.4c39.8,0,72.2-32.4,72.2-72.2V97H446c7.5,0,13.5-6,13.5-13.5 S453.5,70,446,70z M168.6,53.5c0-14.6,11.9-26.5,26.5-26.5h96.2c14.6,0,26.5,11.9,26.5,26.5V70H168.6V53.5z M394.6,414.2 c0,24.9-20.3,45.2-45.2,45.2H137c-24.9,0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z'/><path d='M243.2,411c7.5,0,13.5-6,13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v238.5 C229.7,404.9,235.7,411,243.2,411z'/><path d='M155.1,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9 C141.6,390.1,147.7,396.1,155.1,396.1z'/><path d='M331.3,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9 C317.8,390.1,323.8,396.1,331.3,396.1z'/></g></svg>";
   sense_item.classList.add('sense_item');
   items_container.insertBefore(new_item, items_container.firstElementChild);
   new_item.appendChild(delete_button);
   new_item.appendChild(sense_item);
   sense_item.innerHTML = item_value;
   delete_button.onclick = function(){
      console.log(this.parentNode.id);
      data_send_to_remove_item_db(this.parentNode.id);
      this.parentNode.parentNode.removeChild(this.parentNode);    
  };
}
function dataload(new_item){
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (xhttp.readyState == XMLHttpRequest.DONE) {
         if (xhttp.status == 200) {
            console.log("The item("+new_item+") add in data base");
            console.log(xhttp.responseText);
            add_item(xhttp.responseText, new_item);
         } else if (xhttp.status == 400) {
             console.log('There was an error 400');
         } else {
             console.log('something else other than 200 was returned');
         }
      }
   };
   xhttp.open("GET", "php/add_item.php?new_item=" + new_item, true);
   xhttp.send();
}

document.addEventListener('DOMContentLoaded',function(){
   /*indicator search*/
   var _typingIndicator = document.querySelector('.typing'),
      _input = document.querySelector('#search_input'),
      idleTime = 1000,
      idleTimer = null,
      inputValue,
      indicatorState = {
           active : 'is-typing-active',
           init : 'is-typing-init'
      };
   function showIndicator(){
      _typingIndicator.classList.add(indicatorState.init);
   }
   function activateIndicator(el){
      _typingIndicator.classList.add(indicatorState.active);
      inputValue = el.value;
      detectIdle(el);
   }
   var removeIndicator = function(){
      _typingIndicator.classList.remove(indicatorState.init, indicatorState.active);
   }
   function detectIdle(el){
      if (idleTimer) {
         clearInterval(idleTimer);
      }

      idleTimer = setTimeout(function(){
         if (getInputCurrentValue(el) === inputValue) {
            _typingIndicator.classList.remove(indicatorState.active);
      }
   }, idleTime);
   }
   function getInputCurrentValue(el){
      var currentValue = el.value;
      return currentValue;
   }
   document.getElementById("search_input").addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
         var ajax_function = function(){
            var search_input = document.getElementById("search_input"),
            text = search_input.value;
            if(text != ""){
              dataload(text); 
            }
         };
         setTimeout(ajax_function, 1200);
         showIndicator();
         activateIndicator(this);
         setTimeout(removeIndicator, 1200);
      }
   });

   const tag_proporties_block = document.querySelectorAll('.tag_proporties');
   tag_proporties_block.forEach(tag_proporties => {
      tag_proporties.addEventListener('click', e => {
        tag_proporties.classList.add('green_color');
        var search_tags = document.getElementById("result_search_waiting");
        items_container.style.display = "block";
         if(search_tags.textContent.indexOf(tag_proporties.textContent) == -1){
            let span_node = document.createElement('span');
            span_node.classList.add('tag_proporties');
            span_node.innerHTML = tag_proporties.textContent;
            span_node.addEventListener('click', function() {
               span_node.parentNode.removeChild(span_node);
               tag_proporties.classList.remove('green_color');
            });
            search_tags.appendChild(span_node);
         }
      });
    });
   
});

