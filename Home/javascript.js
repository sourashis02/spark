 $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll < 300) {
         $('nav').css('background', 'transparent');
     } else {
         $('nav').css('background', 'rgb(214, 160, 0)');
     }
 });