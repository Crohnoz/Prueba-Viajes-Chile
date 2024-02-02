// assets/js/java.js
$(document).ready(function() {
  // Smooth scrolling for all anchors
  $('a').click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });

  // Inicializar tooltips de Bootstrap
  $('[data-toggle="tooltip"]').tooltip();
});
