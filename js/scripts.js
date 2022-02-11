
/* This function shows and hides the filters list 
$('.show_filters').on('click', function() {

   $('.filters_list').toggle(300)


    return false
}) */


/* Shows and hides filters whilst changing the text on click */
$('.show_filters').on('click', function() {

    if ($('.filters_list').is(':visible')) {

    $('.filters_list').slideUp()
    $('.show_filters').text('Show Filters')

    } else {

    $('.filters_list').slideDown()
    $('.show_filters').text('Hide Filters')
    }

    return false
})


$('.filters_list a').on('click', function() {

    var filter = $(this).data('filter')
   

    $('.product_vinyl').hide()
    $(filter).show()

    $('.filters_list a').removeClass('selected')
    $(this).addClass('selected')

    console.log('filter')
    return false
})





