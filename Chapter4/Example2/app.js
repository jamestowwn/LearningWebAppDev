var main = function () {
  'use strict';
  
  var user1ColorOn = 1;
  var user2ColorOn = 1;
  
  var addCommentFromInputBox = function (user, inputValue) {
    var $newComment;

    if (inputValue !== '') {
      $newComment = $('<p class=' + user + '>').text(inputValue);
      $newComment.hide();
      $('.comments').append($newComment);
      $newComment.fadeIn();
    }
  };

  var addCommentFromUser1 = function (inputValue) {
    if (user1ColorOn === 1) {
      addCommentFromInputBox('user1c1', inputValue);
    } else {
      addCommentFromInputBox('user1c2', inputValue);
    }
    user1ColorOn = user1ColorOn * -1 + 1;
    $('.comment-input input').val('');
  };

  var addCommentFromUser2 = function (inputValue) {
    if (user2ColorOn === 1) {
      addCommentFromInputBox('user2c1', inputValue);
    } else {
      addCommentFromInputBox('user2c2', inputValue);
    }
    user2ColorOn = user2ColorOn  * -1 + 1;
    $('.comment-input2 input').val('');
  };

  $('.comment-input button').on('click', function () {
    addCommentFromUser1($('.comment-input input').val());
  });

  $('.comment-input input').on('keypress', function (event) {
    if (event.keyCode === 13) {
      addCommentFromUser1($('.comment-input input').val());
    }
  });

  $('.comment-input2 button').on('click', function () {
    addCommentFromUser2($('.comment-input2 input').val());
  });

  $('.comment-input2 input').on('keypress', function (event) {
    if (event.keyCode === 13) {
      addCommentFromUser2($('.comment-input2 input').val());
    }
  }); 
};

$(document).ready(main);
