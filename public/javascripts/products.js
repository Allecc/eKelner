$(function(){
  pizza();
});

function pizza(){
    $.get( "/pizza", function( data ) {
      $('#data').html("");
      for(var v = 0; v < data.length; v++){
        let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow">Zamów</button></div></div></div></a></div>';

        $('#data').append(products);
      }
  });
};

function miesa(){
    $.get( "/mieso", function( data ) {
      console.log("MIESO!");
      $('#data').html("");
      for(var v = 0; v < data.length; v++){
        let products = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 productContainer"><a><img src="' + data[v].zdjecie + '" alt="' + data[v].nazwa + '"/><div class="overlay"><div class="textOverly"><h2>' + data[v].nazwa + '</h2><span class="hidden-md hidden-sm hidden-xs">' + data[v].opis + '</span> <a href="">Więcej...</a><div class="product-price"><span class="col-md-6 products-links"><i aria-hidden="true" class="fa fa-shoppicart fa-lg"></i> Cena: ' + data[v].cena + ' zł</span><button class="btn btn-default btnZamow">Zamów</button></div></div></div></a></div>';

        $('#data').append(products);
      }
  });

};
