$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    const cardSearch = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
    $('.sidenav').sidenav();

    $('.sidenav a').click(function (){
        $('.spa').css('display', 'none');
        $('#' + $(this).data('show')).css('display', 'block');
        $('.sidenav').sidenav('close');
    });

    $('.btnSearch').click(function (){
        const kNaam = $('#kNaam').val();
        const pars = {
            format: 'tcg',
            name: kNaam
        };
        $.getJSON(cardSearch, pars, function (data) {
            $('#pDesc').text(data.desc)
        })
    })
});

function onDeviceReady() {
    console.log('Device is ready');
};
