"use strict";

$(document).ready(function () {
  var slider = $('#slider');
  var slideWidth = $('.slide').outerWidth(true);
  var isAnimating = false;

  // Postavljanje fokusa na zadnju sliku u oba reda
  var focusOnLastSlide = function () {
    var lastSlideTopRow = $('#topRow .slide').last();
    var lastSlideBottomRow = $('#bottomRow .slide').last();
    $('#topRow').prepend(lastSlideTopRow);
    $('#bottomRow').prepend(lastSlideBottomRow);
  };

  // Funkcija za pomicanje slidera ulijevo
  var moveLeft = function () {
    if (!isAnimating) {
      isAnimating = true;
      slider.animate({
        left: "+=".concat(slideWidth, "px")
      }, 500, function () {
        var lastSlideTopRow = $('#topRow .slide').last().detach();
        var lastSlideBottomRow = $('#bottomRow .slide').last().detach();
        $('#topRow').prepend(lastSlideBottomRow);
        $('#bottomRow').prepend(lastSlideTopRow);
        slider.css('left', "-".concat(slideWidth, "px"));
        isAnimating = false;
      });
    }
  };

  // Funkcija za pomicanje slidera udesno
  var moveRight = function () {
    if (!isAnimating) {
      isAnimating = true;
      var lastSlideTopRow = $('#topRow .slide').first().detach();
      var lastSlideBottomRow = $('#bottomRow .slide').first().detach();
      $('#topRow').append(lastSlideTopRow);
      $('#bottomRow').append(lastSlideBottomRow);
      slider.css('left', "+=".concat(slideWidth, "px"));
      slider.animate({
        left: '0px'
      }, 500, function () {
        isAnimating = false;
      });
    }
  };

  $('#arrow-right').click(moveLeft);
  $('#arrow-left').click(moveRight);

  // Modal funkcija
  $('.slide img').click(function () {
    var modal = $('#myModal');
    var modalImg = $('#img01');
    var captionText = $('#caption');
    modal.css('display', 'block');
    modalImg.attr('src', this.src);
    captionText.text(this.alt);
  });

  $('.close').click(function () {
    $('#myModal').css('display', 'none');
  });
});
