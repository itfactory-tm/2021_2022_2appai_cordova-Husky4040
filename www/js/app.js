$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    const cardSearch = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
    const randomCard = 'https://db.ygoprodeck.com/api/v7/randomcard.php'
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
        $.getJSON(cardSearch, pars, function (myData) {
            let cardtype = myData.data[0].type
            let imageSrc = myData.data[0].card_images[0].image_url_small
            let atkVal = myData.data[0].atk
            let desc = myData.data[0].desc
            let defVal = myData.data[0].def
            let lvl = myData.data[0].level
            let price = myData.data[0].card_prices[0].cardmarket_price


            if(cardtype === "Trap Card" || cardtype === "Spell Card") {
                $('#change-image').attr('src', imageSrc)
                $('#pType').text(cardtype)
                $('#pDesc').text(desc)
                $('#pAtk').text("NA")
                $('#pDef').text("NA")
                $('#pLvl').text("NA")
                $('#pPrijs').text(price)
            } else if (cardtype === "Link Monster"){
                $('#change-image').attr('src', imageSrc)
                $('#pType').text(cardtype)
                $('#pDesc').text(desc)
                $('#pAtk').text(atkVal)
                $('#pDef').text("NA")
                $('#pLvl').text(myData.data[0].linkval)
                $('#pPrijs').text('€' + price)
            }
            else {
                $('#change-image').attr('src', imageSrc)
                $('#pType').text(cardtype)
                $('#pDesc').text(desc)
                $('#pAtk').text(atkVal)
                $('#pDef').text(defVal)
                $('#pLvl').text(lvl)
                $('#pPrijs').text('€' + price)
            }
        })
    })
});

function onDeviceReady() {
    console.log('Device is ready');
};
