
let btn1 = document.querySelector('.menu_btn ul li:nth-child(1)')
let btn2 = document.querySelector('.menu_btn ul li:nth-child(2)')
let btn3 = document.querySelector('.menu_btn ul li:nth-child(3)')
let btn4 = document.querySelector('.menu_btn ul li:nth-child(4)')
let btn5 = document.querySelector('.menu_btn ul li:nth-child(5)')

let page1 = document.querySelector('.main_page-1')
let page2 = document.querySelector('.main_page-2')
let page3 = document.querySelector('.main_page-3')
let page4 = document.querySelector('.main_page-4')
let page5 = document.querySelector('.main_page-5')

btn1.addEventListener('click', function(){
  page1.style.display="block"
  page2.style.display="none"
  page3.style.display="none"
  page4.style.display="none"
  page5.style.display="none"
})

btn2.addEventListener('click', function(){
  page1.style.display="none"
  page2.style.display="block"
  page3.style.display="none"
  page4.style.display="none"
  page5.style.display="none"
})

btn3.addEventListener('click', function(){
  page1.style.display ="none"
  page2.style.display="none"
  page3.style.display="block"
  page4.style.display="none"
  page5.style.display="none"
})

btn4.addEventListener('click', function(){
  page1.style.display ="none"
  page2.style.display="none"
  page3.style.display="none"
  page4.style.display="block"
  page5.style.display="none"
})

btn5.addEventListener('click', function(){
  page1.style.display ="none"
  page2.style.display="none"
  page3.style.display="none"
  page4.style.display="none"
  page5.style.display="block"
})

