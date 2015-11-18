window.onload = function () {
  function doSearch() {
    var title = document.getElementById('search_input').value;
    MediaWikiJS('https://en.wikipedia.org', 
      {action: 'query', prop: 'info', inprop: 'url', titles: title}, function (data) {
      var pages = data.query.pages;
      console.log(pages);
      if (pages[Object.keys(pages)[0]].missing == undefined &&
          pages[Object.keys(pages)[0]].invalid == undefined) {
        
        document.getElementById('page_link').href = 
          pages[Object.keys(pages)[0]].canonicalurl;

        MediaWikiJS('https://en.wikipedia.org',
          {action: 'parse', prop: 'text|displaytitle', page: title}, function (data) {
          var textdata = data.parse.text['*'];
          var titledata = data.parse.displaytitle;
          console.log(textdata);
          console.log(titledata);
          document.getElementById('page_link').innerHTML = titledata;
          document.getElementById('test').innerHTML = textdata;
          })
      }
      else {
        document.getElementById('page_link').innerHTML = "No results found :(";
      }
    });
  }
  document.getElementById('search_input').onkeypress = (function(e){
    if (e.keyCode == 13) {
      document.getElementById('search_submit').click();
    }
  });
  document.getElementById('search_submit').onclick = doSearch;
};