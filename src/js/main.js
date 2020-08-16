// $('.navbar-toggler').click(function() {
//   $('.navbar-collapse').addClass('open-nav');
//   $('.navbar-toggler').addClass('open-toggler');
// })
//
// $('.navbar-toggler').click(function() {
//   $('.navbar-collapse').removeClass('open-nav');
//   $('.navbar-toggler').removeClass('open-toggler');
// })

$('.navbar-toggler').click(function(){
    $('.navbar-collapse').toggleClass('open-nav');
    $('.navbar-collapse-overlay').fadeToggle();
    $('.navbar-toggler').toggleClass('open');
});

$('.navbar-collapse-overlay').click(function(){
    $('.navbar-collapse').toggleClass('open-nav');
    $('.navbar-collapse-overlay').fadeToggle();
    $('.navbar-toggler').toggleClass('open');
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'gorizontal',
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    // el: '.swiper-scrollbar',
  },
})

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).ready(function(){
    $('#modalPricePack').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget);
      var subjId = button.data('whatever');
      $('#subjid').val(subjId);
    })
})

$(function(){
  if ( $(window).width() < 768 ) {
    $('.owl-carousel').owlCarousel({
      autoplay: false,
      loop: true,
      nav: true,
      stagePadding: 50,
      margin: 50,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        568: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
  } else {
    $('.owl-carousel').owlCarousel({
      autoplay: false,
      loop: false,
      nav: false,
      margin: 50,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        568: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
  }
});

$(document).ready(function(){

 h = $('.post-gallery-imgs').height()-25;
 $('.post-gallery-gal--img__img').height(h);
 console.log (h);

});


// $(function(){
//   if ( $(window).width() < 990 ) {
//     $(window).scroll(function() {
//
//     });
//   } else {
//     $(window).scroll(function() {
//         var top = $(document).scrollTop();
//         if (top < 88) $(".navbar-uss").removeClass('navbar-fixed');
//         else $(".navbar-uss").addClass('navbar-fixed');
//     });
//   }
// });
