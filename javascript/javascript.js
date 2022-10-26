$(document).ready(function () {
  //Initiate equalize on load
  equalize();
  carouselNormalization();
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

function carouselNormalization() {
  (window.heights = []), //create empty array to store height values
    window.tallest; //create variable to make note of the tallest slide
  function normalizeHeights() {
    jQuery(".carousel-item-1").each(function () {
      if (jQuery(this).css("display") == "block") {
        was_show = 1;
      } else {
        jQuery(this).addClass("active");
        var was_show = 0;
      }
      window.heights.push(jQuery(this).outerHeight());
      if (was_show == 0) {
        jQuery(this).removeClass("active");
      }
    });
    window.tallest = Math.max.apply(null, window.heights); //cache largest value
    jQuery(".carousel-item-1").each(function () {
      jQuery(this).css("min-height", tallest + "px");
    });
  }
  normalizeHeights();
  jQuery(window).on("resize orientationchange", function () {
    (window.tallest = 0), (window.heights.length = 0); //reset vars
    jQuery(".carousel-item-1").each(function () {
      jQuery(this).css("min-height", "0"); //reset min-height
    });

    normalizeHeights(); //run it again
  });
}

function removeHeights() {
  $(".row--testimonios-voluntarios").each(function () {
    $(this).find(".col--testimonios-voluntarios").height("auto");
  });
}
