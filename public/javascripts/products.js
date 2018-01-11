$(function(){
  pizza();
});

function pizza(){
    $.get( "/pizza", function( data ) {
      $('#data').html("");
      for(var v = 0; v < data.length; v++){
        $('#data').append('<img src="' + data[v].zdjecie + '" class="img-thumbnail col-md-3" alt="' + data[v].nazwa + '">');
      }
  });
};

function miesa(){
    $.get( "/mieso", function( data ) {
      console.log("MIESO!");
      $('#data').html("");
      for(var v = 0; v < data.length; v++){
        $('#data').append('<img src="' + data[v].zdjecie + '" class="img-thumbnail col-md-3" alt="' + data[v].nazwa + '">');
      }
  });

};
