$(document).ready(function () {
  //Initiate equalize on load
  equalize();
});

//Equalize on resizing of window
$(window).resize(function () {
  removeHeights();
  equalize();
});

function equalize() {
  var height = $(
    ".active .row--testimonios-voluntarios .col--testimonios-voluntarios--foto"
  ).height();
  $(".row--testimonios-voluntarios").each(function () {
    $(this).find(".col--testimonios-voluntarios").height(height);
  });
}

function removeHeights() {
  $(".row--testimonios-voluntarios").each(function () {
    $(this).find(".col--testimonios-voluntarios").height("auto");
  });
}
