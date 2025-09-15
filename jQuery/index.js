$('h1').addClass('big-title');

$('button').html('<strong>Home</strong>');

$('a').attr('href', 'https://www.yahoo.com');


$('button').click(function() {
    $('h1').css('color', 'purple');
});

$('body').keypress(function(event) {
    $('h1').text(event.key);
});