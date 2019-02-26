$(document).ready(function(){
  $("#fav-list").hide();

  $("#favorite-form form").submit(function(){
    var nameInput = $("input#name").val();
    var animalInput = $("input#animal").val();
    var colorInput = $("input#color").val();
    var seasonInput = $("input#season").val();
    var favoriteThings = [];

    event.preventDefault();

    favoriteThings.push(nameInput, animalInput, colorInput, seasonInput);

    var favoriteColor = [favoriteThings[2]];
    var favoriteSeason = [favoriteThings[3]];

    $("#name-item").text(nameInput);
    $("#animal-item").text(animalInput);
    $("#color-item").text(colorInput);
    $("#season-item").text(seasonInput);

    $("#fav-list").show();
    alert(favoriteColor);
  });
});
