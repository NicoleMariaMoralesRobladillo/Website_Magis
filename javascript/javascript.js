$(document).ready(function () {
  // collect the inner blocks of all desired carousels
  let $carouselInners = $(".same-height").children(".carousel-inner");
  updateItemsHeight();
  $(window).resize(updateItemsHeight);
  function updateItemsHeight() {
    $carouselInners.each(function () {
      // collect the slides contained inside this inner block
      let $carouselItems = $(this).children(".carousel-item");
      // remove old height value
      $carouselItems.height("auto");
      // calculate new one
      let maxHeight = 0;
      $carouselItems.each(function () {
        maxHeight = Math.max(maxHeight, $(this).outerHeight());
      });
      // set new value
      $carouselItems.each(function () {
        $(this).outerHeight(maxHeight);
      });
    });
  }
});
