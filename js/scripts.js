$(document).ready(function() {
  $('button#dark').click(function() {
    $('body').removeClass();
    $('body').addClass('body2');
    $('nav').addClass('navbar-dark bg-dark');
    $('h1').addClass('jumbotron2');
  });
  $('button#light').click(function() {
    $('body').removeClass();
    $('nav').removeClass('navbar-dark bg-dark');
    $('h1').removeClass('jumbotron2');
  });
});