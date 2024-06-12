$(document).ready(() => {
    const slider = $('#slider');
    const slideWidth = $('.slide').outerWidth(true);
    let isAnimating = false;

    // Postavljanje fokusa na zadnju sliku u oba reda
    const focusOnLastSlide = () => {
        const lastSlideTopRow = $('#topRow .slide').last();
        const lastSlideBottomRow= $('#bottomRow .slide').last();
        $('#topRow').prepend(lastSlideTopRow);
        $('#bottomRow').prepend(lastSlideBottomRow);
    };

    // Funkcija za pomicanje slidera ulijevo
    const moveLeft = () => {
        if (!isAnimating) {
            isAnimating = true;
            slider.animate({ left: `-${slideWidth}px` }, 500, () => {
                const firstSlideTopRow = $('#topRow .slide').first().detach();
                $('#bottomRow').append(firstSlideTopRow);

                const firstSlideBottomRow = $('#bottomRow .slide').first().detach();
                $('#topRow').append(firstSlideBottomRow);

                slider.css('left', '0');
                isAnimating = false;
            });
        }
    };

    // Funkcija za pomicanje slidera udesno
    const moveRight = () => {
        if (!isAnimating) {
            isAnimating = true;
            const lastSlideTopRow = $('#topRow .slide').last().detach();
            $('#topRow').prepend(lastSlideTopRow);

            const lastSlideBottomRow = $('#bottomRow .slide').last().detach();
            $('#bottomRow').prepend(lastSlideBottomRow);

            slider.css('left', `-${slideWidth}px`);
            slider.animate({ left: '0px' }, 500, () => {
                isAnimating = false;
            });
        }
    };

    $('#arrow-right').click(moveLeft);
    $('#arrow-left').click(moveRight);

    // Modal funikcija
    $('.slide img').click(function() {
        const modal = $('#myModal');
        const modalImg = $('#img01');
        const captionText = $('#caption');

        modal.css('display', 'block');
        modalImg.attr('src', this.src);
        captionText.text(this.alt);
    });

    $('.close').click(() => {
        $('#myModal').css('display', 'none');
    });
});
