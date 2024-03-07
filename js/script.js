let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



// slideshow - index.html ========================================================
let slideIndex = 1;
showSlides(slideIndex);

//  Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // untuk mengembalikan nilai slideIndex menjadi 1 (jika var n melebihi  jumlah slide) 
    if (n > slides.length) {slideIndex = 1}
    
    // jika  n adalah null/kurang dari 1, maka kita akan memakai index awal yaitu 1
    if (n < 1) {slideIndex = slides.length}

    //  membuat semua slide tidak terlihat dan memberi tanda yang aktif pada class active dot
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    //  Menampilkan slide yang sedang diaktifkan saat ini berdasarkan variabel slideIndex
    slides[slideIndex-1].style.display = "block";  
}