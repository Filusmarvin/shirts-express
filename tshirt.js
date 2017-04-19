// ********************************************
// This is for hover effect over the XL element

	$( '.theSizes' ).hover(function () {
	$(this).find(".menuBox").css("display", "unset")
	}, function () {
		$(this).find(".menuBox").css("display", "none")
	});

	$('ul').on('mouseover' ,'li',function () {
		$(this).css("background-color", "#81bce6");
		$(this).css("color", "white");
	}).on('mouseout', 'li', function (){
		$(this).css("background-color", "white");
		$(this).css('color', "#81bce6")
	})


function textChange(){
	let smallsz = $(this).text();
	$(this).closest(".theSizes").find('.fa-xl').text(smallsz)
}

$('.menuBox ul').on('click' , 'li', textChange)


// *********************************************	this is for the color box to change color ************************************


$('.shirt-box').hover(
	function(){$(this).find('.color-boxes').css("display", "unset")},
 	function(){$(this).find('.color-boxes').css("display", "none")}
 	);

$('.fourboxes').on('click',
	function (){
		let backColor = $(this).css('background-color');
		console.log(backColor)
		$(this).parent().prev('.shirt-color').css('background-color', backColor)
	})
//								=========		Changing the img src  by pressing div box.     =========

function pinkShirt(color){ $(color).parentsUntil('.container').prev('.shirt').attr('src', 'shirts/pink-front.png')}
function greenShirt(color){ $(color).parentsUntil('.container').prev('.shirt').attr('src', 'shirts/green-front.png')}
function yellowShirt(color){ $(color).parentsUntil('.container').prev('.shirt').attr('src', 'shirts/yellow-front.png')}
function blueShirt(color){ $(color).parentsUntil('.container').prev('.shirt').attr('src', 'shirts/blue-front.png')}

function whichColor (){
	let backRGB = $(this).css('background-color');
	if (backRGB == 'rgb(255, 192, 203)'){
		 pinkShirt($(this))
	}
	else if (backRGB == 'rgb(255, 165, 0)'){
		yellowShirt($(this))
	}
	else if (backRGB == 'rgb(129, 188, 230)'){
		blueShirt($(this))

	}
	else if (backRGB == 'rgb(0, 128, 0)'){
		greenShirt($(this))
	};

}


$('.fourboxes').on('click', whichColor)



//********************************************** This is for the shopping cart to add the shirt and the price to the cart. ***********

var total = [];

function toNum (num){
	return parseInt(num)
}

function added (total, sum){
	return total + sum;
}

function putInCart() {
	var price = $(this).parent().next().find('.price').text();
	var name  = $(this).parent().next().find('.name').text();
	total.push(price)
	let totals = total.map(toNum).reduce(added)
	$('#total').text(totals)
	$("#shoppingcart").append('<li>' + name + price + '</li>')
}


$(".fa-shopping-cart").on( 'click', putInCart)

function add(a , b) {
    return( a + b);
}
function addPrices(sum){
	total.reduce(add, 0)
	console.log(total.reduce(add, 0))
	console.log(total.value)
}

$('#total').click(addPrices);

$.get("localhost:3000/user/", function(data){
	let something = data.name;
	let overHere = $('.here');
	overHere.text(something)
});
// use .map on the array to get the strings into numbers which will push it into a new array
