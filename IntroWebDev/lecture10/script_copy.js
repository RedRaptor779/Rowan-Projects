// hide and display content using jquery

$('.hide-btn').click(function() {
    // $('.contact-form').css('display', 'none');
    $('.contact-form').fadeOut(5000); // can use slow or fast instead of milliseconds
});

$('.show-btn').click(function() {
    // $('.contact-form').css('display', 'block');
    $('.contact-form').fadeIn(5000); // can use slow or fast instead of milliseconds
});

// use the toggle class built in method
$('#togglebtn').click(function() {
    $('.contact-form').toggleClass('hide');
});

//jquery add and remove class methods 
$('#add-class').click(function() {
    $('p').addClass('blue');
});

$('#remove-class').click(function() {
    $('p').removeClass('blue');
});


// FILE: INDEX_COPY_COPY.html ------------------------------------------------------------------------------------

// note we are going to change the source attribute of an image tag
$('#change-btn').click(function() {
    $('.image').attr('src', 'https://play-lh.googleusercontent.com/wWPjmvVnXNY9ha1YHgVlqAv1F14aoRcRmGxYDTZa0R-RL7f6z7Q7svOHwLGF4MppRp8');
});

//jquery animations 

// $('#animate-circle').click(function() {

//     //.animate ({css params}, speed)
//     $('.circle-div').animate({
//         marginLeft: '300px',
//     }, 2000); // can use slow or fast instead of milliseconds
// });

// animate multiple css properties at the same time
$('#animate-circle').click(function() {

    //.animate ({css params}, speed)
    $('.circle-div').animate({
        marginLeft: '300px',
        marginTop: '50px',
        height: '150px', 
        width: '150px'
    }, 
    2000, 
    function() {
        // this is a callback function that runs after the animation is complete
        alert('Animation complete!');
    }

); // can use slow or fast instead of milliseconds
});