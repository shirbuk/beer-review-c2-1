// debugger;
var beers = [];

function addBeer(name, category, rate) {
    var beer = {
        name: name,
        category: category,
        rate: rate
    }
    beers.push(beer);
}

function renderBeers() {
    $(".beers").find("li").remove();
    for (var i = 0; i < beers.length; i++) {
        var beer = beers[i];
        $(".beers-list").append("<li>" + beer.name + " " + beer.category + "</li>");
    }
}

$(".post-beer").click(function () {
    addBeer($(".beer-input").val(), $(".category-input").val())
    renderBeers(); 
    console.log("sucess");
})


// $(".sort-btn").click(function () {
//     // addbeer($beer - inp)

// }


//changes- new branch
