$(function () {

    // jq .hoverでカートに追加する
    var duration = 300;
    var duration5 = 500;
    var $st_con = $('.store_container');
    // var $span_jq = $st_con.find('span');

    $st_con
        .on('mouseover', function () {
            $(this).find('span').stop(true).animate({
                opacity: 1
            }, duration
            );
        })
        .on('mouseout', function () {
            $(this).find('span').stop(true).animate({
                opacity: 0
            }, duration5
            );
        });
});

$(function () {
    $('.burger').click(function () {
        $('.burger').toggleClass('is_active');
        $('.grid_rows4').toggleClass('is_active');
    });

});
