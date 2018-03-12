var most_recent_time = document.getElementsByClassName("most_recent_time");
var most_recent_name = document.getElementsByClassName("most_recent_name");
var most_dl_name = document.getElementsByClassName("most_dl_name");
var most_dl_no = document.getElementsByClassName("most_dl_no");
var top_star_name = document.getElementsByClassName("top_star_name");
var top_star_no = document.getElementsByClassName("top_star_no");

$.getJSON( "http://139.59.93.32/api/datatest/index/", function( data ) {
  var recent = data.most_recent_components;
  var star = data.top_starred_components;
  var dl = data.top_dl_components;

  $.each(dl, function(k, v) {
    most_dl_name[k].innerHTML = (recent[k].name);
    most_dl_no[k].innerHTML = (recent[k].donwloads);
  });

  $.each(star, function(k, v) {
    top_star_name[k].innerHTML = (recent[k].name);
    top_star_no[k].innerHTML = (recent[k].stars);
  });

  $.each(recent, function(k, v) {
    most_recent_name[k].innerHTML = (recent[k].name);
    most_recent_time[k].innerHTML = (recent[k].modified_time);
  });
});
