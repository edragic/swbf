$(function(){//super DUUUUUUUUUMB right now
    var questionList = [
      {
        name: 'Plo Koon',
        answer: 'starwars'
      }
    ];

    var currentQuestion = questionList[0];

    $('button').on('click', function(e) {
      var $target = $(e.target);
      if($target.hasClass(currentQuestion.answer)) {
        $('.question-holder').addClass(currentQuestion.answer);
      } else {
        $('.question').addClass('wrong');
      }
    });

    $('#timer').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
        function(e) {
      $('.question').addClass('wrong');
    });
});
