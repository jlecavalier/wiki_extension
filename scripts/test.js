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
};