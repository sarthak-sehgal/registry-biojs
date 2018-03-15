function init()
{
	var  url_name = window.localStorage.getItem("component");

	$.getJSON( "http://139.59.93.32/api/datatest/details/"+url_name, function( data ) {
		var visualization = data.visualizations;
		var details = data.details;
		var componentContainer = document.getElementById("component-container");
		var componentName = document.getElementById("component-name");

		function getTags() {
			var tagsCode='';
			for(i=0; i<details.tags.length; i++)
			{
				tagsCode += '<span class="component-tag">'+details.tags[i]+'</span>';
			}
			return tagsCode;
		}
		$.getJSON(details.github_url, function(github_data) {
			stars = '<li>Stars: '+github_data.stargazers_count+'</li>';
			watchers = '<li>Watchers: '+github_data.subscribers_count+'</li>';
			forks = '<li>Forks: '+github_data.forks_count+'</li>';
			modified = '<li>Modified at: '+github_data.updated_at.substring(0,10);
			legal = github_data.license;
			legal_name = legal.name;
			legal_url = '<a href="'+legal.url+'">'+legal_name+'</a>';
			created_at = '<li>Created at: '+github_data.created_at.substring(0,10)+'</li>';
			issues = '<li>Open issues: '+github_data.open_issues_count+'</li>';
			componentContainer.innerHTML += '<div class="componentInfo">'+details.short_description+'</div><div class="componentNpm componentElement"><code>npm install '+url_name+'</code></div><div class="componentVisualize componentElement" style="padding: 0"><div class="component-heading">Visualization</div><div class="component-content"></div></div><div class="componentTags componentElement" style="padding: 0"><div class="component-heading">Tags</div><div class="component-content">'+getTags()+'</div></div><div class="componentSocial componentElement" style="padding: 0"><div class="component-heading">Social</div><div class="component-content"><ul class="componentSocial-list">'+window.stars+window.watchers+window.commits+window.forks+'<ul></div></div><div class="componentStats componentElement" style="padding: 0"><div class="component-heading">Stats</div><div class="component-content"><ul class="componentStats-list">'+window.modified+window.created_at+window.issues+'</ul></div></div><div class="componentContirbutors componentElement" style="padding: 0"><div class="component-heading">Contributors</div><div class="component-content contributors-list"></div></div><div class="componentLegal componentElement" style="padding: 0"><div class="component-heading">Legal</div><div class="component-content">'+window.legal_url+'</div></div>';
		});
		$.getJSON(details.github_url+"/contributors", function(contributors) {
			contributors_count = '<li>Contributors: '+contributors.length+'</li>';
			commits = 0;
			contributors_name = '<ul>';
			for(i=0; i<contributors_count; i++)
			{
				window.commits+=contributors[i].contributions;
				window.contributors_name += '<li>'+contributors[i].login + ' ('+contributors[i].contributions+')</li>';
			}
			contributors_name += '</ul>';
			var contributors_list = document.getElementsByClassName("contributors-list")[0];
			contributors_list.innerHTML += contributors_name;
			var social_list = document.getElementsByClassName("componentSocial-list")[0];
			social_list.innerHTML+=window.contributors_count;
		});
		$.getJSON(details.github_url+"/releases", function(releases) {
			latest_version = '<li>'+releases[0].tag_name+'</li>';
			componentName.innerHTML += details.name;
			var stats = document.getElementsByClassName("componentStats-list")[0];
			stats.innerHTML+=window.latest_version;
		});
	});
}
init();