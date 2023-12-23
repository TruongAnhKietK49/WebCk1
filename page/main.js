// ⁡⁣⁣⁢Login html⁡

function login() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  if(email == '' || name == '' || pass == ''){
    alert("Vui lòng điền đầy đủ thông")
    return 0;
  }
  if(email == "12345@gmail.com" && name == "admin" && pass == "12345") {
    alert("Đăng nhập thành công!")
    window.location.href = "/WebCk1/index.html"
  }
}

// ⁡⁣⁣⁢Address⁡
let adress_open = document.querySelector('#adress-form')
let adress_close = document.querySelector('#adress-close')
let adress_btn = document.querySelector('#adress-btn-close')
adress_open.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adress_close.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})
adress_btn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})

// ⁡⁣⁣⁢slider-btn⁡
let imgNumber = document.querySelectorAll('.top img')
let index = 0;
let btn_left = document.querySelector('.btn-left')
let btn_right = document.querySelector('.btn-right')
btn_right.addEventListener("click", function(){
    index = index+1
    if(index>imgNumber.length-1){
        index=0;
    }
    document.querySelector(".top").style.right = index*100+"%" ; 
})
btn_left.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNumber.length-1; 
    }
    document.querySelector(".top").style.right = index*100+"%" ; 
})

// ⁡⁣⁣⁢slider-bottom⁡
let imgNumberLi = document.querySelectorAll('.bottom li')
imgNumberLi.forEach(function(image, index){
    image.addEventListener("click", function(){
        removeactive()
        document.querySelector(".top").style.right = index*100+"%";
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive =  document.querySelector('.active')
    imgactive.classList.remove("active")
}
function imgAuto(){
    index+=1;
    if(index>imgNumber.length-1){
        index=0;
    }
    removeactive()
    document.querySelector(".top").style.right = index*100+"%";
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto, 3000)
