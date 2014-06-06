//= require "vendor/fitvids.js"

$(function(){

  //Enable fitvids
  $(".video").fitVids();

  // Add small quotes to a paragraph's first word's with emphasis
  $('#article p em').parent().each(function() {
    var h = $(this).html();
    var i = (h.indexOf(' ') == -1) ? h.length : h.indexOf(' ');
    if(h.substring(0, i).search("em") > 0){
      $(this).find("em:first-child").addClass("leadIn");
    }
  });

});