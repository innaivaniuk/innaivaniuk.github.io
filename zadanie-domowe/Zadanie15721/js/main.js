$(function(){
 
    $('.button').click(function () {

    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) { 
       
    $('#dane-programisty').after(
        '<br> Imię:'+ data.imie + 
        '<br> Nazwisko:' + data.nazwisko + 
        '<br> Zawod:' + data.zawod + 
        '<br> Firma:' + data.firma)
       })

    }); 
         
}); 

    