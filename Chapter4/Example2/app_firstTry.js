var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p class='user1'>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

    var addCommentFromInputBox2 = function () {
        var $new_comment;

        if ($(".comment-input2 input").val() !== "") {
            $new_comment = $("<p class='user2'>").text($(".comment-input2 input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input2 input").val("");
        }
    };

    $(".comment-input2 button").on("click", function (event) {
        addCommentFromInputBox2();
    });

    $(".comment-input2 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox2();
        }
    }); 
};

$(document).ready(main);
