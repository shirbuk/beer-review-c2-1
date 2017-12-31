// // debugger;

// function BeerReviewApp () {
// var beers = [];

// function addBeer(name, category, rate) {
//     var beer = {
//         name: name,
//         category: category,
//         rate: rate
//     }
//     beers.push(beer);
// }

// function updateBeers() {
//     $(".beers").find("li").remove();
//     for (var i = 0; i < beers.length; i++) {
//         var beer = beers[i];
//         $(".beers-list").append("<li>" + beer.name + " " + beer.category + "</li>");
//     }
// }

// $(".post-beer").click(function () {
//     addBeer($(".beer-input").val(), $(".category-input").val())
//     updateBeers(); 
//     console.log("sucess");
// })



var BeerReviewApp = function () {
    var beers = [];  
  
    var addBeer = function (beerName, beerCategory) {
        beers.push({
             name: beerName, 
             category: beerCategory });
      };

    var beerList = $('.beers-list');
  
    var updateBeers = function () {
      beerList.empty();
  
      for (var i = 0; i < beers.length; i++) {
        var beerHTML = "<li>" + beers[i].name + " - " + beers[i].category + "</li>";
  
        beerList.append(beerHTML);
      }
    };
  

  
    return {
      updateBeers: updateBeers,
      addBeer: addBeer
    }
  };
  
  var app = BeerReviewApp();
  
  $('.post-beer').on('click', function () {

    app.addBeer($('.beer-input').val(), $('.category-input').val());

    app.updateBeers();
  })

  //changes-week-3
  // another