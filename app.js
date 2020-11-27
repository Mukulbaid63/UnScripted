function hideLoader() {
  $('.loading').hide();
  $('div').removeClass('.after-load');
}


setTimeout(hideLoader, 5 * 1000);

$(window).scroll(function() {
    if ($(document).scrollTop() >110) {
      $('nav').addClass('transparent');
    } else {
      $('nav').removeClass('transparent');
    }
  });

  var acc = document.getElementsByClassName("accordion");
  var i;
  
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
  } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
   } 
  });
}

new TypeIt("#typeit", {
  strings: "Revolutionizing Open Source.",
  speed: 150,
  waitUntilVisible: true
}).go();



    window.__be = window.__be || {};
    window.__be.id = "5fbaa769137e3a000783ca33";
    (function() {
        var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
        be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
    })();

var quoteText=document.querySelector(".quote");
var quoteAuthor=document.querySelector(".writer");

