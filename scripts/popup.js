window.onload = function () {
  function doSearch() {
    var title = document.getElementById('search_input').value;
    MediaWikiJS('https://en.wikipedia.org', 
      {action: 'query', prop: 'revisions', titles: title}, function (data) {
    var pages = data.query.pages;
    if (pages[Object.keys(pages)[0]].revisions != undefined) {
      document.getElementById('wiki_info').innerHTML = 
        ('Last edited by: ' + pages[Object.keys(pages)[0]].revisions[0].user);
    }
    else {
      document.getElementById('wiki_info').innerHTML = "No results found :(";
    }
    });
  }
  document.getElementById('search_submit').onclick = doSearch;
};