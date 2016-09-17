$(document).ready(function() {

   $('#tweet-controls').hide();

   $('.tweet-compose').on('click', function() {

      $(this).css('height', 'sem');
      $('#tweet-controls').show();

    })

      $('.tweet-compose').on('keyup keydown', function(){
      var i = $(this).val().length;
      $('#char-count').text(140 - i);
      var count = $('#char-count').text()

     if (count < 10 && count > 0){
       $('#char-count').css('color', 'red');
      }
      else if (count > 10) {
        $('#char-count').css('color', 'black');
       }
       else if (count <= 0) {
         $('tweet-submit').attr('disable', true);
       }
       else {
         $('tweet-submit').attr('disable', false);
      }
    })


     $('#tweet-submit').on('click', function (){
       var newTweet = $('.tweet').eq(0).clone();
         newTweet.find('.avatar').prop("src", "img/damenleeturks.jpg")
         newTweet.find('.fullname').text();
         newTweet.find('.username').text();
         newTweet.find('.tweet-text').text($('.tweet-compose').val());
           if ($('.tweet-compose').val().length <= 0){
             alert('You can not send a blank tweet!!');
           }
           else{
             $('#stream').prepend(newTweet);
           };
 });

    $('body').on('mouseenter', '.tweet', function() {
      $('.tweet-actions').css('display', 'block');

    })
    $('body').on('mouseleave', '.tweet', function() {
      $('.tweet-actions').css('display', 'none');

    })
});
