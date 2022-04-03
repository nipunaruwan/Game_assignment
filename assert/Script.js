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

    //some other declarations
    var go_up = false;
    var go_down = true;
    var game_over = false;

    var bleft;
    var pleft;

    /*ssdsdsdsdsd*/

    var bird_go = 'down';
    var bird_right_left = 'right';

    var top_angle = 6; // 7 - 14 ???
    var right_left_angle = 0; //0 - 20

    var move_right = false;
    var move_left = false;

    var move_right1 = false;
    var move_left1 = false;

    var who_won;
/*dsdsdsdsdsds*/
    function repeat() {

        if (game_over === false) {

            if (collision(bird, pole_1)) {

                bleft = parseInt(bird.css('left')) + bird_width / 2;
                pleft = parseInt(pole_1.css('left')) + pole_width / 2;
                bird_right_left = (bleft > pleft ? 'right' : 'left');
                right_left_angle = Math.abs((pleft - bleft)) / 7; //console.log(right_left_angle);
                bird_go = 'down';


            } else if (collision(bird, pole_2)) {
                bleft = parseInt(bird.css('left')) + bird_width / 2;
                pleft = parseInt(pole_2.css('left')) + pole_width / 2;
                bird_right_left = (bleft > pleft ? 'right' : 'left');
                right_left_angle = Math.abs((pleft - bleft)) / 7; //console.log(right_left_angle);
                bird_go = 'up';

            } else
            if (parseInt(bird.css('left')) <= 0) {

                bird_right_left = 'right';

            } else if (parseInt(bird.css('left')) >= container_width - bird_width) {

                bird_right_left = 'left';

            } else if (parseInt(bird.css('top')) <= 0) {

                who_won = 1;
                stop_the_game();

            } else if (parseInt(bird.css('top')) >= (container_height - bird_height)) {

                who_won = 2;
                stop_the_game();

            }
            if (bird_go === 'down') {
                bird_down();
            } else if (bird_go === 'up') {
                bird_up();
            }

            anim_id = requestAnimationFrame(repeat);

        }
    }

    anim_id = requestAnimationFrame(repeat);
/* -----------------------------------------  Controls  ---------------------------------------------------------------------------- */
    function left() {
        if (parseInt(pole_2.css('left')) > 0) {
            pole_2.css('left', parseInt(pole_2.css('left')) - 15);
            move_left = requestAnimationFrame(left);
        }
    }