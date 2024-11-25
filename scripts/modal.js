$(document).ready(function() {
    $("#modal").addClass("hidden");
    $("#button-a").click(function() {
      $("#modal").removeClass("hidden");
      $("#button-a").addClass("hidden");
  });
  
  $("#button-b").click(function() {
      $("#modal").addClass("hidden");
      $("#button-a").removeClass("hidden");
  });
  });
  