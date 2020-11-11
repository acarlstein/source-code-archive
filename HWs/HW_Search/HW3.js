
// SEARCH
var input = $("#search input[type='text']");
input.keyup(function(){  
  var query = $.trim(input.val()).toLowerCase();
  var search_content = $(".search-content");
  $.each(search_content, function(){
    var $this = $(this);
    var content = $this.text().toLowerCase();
    var parent = $this.parent('li');
    if (query.length > 0){
      if (content.indexOf(query) === -1){
        parent.fadeOut();
      }else{
        parent.fadeIn();
      }   
    }else{      
      parent.fadeIn();
    }
  });  
});

// SHOW MORE OR LESS
var div_holding_more_and_less = "ul li div:last-child";
$(div_holding_more_and_less).click(function(){  
  var parent = $(this).parent();
  var div_holding_text = 'div:nth-last-child(2)';
  $(div_holding_text, parent).toggleClass('read-more');   
  var toggle_less_span = 'span:first-child span:last-child';
  $(toggle_less_span, parent).toggle();
})
