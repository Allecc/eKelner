$(function(){
  $("#zamowienie").hide();
  pizza();
});

function pizza(){
    $.get( "/pizza", function( data ) {
      $('#data').html("");
      for(var v = 0; v < data.length; v++){
        let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

        $('#data').append(products);
      }
  });
};



function miesa(){
    $.get( "/mieso", function( data ) {
      console.log("MIESO!");
      $('#data').html("");
      for(var v = 0; v < data.length; v++){
        let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

        $('#data').append(products);
      }
  });

};

function przystawki(){
    $.get( "/przystawki", function( data ) {
        console.log("PRZYSTAWKI!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};


function zupy(){
    $.get( "/zupy", function( data ) {
        console.log("ZUPY!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};


function napoje(){
    $.get( "/napoje", function( data ) {
        console.log("NAPOJE!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};

function surowki(){
    $.get( "/surowki", function( data ) {
        console.log("SURÓWKI!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};



function ryby(){
    $.get( "/ryby", function( data ) {
        console.log("RYBY!");
        $('#data').html("");
        for(var v = 0; v < data.length; v++){
            let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow" onclick="zamowienie(' + data[v].id +  ' , ' + data[v].cena + ')">Zamów</button></div></div></div></a></div>';

            $('#data').append(products);
        }
    });

};














var zamowione = new Array();
var suma = 0;
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
