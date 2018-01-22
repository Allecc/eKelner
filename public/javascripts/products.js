
var zamowione = new Array();
var suma = 0;
var statusInfo = 0;

$(function(){
  $("#zamowienie").hide();
  pizza();
});

function pizza(){
    $.get( "/pizza", function( data ) {
      $('#data').html("");
      for(var v = 0; v < data.length; v++){
          let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a data-toggle="modal" href="#productModal" onclick="wiecej( ' + data[v].id + ')">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

        $('#data').append(products);
      }
  });
};



function miesa(){
    $.get( "/mieso", function( data ) {
      console.log("MIESO!");
      $('#data').html("");
      for(var v = 0; v < data.length; v++){
          let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a data-toggle="modal" href="#productModal" onclick="wiecej( ' + data[v].id + ')">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

        $('#data').append(products);
      }
  });

};

function przystawki(){
    $.get( "/przystawki", function( data ) {
        console.log("PRZYSTAWKI!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a data-toggle="modal" href="#productModal" onclick="wiecej( ' + data[v].id + ')">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};


function zupy(){
    $.get( "/zupy", function( data ) {
        console.log("ZUPY!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a data-toggle="modal" href="#productModal" onclick="wiecej( ' + data[v].id + ')">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};


function napoje(){
    $.get( "/napoje", function( data ) {
        console.log("NAPOJE!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a data-toggle="modal" href="#productModal" onclick="wiecej( ' + data[v].id + ')">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};

function surowki(){
    $.get( "/surowki", function( data ) {
        console.log("SURÓWKI!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a data-toggle="modal" href="#productModal" onclick="wiecej( ' + data[v].id + ')">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};



function ryby(){
    $.get( "/ryby", function( data ) {
        console.log("RYBY!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a data-toggle="modal" href="#productModal" onclick="wiecej( ' + data[v].id + ')">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};

function wiecej(id) {
  $.get("/produkty/"+id, function(data){
    $("#productHeader").html(data.nazwa);
    $("#productBody").html('<div class="col-md-6"><p> ' + data.opis + '</p><p style="margin-top: 40px;"><strong> Składniki: ' + data.skladniki + '</strong></p></div><img class="col-md-6" src="' + data.zdjecie + '" alt="' + data.nazwa + '"/>');
    $("#productBody").addClass("modal-body").css("min-height", "400px");
    $("#productFooter").html('<h3 class="col-md-12"> Cena: '+ data.cena + '</h3><button type="button" class="btn btn-default modalButton" data-dismiss="modal">Zamknij</button>');
    $("#productFooter").addClass("modal-footer");
  });
}

function status(){
  switch (statusInfo) {
    case 0:
      $('#statusBody').html("<h3> Proszę złożyć zamówienie. </h3>");
      break;
    case 1:
      $('#statusBody').html("<h3> Zamówienie w przygotowaniu! </h3>");
      break;
    case 2:
      $('#statusBody').html("<h3> Zamówienie w drodze! </h3>");
      break;
    case 3:
      $('#statusBody').html("<h3> Zamówienie dostarczono! Do zapłaty: " + suma + " zł </h3><button onclick=kelner() class='btn btn-default'>Wezwij kelnera</button>");
      break;
    case 4:
      $('#statusBody').html("<h3> Kelner w drodze! </h3>");
      break;
    default: $("#statusBody").html("informacje o statusie zamówenia");
  }
}

function kelner(){
  alert("Kelner w drodze!");
  $("button").removeClass("btn-default").addClass("btn-danger disabled");
  $(".modalButton").removeClass("btn-danger disabled").addClass("btn-default");
  $("#zamowienie").html("<h1> Wezwano kelnera w celu zapłaty! </h1>");
  statusInfo = 4;
}

function zamowienie(id, cena){
  $("#zamowienie").show();
  $("#lista").html("");

  if(zamowione.length == 0){
    zamowione.push({id: id, ilosc: 1});
  } else {
    let znalezione = 0;
    for(let i = 0; i < zamowione.length; i++){
      if(zamowione[i].id == id){
        zamowione[i] = {
          id: id,
          ilosc: zamowione[i].ilosc +1
        };
        znalezione = 1;
        break;
      }
    }

    if(znalezione == 0){
      zamowione.push({id: id, ilosc: 1});
    }
  }

  suma += parseInt(cena);
  for(let i = 0; i < zamowione.length; i++){
    $.get("/produkty/" + zamowione[i].id, function(data) {
      let products = '<div class="col-md-1 productContainer"><img src="' + data.zdjecie + '" alt="' + data.nazwa + '"/><span> ' + data.nazwa + ' x ' + zamowione[i].ilosc + '</span></div>';
      $("#lista").append(products);
    });
  }

  $("#lista").append("<h1> Cena: " + suma + "</h1>");
}

function wyslij(){
  console.log(zamowione);
  statusInfo = 1;
  $("button").removeClass("btn-default").addClass("btn-danger disabled");
  $(".modalButton").removeClass("btn-danger disabled").addClass("btn-default");
  $("#zamowienie").html("<h1> Twoje zamowienie zostalo wyslane! </h1>");
  setTimeout(function(){
    statusInfo = 2;
    $("#zamowienie").append('<button onclick="wincyj()" class="btn btn-default">Zamów więcej</button>');
  }, 3000);
  setTimeout(function(){
    statusInfo = 3;
    alert("Zamówienie dostarczono!")
  }, 5000);
}

var caleZamowienie = new Array();
function wincyj(){
  caleZamowienie.push(zamowione);
  zamowione = new Array();
  $("button").removeClass("btn-danger disabled").addClass("btn-default");
  $("#zamowienie").html('<div id="lista" class="col-md-12"></div><button id="kuchnia" class="btn btn-default" onclick="wyslij()"> Wyślij do kuchni </button>');
}
