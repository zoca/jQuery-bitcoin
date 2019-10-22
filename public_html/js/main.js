$(document).ready(function () {
    // lead-slider
    
    if ($('.lead-slider').length > 0) {
        $('.lead-slider').bxSlider();

    }

      //counter up

      if($('.counter').length > 0){
        $('.counter').counterUp({
            time: 2000
        });
    }
});