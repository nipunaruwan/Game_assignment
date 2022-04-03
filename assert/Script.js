$(function () {

    var anim_id;

    //saving dom objects to variables
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var restart_btn = $('#restart_btn');

    //saving some initial setup
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('left'));
    var pole_width = parseInt(pole.width());
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var bird_width = parseInt(bird.width());