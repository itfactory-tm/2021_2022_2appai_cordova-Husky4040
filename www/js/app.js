$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    $('.sidenav').sidenav();

    $('.sidenav a').click(function (){
        $('.spa').css('display', 'none');
        $('#' + $(this).data('show')).css('display', 'block');
        $('.sidenav').sidenav('close');
    });
});

function onDeviceReady() {
    console.log('Device is ready');
};
