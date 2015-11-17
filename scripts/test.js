console.log("Popup initialized.");

window.onload = function () {
  function changeImage() {
    var image = document.getElementById('fractal');
    if (image.src.match("/images/pic_1.bmp")) {
      image.src = "/images/pic_2.bmp";
    } 
    else {
      image.src = "/images/pic_1.bmp";
    }
  }
  document.getElementById('fractal').onclick = changeImage;

  function factorial(n) {
    if (n == 0) {
      return 1;
    }
    else {
      return n * factorial(n - 1);
    }
  }

  function doFactorial() {
    var n = document.getElementById('fact_input').value;
    document.getElementById('fact_output').innerHTML = factorial(n);
  }
  document.getElementById('fact_submit').onclick = doFactorial;

  var mwjs = new MediaWikiJS('https://en.wikipedia.org', {action: 'query',
      prop: 'revisions', titles: 'Main Page'}, function (data) {
      'use strict';
      var pages = data.query.pages;
      var textdata = document.getElementById('wiki_info');
      textdata.innerHTML = ('Main page of Wikipedia last edited by: ' + pages[Object.keys(pages
        )[0]].revisions[0].user);
      });
};