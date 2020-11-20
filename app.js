$(window).scroll(function() {
    if ($(document).scrollTop() >610) {
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
  speed: 100,
  waitUntilVisible: true
}).go();