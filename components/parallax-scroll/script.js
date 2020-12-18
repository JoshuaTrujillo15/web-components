let obj1 = document.getElementById('obj1');
let obj2 = document.getElementById('obj2');

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    obj1.style.left = value + 'px';
})