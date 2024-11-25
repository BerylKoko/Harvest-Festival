$(document).ready(function() {
    function toggleNavigation() {
      if ($(window).width() < 700) {
        $("#hamburgerBtn").removeClass("hidden");
        $("#navMenu").addClass("hidden");
      } else {
        $("#hamburgerBtn").addClass("hidden");
        $("#navMenu").removeClass("hidden");
      }
    }
  
    toggleNavigation();
  
    $("#hamburgerBtn").click(function() {
      $("#navMenu").toggleClass("hidden");
      $("#hamburgerBtn").toggleClass("hidden");
    });
  
    $("#exitBtn").click(function() {
      $("#navMenu").addClass("hidden");
      $("#hamburgerBtn").removeClass("hidden");
    });
  
    $(window).resize(function() {
      toggleNavigation();
    });
  });
  