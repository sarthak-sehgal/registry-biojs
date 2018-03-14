var most_recent_time = document.getElementsByClassName("most_recent_time");
var most_recent_name = document.getElementsByClassName("most_recent_name");
var most_dl_name = document.getElementsByClassName("most_dl_name");
var most_dl_no = document.getElementsByClassName("most_dl_no");
var top_star_name = document.getElementsByClassName("top_star_name");
var top_star_no = document.getElementsByClassName("top_star_no");
var top_ten = document.getElementById("popular-components");

$.getJSON( "http://139.59.93.32/api/datatest/index/", function( data ) {
  var recent = data.most_recent_components;
  var star = data.top_starred_components;
  var dl = data.top_dl_components;

  $.each(dl, function(k, v) {
    most_dl_name[k].innerHTML = (dl[k].name);
    most_dl_no[k].innerHTML = (dl[k].downloads);
  });

  $.each(star, function(k, v) {
    top_star_name[k].innerHTML = (star[k].name);
    top_star_no[k].innerHTML = (star[k].stars);
  });

  $.each(recent, function(k, v) {
    most_recent_name[k].innerHTML = (recent[k].name);
    most_recent_time[k].innerHTML = (recent[k].modified_time.substring(0, 10));
  });
});

$.getJSON( "http://139.59.93.32/api/datatest/top/", function( data ) {
  var components = data.top_components;

  $.each(components, function(k, v) {
    top_ten.innerHTML += '<a href="component.html" onclick="function(){localStorage.setItem("component", "hurray");}"><div class="component" style="cursor: pointer"><div class="component-img"><img src="'+components[k].icon_url+'"></div><div class="component-main-misc"><div class="component-info-main"><div class="component-name">'+components[k].name+'</div><div class="component-author">Max Franz</div><div class="component-info">'+components[k].short_description+'</div><div class="component-tags"><label>Tags:</label>'+components[k].tags+'</div></div><div class="component-misc"><div class="component-downloads"><span>'+components[k].downloads+'</span><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></div><div class="component-stars"><span>'+components[k].stars+'</span><span class="glyphicon glyphicon-star" aria-hidden="true"></span></div><div class="component-modified"><span>'+components[k].modified_time.substring(0, 10)+'</span><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span></div></div></div></div></a>';
    // var component = document.getElementsByClassName('component')[k];
    function setItem() {
		localStorage.setItem("component", "hurray");
    };
  });
});
