var waitingTimer = window.setInterval(function() {
    // add Prospector, Google Scholar, and WorldCat
    var checkExists = document.getElementById("facets");
    if(checkExists != undefined) {
        var search_prospector_label = "Search Prospector";
        var prospector_search_url = "https://encore.coalliance.org/iii/encore/search/C__S";
        var search_google_scholar_label = "Search Google Scholar";
        var google_scholar_search_url = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C6&inst=10364086606605717788&q=";
        var search_worldcat_label = "Search WorldCat";
        var worldcat_search_url = "https://www.worldcat.org/search?q=";
        var cludo_search_url = "https://library.du.edu/#?cludoquery=";
        var search_cludo_label = "Search Library Website";
        var search_string = "";
        if(document.getElementById("searchBar").value.length > 0) 
            search_string = document.getElementById("searchBar").value;
        else if(document.getElementById("input_freeText0").value.length > 0 && document.getElementById("input_freeText1").value.length > 0 && document.getElementById("input_freeText2").value.length > 0) 
            search_string = document.getElementById("input_freeText0").value + " " + document.getElementById("input_freeText1").value + " " + document.getElementById("input_freeText2").value;
            var newsearchoptions = document.createElement('span');
            newsearchoptions.innerHTML = '<div id="OtherPlacesToSearchContainer"><h2 class="sidebar-title">Other Places to Search</h2><ol class="EXLFacetsList EXLFacetsListPreview"><li><a href="'+prospector_search_url+encodeURIComponent(search_string)+'__Orightresult__U?lang=eng&suite=def" title="Search Prospector">'+search_prospector_label+'</a></li><li><a href="'+google_scholar_search_url+encodeURIComponent(search_string)+'" title="Search Google Scholar">'+search_google_scholar_label+'</a></li><li><a href="'+worldcat_search_url+encodeURIComponent(search_string)+'" title="Search WorldCat">'+search_worldcat_label+'</a></li><li><a href="'+cludo_search_url+encodeURIComponent(search_string)+'" title="Search WorldCat">'+search_cludo_label+'</a></li></ol></div>';
            document.getElementById("facets").getElementsByClassName("sidebar-section")[0].prepend(newsearchoptions);
            clearInterval(waitingTimer);
    }
}, 2000);

