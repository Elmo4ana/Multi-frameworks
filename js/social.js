/*jslint plusplus:true , evil:true , */
/*global $,document, console*/

$(function () {

    'use strict';

    // Open materialize page

    $('.main-section').on("click", "#m", function () {

      $('.frames-box').fadeIn(1000);

        $('.semantic-ui, .bootstrap').fadeOut();

        $('.materialize').fadeIn(2000);

      $('html,body').animate({

        scrollTop: $("#mat").offset().top - 50

      }, 1000);

    });

    // Open semantic ui page


    $('.main-section').on("click", "#s", function () {

      $('.frames-box').fadeIn(1000);

        $('.materialize, .bootstrap').fadeOut();

        $('.semantic-ui').fadeIn(2000);

      $('html,body').animate({

        scrollTop: $("#sem").offset().top - 50

      }, 1000);

    });

    // Open bootstrap page

    $('.main-section').on("click", "#b", function () {

      $('.frames-box').fadeIn(1000);

        $('.materialize, .semantic-ui').fadeOut();

        $('.bootstrap').fadeIn(2000);

      $('html,body').animate({

        scrollTop: $("#boot").offset().top - 50

      }, 1000);

    });


    $('button').click(function () {

        $('html,body').animate({scrollTop: 0}, 1000);

        $('.frames-box').fadeOut(1000);
    });


    $('.down i').click(function () {

        window.alert('the page will open down when you click on the icon');
    });


});
