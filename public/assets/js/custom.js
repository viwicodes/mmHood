/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
(function ($) {
  'use strict'
  $('.owl-men-item').owlCarousel({
    items: 5,
    loop: true,
    dots: true,
    nav: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  $('.owl-women-item').owlCarousel({
    items: 5,
    loop: true,
    dots: true,
    nav: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  $('.owl-kid-item').owlCarousel({
    items: 5,
    loop: true,
    dots: true,
    nav: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  $(window).scroll(function () {
    const scroll = $(window).scrollTop()
    const box = $('#top').height()
    const header = $('header').height()

    if (scroll >= box - header) {
      $('header').addClass('background-header')
    } else {
      $('header').removeClass('background-header')
    }
  })

  // Window Resize Mobile Menu Fix
  mobileNav()

  // Scroll animation init
  window.sr = new scrollReveal()

  // Menu Dropdown Toggle
  if ($('.menu-trigger').length) {
    $('.menu-trigger').on('click', function () {
      $(this).toggleClass('active')
      $('.header-area .nav').slideToggle(200)
    })
  }

  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        const width = $(window).width()
        if (width < 991) {
          $('.menu-trigger').removeClass('active')
          $('.header-area .nav').slideUp(200)
        }
        $('html,body').animate({
          scrollTop: (target.offset().top) - 80
        }, 700)
        return false
      }
    }
  })

  $(document).ready(function () {
    // $(document).on('scroll', onScroll)

    // smoothscroll
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault()
      $(document).off('scroll')

      $('.scroll-to-section a').each(function () {
        $(this).removeClass('active')
      })
      $(this).addClass('active')

      var target = this.hash
      const menu = target
      var target = $(this.hash)
      $('html, body').stop().animate({
        scrollTop: (target.offset().top) - 79
      }, 500, 'swing', function () {
        window.location.hash = target
        // $(document).on('scroll', onScroll)
      })
    })
  })

//   function onScroll (event) {
//     const scrollPos = $(document).scrollTop()
//     $('.nav a').each(function () {
//       const currLink = $(this)
//       const refElement = $(currLink.attr('href'))
//       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//         $('.nav ul li a').removeClass('active')
//         currLink.addClass('active')
//       } else {
//         currLink.removeClass('active')
//       }
//     })
//   }

  // Page loading animation
  $(window).on('load', function () {
    if ($('.cover').length) {
      $('.cover').parallax({
        imageSrc: $('.cover').data('image'),
        zIndex: '1'
      })
    }

    $('#preloader').animate({
      opacity: '0'
    }, 600, function () {
      setTimeout(function () {
        $('#preloader').css('visibility', 'hidden').fadeOut()
      }, 300)
    })
  })

  // Window Resize Mobile Menu Fix
  $(window).on('resize', function () {
    mobileNav()
  })

  // Window Resize Mobile Menu Fix
  function mobileNav () {
    const width = $(window).width()
    $('.submenu').on('click', function () {
      if (width < 767) {
        $('.submenu ul').removeClass('active')
        $(this).find('ul').toggleClass('active')
      }
    })
  }
})(window.jQuery)
