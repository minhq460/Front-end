(function ($) {
    $.simpleTicker($("#breakingNewsTicker"), {
      speed: 1000,
      delay: 3000,
      easing: 'swing',
      effectType: 'roll'
  });
    $.simpleTicker($("#internationalTicker"), {
      speed: 1000,
      delay: 4000,
      easing: 'swing',
      effectType: 'roll'
  });
})(jQuery);
