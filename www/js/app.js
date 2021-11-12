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

    $('.dobbelsteen').on('click', function () {
        let randomGetal = Math.floor(Math.random() * 6) + 1
        $('#d1').text(randomGetal)
    })

    $('.dobbelsteen2').on('click', function () {
        let randomGetal = Math.floor(Math.random() * 6) + 1
        $('#d2').text(randomGetal)
    })

    $('.tails').on('click', function() {
        let randomGetal = Math.floor(Math.random() * 10) + 1

        if (randomGetal > 5 ){
            $('#muntP').text('heads!');
            $('#muntI').attr('src', "img/heads.png")
        } else {
            $('#muntP').text('tails!');
            $('#muntI').attr('src', "img/tails.png")
        }
    });

    $('.tails2').on('click', function() {
        let randomGetal = Math.floor(Math.random() * 10) + 1

        if (randomGetal > 5 ){
            $('#muntP2').text('heads!');
            $('#muntI2').attr('src', "img/heads.png")
        } else {
            $('#muntP2').text('tails!');
            $('#muntI2').attr('src', "img/tails.png")
        }
    });


    $('.btnLPA1').on('click', function () {
        let currentLP = parseInt($('#labelLP1').text())
        let plusofmin = parseInt($('#txtLP1').val())
        
        if (isFinite(plusofmin)){
            let resultaat = currentLP + plusofmin
            if (resultaat < 0){
                $('#labelLP1').text(0)
            } else {
                $('#labelLP1').text(currentLP + plusofmin)
                navigator.vibrate([500]);
            }
        } else {
            $('#labelLP2').text(currentLP)
        }
    })

    $('.btnLPA2').on('click', function () {
        let currentLP = parseInt($('#labelLP2').text())
        let plusofmin = parseInt($('#txtLP2').val())

        if (isFinite(plusofmin)){
            let resultaat = currentLP + plusofmin
            if (resultaat < 0){
                $('#labelLP2').text(0)
            } else {
                $('#labelLP2').text(currentLP + plusofmin)
            }
        } else {
            $('#labelLP2').text(currentLP)
        }
    })

    $('.btnLPM1').on('click', function () {
        let currentLP = parseInt($('#labelLP1').text())
        let plusofmin = parseInt($('#txtLP1').val())

        if (isFinite(plusofmin)){
            let resultaat = currentLP - plusofmin
            if (resultaat < 0){
                $('#labelLP1').text(0)
            } else {
                $('#labelLP1').text(currentLP - plusofmin)
                navigator.vibrate([500]);
            }
        } else {
            $('#labelLP2').text(currentLP)
        }
    })

    $('.btnLPM2').on('click', function () {
        let currentLP = parseInt($('#labelLP2').text())
        let plusofmin = parseInt($('#txtLP2').val())

        if (isFinite(plusofmin)){
            let resultaat = currentLP - plusofmin
            if (resultaat < 0){
                $('#labelLP2').text(0)
            } else {
                $('#labelLP2').text(currentLP - plusofmin)
                navigator.vibrate([500]);
            }
        } else {
            $('#labelLP2').text(currentLP)
        }
    })

    $('.btnReset').on('click', function (){
        $('#labelLP1').text(8000)
        $('#labelLP2').text(8000)
    })


    //toon een random kaart op page load
    $.getJSON(randomCard, function (randomData) {
        let cardtype = randomData.type
        let imageSrc = randomData.card_images[0].image_url_small
        let atkVal = randomData.atk
        let desc = randomData.desc
        let defVal = randomData.def
        let lvl = randomData.level
        let price = randomData.card_prices[0].cardmarket_price

        if(cardtype === "Trap Card" || cardtype === "Spell Card") {
            $('#change-image').attr('src', imageSrc)
            $('#pType').text(cardtype)
            $('#pDesc').text(desc)
            $('#pAtk').text("NA")
            $('#pDef').text("NA")
            $('#pLvl').text("NA")
            $('#pPrijs').text('€' + price)
        } else if (cardtype === "Link Monster"){
            $('#change-image').attr('src', imageSrc)
            $('#pType').text(cardtype)
            $('#pDesc').text(desc)
            $('#pAtk').text(atkVal)
            $('#pDef').text("NA")
            $('#pLvl').text(randomData.linkval)
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
    //zoek een kaart op button click
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
                $('#pPrijs').text('€' + price)
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
