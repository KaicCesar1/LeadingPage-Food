$(document).ready(function() {
    $('#btn-mobile').on('click', function () {
        $('#mobile-menu').toggleClass('active');
        $('#btn-mobile').find('i').toggleClass('fa-x');
    });
});