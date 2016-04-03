// JavaScript Document
(function() {
	"use strict";
	var request, url, movieLinks, srchLinks, path, build, sbuild, filterLinks = document.querySelectorAll(".filterNav a"), srchInput = document.querySelector("#srch"), live = document.querySelector("#livesrch"), details = document.querySelector(".details");// deLink = document.querySelectorAll(".details-link");
	

	function init() {
		url="admin/includes/getMovies.php";
		build='';
		path = "init";
		reqInfo(path);
	}
	

	function reqInfo(path) {
		// Purpose of this function is passed data from the client to the server(https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).
		if(window.XMLHttpRequest) {
			request = new XMLHttpRequest();

		}else{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}

		request.open("GET", url, true);
		request.send(); 

		if(path==="liveSearch"){
			request.onreadystatechange = searchItems; 
		}else{
			request.onreadystatechange = addItems;
		}
		
	}

	function addItems() {
		//populate the full list on the page
		var con = document.querySelector(".movies");

		if((request.readyState===4) || (request.status===200)) {
			var items = JSON.parse(request.responseText);
			//console.log(items);
	

			if(items.length!==0) {

				if (items.length > 1){
					con.innerHTML = "";
					build = "";
					//brings in title
				
					for (var i=0;i<items.length; i++) {
						//add classes here for styling
							build = '<div class="small-12 medium-6 large-3 columns">';
								//build += '<div class="small-12 medium-4 large-2 columns">';
									build += '<img class="movie-img float-center" src="images/'+items[i].movies_thumb+'" alt="'+items[i].movies_title +'">';
								//build += '</div>';
								//build += '<div class="small-12 medium-8 large-10 columns">';
									build += '<h2 class="movie-title text-center">'+items[i].movies_title+'</h2>';
									build += '<div class="text-center">';
										build += '<h3 class="movie-year text-center">'+items[i].movies_year+'</h3>';
										//change the href details.php for the homework next week
										build += '<a class="details-link float-center" href="index.php?id='+items[i].movies_id+'">more...</a> <br><br>';
									build += '</div>';
							build += '</div>';

						con.innerHTML += build;
					}

					movieLinks = document.querySelectorAll(".movies a, .l-searchLive");
					//gives an array, make event listeners for each
					for (var j=0; j<movieLinks.length; j++){
						movieLinks[j].addEventListener("click", itemDetails, false);
					}
				}else{
					details.innerHTML="";
					//console.log("holla");
					//sbuild += '<a class="close" href="#"></a>';
					//remember "=" for the first line and "+=" for the following lines
					//sbuild = '<div id="index.php?id='+items[0].movies_id+'" class="lightbox">'; 
						sbuild = '<h2 id="details-title">'+items[0].movies_title+'</h2>';
						sbuild += '<a class="php-link close" href="index.php">&times;</a>';
						sbuild += '<p id="details-synps">'+items[0].movies_storyline+'</p>';
					//sbuild += '</div>';

					details.innerHTML= sbuild;
				}

			}else{
				//error no content
				con.innerHTML = "sorry, there was a server error, please try again later.";
			}
		}
	}
	
	
	function searchItems() { // was it successful? 
		// Purpose of this function is write the content passed from PHP into the div located below the input field.
		if((request.readyState===4) || (request.status===200)) {
			//checking if server is responding - maybe
			var srchItems = JSON.parse(request.responseText);

			for(var i=0; i<srchItems.length; i++){
				build += '<a class="l-searchLive" href="index.php?id='+srchItems[i].movies_id+'">';
				build += '<img class="thumb" src="images/'+srchItems[i].movies_thumb+'" alt="'+srchItems[i].movies_title+'">';
				build += '<p class="search-title">'+srchItems[i].movies_title+'</p>';
				build += '<p class="search-year">'+srchItems[i].movies_year+'</p>';
				build += '</a>'+'<br>';
			}

			live.innerHTML = build;
			build = '';

			movieLinks = document.querySelectorAll(".movies a, .l-searchLive");
			//gives an array, make event listeners for each
			for (var j=0; j<movieLinks.length; j++){
				movieLinks[j].addEventListener("click", itemDetails, false);
			}

		}
	}
	
	function liveSearch() {
		// Purpose of this function is to rewrite the URL to be passed the search query on the PHP side.
		var capture = srchInput.value;
		url="admin/includes/getMovies.php?srch="+capture;
		path = "liveSearch";
		//reqInfo(path);

		if (capture !==''){
			url = "admin/includes/getMovies.php?srch="+capture;
			path = "liveSearch";
			reqInfo(path);
			live.innerHTML = '<p id="nores"> No results found.</p>';
		}else{
			live.innerHTML = "";
		}
		
	}

	function filterItems(evt) {
		//filtering thru nav 
		evt.preventDefault();
		//console.log("Works");
		var str = evt.target.href;
		
	
		var arr = str.split("=");
		str = arr[1];
		if(str) {
			url = "admin/includes/getMovies.php?filter="+str;
		}else{
			url = "admin/includes/getMovies.php";
		}
		path = "filterItems";
		reqInfo(path); 
	}

	function itemDetails(evt) {
		//console.log("Item Details");
		evt.preventDefault();
		//how do we know what movie was clicked? - the id
		//console.log(evt.target);

		var str = evt.target.href;
		
		//console.log(str);
		var arr = str.split("=");

		//the string calls on the link, and the array splits the id from the href by calling on the next character after "="
		//console.log(arr[1]);
		url = "admin/includes/getMovies.php?id="+arr[1];
		//console.log(url);
		path = "itemDetails";
		reqInfo(path);
	}

	//function scrollUp(e){
	//	e.preventDefault();
	//	console.log("link clicked");
	//}
	
	// Listeners
	for(var i=0; i<filterLinks.length; i++){
		filterLinks[i].addEventListener("click", filterItems, false);

	}
	window.addEventListener("load", init, false);
	srchInput.addEventListener("keyup", liveSearch, false);
	//deLink.addEventListener("click", scrollUp, false); 
	
})();