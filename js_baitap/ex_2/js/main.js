let img = document.querySelectorAll('img');
const mainImg = document.querySelector('#mainImg img')
console.log(mainImg);


img.forEach(function(listenAll) {
  listenAll.addEventListener('click', function() {
    let srcImgOnClick = this.getAttribute('src');
    console.log(srcImgOnClick);
    mainImg.setAttribute('src', srcImgOnClick);
  });
});
