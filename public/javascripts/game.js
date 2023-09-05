var req_pattern = [];
var user_pattern = [];
var all_colors = ["blue", "red", "green", "yellow"];
var game_status = 0;
var level = 0;
var pattern_step = 0


$(document).keydown(function(event) {
        if (event.key == "a" || event.key == "A" || game_status === 1) {
                game_status = 1;
                getNext();
        }
});


$(".btn-game").click(function(event) {
        user_pattern.push(event.target.id);
        // console.log(req_pattern, user_pattern);
        // console.log(pattern_step, level);
        playSound(event.target.id);
        if (req_pattern[pattern_step] != user_pattern[pattern_step]) {
                $("h1").text("Game Over");
                game_status = 0;
                setTimeout(function() {
                        $("h1").text("Refresh me, score: " + level);
                }, 2000);
        }
        pattern_step = pattern_step + 1;
        if (pattern_step === level) {
                // console.log("emptyed");
                setTimeout(function() {
                        user_pattern = [];
                        pattern_step = 0;
                        getNext();
                }, 1000);
        }
});


function getNext() {
        level = level + 1;
        $("h1").text("Level  : " + level);
        if (game_status) {
                var color = getRandomColor();
                playSound(color);
                req_pattern.push(color);
        }
}

function getRandomColor() {
        var random_number = Math.floor(Math.random() * 100000) % 4
        return all_colors[random_number]
}


function playSound(color) {
        switch (color) {

                case "blue":
                        $(".blue").addClass("pressed");
                        setTimeout(function() {
                                $(".blue").removeClass("pressed");
                        }, 100);
                        var audio = new Audio("sounds/blue.mp3");
                        audio.play();
                        break;

                case "red":
                        $(".red").addClass("pressed");
                        setTimeout(function() {
                                $(".red").removeClass("pressed");
                        }, 100);
                        var audio = new Audio("sounds/red.mp3");
                        audio.play();
                        break;

                case "green":
                        $(".green").addClass("pressed");
                        setTimeout(function() {
                                $(".green").removeClass("pressed");
                        }, 100);
                        var audio = new Audio("sounds/green.mp3");
                        audio.play();
                        break;

                case "yellow":
                        $(".yellow").addClass("pressed");
                        setTimeout(function() {
                                $(".yellow").removeClass("pressed");
                        }, 100);
                        var audio = new Audio("sounds/yellow.mp3");
                        audio.play();
                        break;

                default:

        }
}
