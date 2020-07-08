"use strict";




$("#js-shopping-list-form").on('submit',function(e){         
 let text =  $("#shopping-list-entry").val();
 $('.shopping-list').append(`<li>
  <span class="shopping-item">${text}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`); 
$("#shopping-list-entry").val('');
 e.preventDefault()

})

$("ul").on('click','.shopping-item-delete',function(){
  $(this).closest('li').remove()
});
$("ul").on('click','.shopping-item-toggle',function(){
  $(this).closest('li').find(".shopping-item").toggleClass("shopping-item__checked")
})

