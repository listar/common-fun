export function imglazyload() {
  function getTop(e) {
    return e.offsetTop;
  }
  Hezc.addEvent(window, "scroll", function () {
    Hezc.throttle(lazyload(), 200);
  });
  lazyload();
  function lazyload() {
    imgs = document.querySelectorAll("img[data-src]");
    var h = window.innerHeight;
    var s = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < imgs.length; i++) {
      if (h + s > getTop(imgs[i])) {
        (function (img) {
          var temp = new Image();
          var src = img.getAttribute("data-src");
          temp.src = src;
          temp.onload = function () {
            img.src = src;
            img.removeAttribute("data-src");
          };
          temp.onerror = function () {
            img.removeAttribute("data-src");
          };
        })(imgs[i]);
      }
    }
  }
}

//2.禁止拖拽图片
export function doNotSaveImage() {
  for (var i in document.images) {
    document.images[i].ondragstart = function () {
      return false;
    };
  }
}
