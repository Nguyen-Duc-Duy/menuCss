$(function() {
  var $navToggle = $('.nav-toggle');
  var $nav = $('.nav');
  var $firstLevelItems = $('.first-level-item');
  var $navOverlay = $('.nav-open-overlay');
  var $hamburger = $('.c-hamburger');
  var $logoLink = $('.logo-link');
  
  var navOpen = false;

  $navToggle.click(function() {
    toggleBoth();
  });
  
  $firstLevelItems.click(function() {
    var open = $(this).hasClass('first-level-item--open');
    var $this = $(this);
    
    if(open) {
      $this.removeClass('first-level-item--open');
    } else {
      $this.addClass('first-level-item--open');
    }
  });
  
  var spinIn = function() {
    TweenMax.staggerTo($firstLevelItems, 0.25, {rotationY:0, opacity:1, delay: 0.35}, 0.1);
  };
  
  var spinOut = function() {
    TweenMax.staggerTo($firstLevelItems, 0.15, {rotationY:-180, opacity:0}, 0.1);
  };
  
  var logoIn = function() {
    TweenMax.to($logoLink, 0.35, {y:0, delay: 0.6, ease: Back.easeOut});
  };
  var logoOut = function() {
    TweenMax.to($logoLink, 0.35, {y:"-10em", ease: Back.easeIn});
  };
  
  
  // TweenMax.staggerTo($firstLevelItems, 1, {rotationY:0, opacity:1}, 0.2);
  // Close nav when clicking off the nav while it is open
  $navOverlay.click(function() {
    if(navOpen) {
      toggleBoth();
    }
  });
  
  var toggleBoth = function() {
    toggleNav();
    toggleHamburger();
  }
  
  var toggleNav = function() {
    if(navOpen) {
      $nav.removeClass('nav--open');
      $navOverlay.removeClass('nav-open-overlay--open');
      $firstLevelItems.removeClass('first-level-item--open');
      navOpen = false;
      spinOut();
      logoOut();
    } else {
      $nav.addClass('nav--open');
      $navOverlay.addClass('nav-open-overlay--open');
      navOpen = true;
      spinIn();
      logoIn();
    }  
  };
  
  var toggleHamburger = function() {
    var open = $nav.hasClass('nav--open');
    if(!open) {
      $hamburger.removeClass('is-active');
    } else {
      $hamburger.addClass('is-active');
    }
  };
});