function init()
{
	var top_ten = document.getElementById("popular-components");
	var topDownloads = document.getElementsByClassName("topDownloads")[0];
	var topStars = document.getElementsByClassName("topStars")[0];
	var mostRecent = document.getElementsByClassName("mostRecent")[0];

	$.getJSON( "http://139.59.93.32/api/datatest/index/", function( data ) {
	  var recent = data.most_recent_components;
	  var star = data.top_starred_components;
	  var dl = data.top_dl_components;

	  $.each(dl, function(k, v) {
	  	topDownloads.innerHTML += '<a class="top_component_link" style="text-decoration: none; color: #000;" href="component.html" onclick="setItem(this.id)" id="'+dl[k].url_name+'"><li class="list-group-item top_component_link"><div class="badge"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span><span class="most_dl_no">'+dl[k].downloads+'</span></div><span class="most_dl_name">'+dl[k].name+'</span></li></a>';
	  });

	  $.each(star, function(k, v) {
	  	topStars.innerHTML += '<a class="top_component_link" style="text-decoration: none; color: #000;" href="component.html" onclick="setItem(this.id)" id="'+star[k].url_name+'"><li class="list-group-item top_component_link"><div class="badge"><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="top_star_no">'+star[k].stars+'</span></div><span class="top_star_name">'+star[k].name+'</span></li></a>';
	  });

	  $.each(recent, function(k, v) {
	  	mostRecent.innerHTML += '<a class="top_component_link" style="text-decoration: none; color: #000;" href="component.html" onclick="setItem(this.id)" id="'+recent[k].url_name+'"><li class="list-group-item top_component_link"><div class="badge"><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span><span class="most_recent_time">'+recent[k].modified_time.substring(0, 10)+'</span></div><span class="most_recent_name">'+recent[k].name+'</span></li></a>';
	  });
	});
	$.getJSON( "http://139.59.93.32/api/datatest/top/", function( data ) {
	  var components = data.top_components;

	  $.each(components, function(k, v) {
	    top_ten.innerHTML += '<a style="text-decoration: none; color: #000;" href="component.html" onclick="setItem(this.id)" id="'+components[k].url_name+'"><div class="component" style="cursor: pointer"><div class="component-img"><img src="'+components[k].icon_url+'"></div><div class="component-main-misc"><div class="component-info-main"><div class="component-name">'+components[k].name+'</div><div class="component-author">Max Franz</div><div class="component-info">'+components[k].short_description+'</div><div class="component-tags"><label>Tags:</label>'+components[k].tags+'</div></div><div class="component-misc"><div class="component-downloads"><span>'+components[k].downloads+'</span><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></div><div class="component-stars"><span>'+components[k].stars+'</span><span class="glyphicon glyphicon-star" aria-hidden="true"></span></div><div class="component-modified"><span>'+components[k].modified_time.substring(0, 10)+'</span><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span></div></div></div></div></a>';
	    // var component = document.getElementsByClassName('component')[k];
	  });
	});
	$.getJSON( "https://api.github.com/repos/cytoscape/cytoscape.js", function(data) { 
		// dummy call
	});
}
init();