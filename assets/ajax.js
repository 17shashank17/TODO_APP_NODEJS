
$(document).ready(function(){

    $('form').on('submit', function(){  
        var item = $('form input');
        var todo = {items: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/',
          data: todo,
          success: function(data){
            location.reload();
          }
        });
        return false;
    });
    
    $('li').on('click',function(){
        var item=$(this).text();
        $.ajax({
            type: 'DELETE',
            url: '/'+item,
            success: function(data){
                location.reload();
            }
        });
    });
});