$(function() {
	//alert("Everything is ready, let's do this")
});

	$('#updateHomes').removeClass('btn btn-danger').addClass('btn btn-success');

	var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );

	$newLink.appendTo('body');

	var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];
 $('#updateHomes').on('click', function() {
    console.log(this);
for (var i = 0; i < newHomes.length; i++) {
	var home = newHomes[i];
	var $newRow = $( "<tr><td>" + home.address + '</td><td>' + home.sf + '</td><td>' + home.bedrooms + '</td><td>' + home.baths + '</td><td>' + home.price + '</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');

   $newRow.appendTo('tbody').fadeIn(1000);
    }
});
