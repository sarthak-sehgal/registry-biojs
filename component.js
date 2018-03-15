var  url_name = window.localStorage.getItem("component");

$.getJSON( "http://139.59.93.32/api/datatest/details/"+url_name, function( data ) {
	alert(data.details);
});
