function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $("body").offset().top;
    var header_height = $(".info").outerHeight();
    $("body").css({ "margin-top": header_height });
    $("body").css({ height: header_height - scroll_top });
  }
  parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });
  $(window).resize(function() {
    parallax_height();
  });