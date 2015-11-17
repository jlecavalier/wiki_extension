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
};