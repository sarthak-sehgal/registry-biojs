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

		componentName.innerHTML += details.name;
		componentContainer.innerHTML += '<div class="componentInfo">'+details.short_description+'</div><div class="componentNpm componentElement"><code>npm install '+url_name+'</code></div><div class="componentVisualize componentElement" style="padding: 0"><div class="component-heading">Visualization</div><div class="component-content"></div></div><div class="componentTags componentElement" style="padding: 0"><div class="component-heading">Tags</div><div class="component-content">'+getTags()+'</div></div><div class="componentSocial componentElement" style="padding: 0"><div class="component-heading">Social</div><div class="component-content">Call GitHub API</div></div><div class="componentStats componentElement" style="padding: 0"><div class="component-heading">Stats</div><div class="component-content">Call GitHub API</div></div><div class="componentContirbutors componentElement" style="padding: 0"><div class="component-heading">Contributors</div><div class="component-content">Call GitHub API</div></div><div class="componentLegal componentElement" style="padding: 0"><div class="component-heading">Legal</div><div class="component-content">Call GitHub API</div></div>';
	});
}
init();