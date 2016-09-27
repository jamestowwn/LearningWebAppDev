var main = function () {
    "use strict";

    var addCommentFromInputBox = function (user, inputValue) {
        var $new_comment;

        if (inputValue !== "") {
            $new_comment = $("<p class='" + user + "'>").text(inputValue);
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox("user1", $(".comment-input input").val());
        $(".comment-input input").val("");
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox("user1", $(".comment-input input").val());
            $(".comment-input input").val("");
        }
    });

    $(".comment-input2 button").on("click", function (event) {
        addCommentFromInputBox("user2", $(".comment-input2 input").val());
        $(".comment-input2 input").val("");
    });

    $(".comment-input2 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox("user2", $(".comment-input2 input").val());
            $(".comment-input2 input").val("");
        }
    }); 
};

$(document).ready(main);
