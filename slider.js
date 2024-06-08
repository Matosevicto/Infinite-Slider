$(document).ready(function() {
    const slider = $('#slider');
    const slideWidth = $('.slide').outerWidth(true);
    let isAnimating = false;

    $('#arrow-right').click(function() {
        if (!isAnimating) {
            isAnimating = true;
            slider.animate({left: `-=${slideWidth}`}, 500, function() {
                // Move the last image from the first row to the second row
                const lastSlideRow1 = $('#row1 .slide').last().detach();
                $('#row2').prepend(lastSlideRow1);

                // Move the last image from the second row to the first row
                const lastSlideRow2 = $('#row2 .slide').last().detach();
                $('#row1').prepend(lastSlideRow2);

                slider.css('left', '0');
                isAnimating = false;
            });
        }
    });

    $('#arrow-left').click(function() {
        if (!isAnimating) {
            isAnimating = true;
            // Move the first image from the second row to the first row
            const firstSlideRow2 = $('#row2 .slide').first().detach();
            $('#row1').append(firstSlideRow2);

            // Move the first image from the first row to the second row
            const firstSlideRow1 = $('#row1 .slide').first().detach();
            $('#row2').append(firstSlideRow1);

            slider.css('left', `-=${slideWidth}`);
            slider.animate({left: `+=${slideWidth}`}, 500, function() {
                isAnimating = false;
            });
        }
    });

    // Modal functionality
    $('.slide img').click(function() {
        var modal = $('#myModal');
        var modalImg = $('#img01');
        var captionText = $('#caption');

        modal.css('display', 'block');
        modalImg.attr('src', this.src);
        captionText.text(this.alt);
    });

    $('.close').click(function() {
        $('#myModal').css('display', 'none');
    });
});
