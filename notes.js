	function searchItems() { // was it successful? 
		// Purpose of this function is write the content passed from PHP into the div located below the input field.
		if((request.readyState===4) || (request.status===200)) {
			//checking if server is responding - maybe
			var srchItems = JSON.parse(request.responseText);

			if (srchItems.lenth!==0){
				if (srchItems.length>1){
					for(var i=0; i<srchItems.length; i++){
						build += '<a class="l-searchLive" href="index.php?id='+srchItems[i].movies_id+'">';
						build += '<img class="thumb" src="images/'+srchItems[i].movies_thumb+'" alt="'+srchItems[i].movies_title+'">';
						build += '<p class="search-title">'+srchItems[i].movies_title+'</p>';
						build += '<p class="search-year">'+srchItems[i].movies_year+'</p>';
						build += '</a>'+'<br>';
					}

					srchLinks = document.querySelectorAll("#livesrch a");
					for (var k=0; k<srchLinks.length; k++){
						srchLinks[k].addEventListener("click", itemDetails, false);
					}
				}else{
					details.innerHTML="";
					sbuild = '<h2 id="details-title">'+items[0].movies_title+'</h2>';
					sbuild += '<p id="details-synps">'+items[0].movies_storyline+'</p>';

					details.innerHTML= sbuild;
				}
			}

			live.innerHTML = build;
			build = '';

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

		}
	}