
let page1 = document.querySelector('.menu_btn ul li:nth-child(1)')
let page2 = document.querySelector('.menu_btn ul li:nth-child(2)')
let page3 = document.querySelector('.menu_btn ul li:nth-child(3)')
let page4 = document.querySelector('.menu_btn ul li:nth-child(4)')
let page5 = document.querySelector('.menu_btn ul li:nth-child(5)')

page1.addEventListener('click', function(){
  style.display ="adsolute"
  page2.style.display="none"
  page3.style.display="none"
  page4.style.display="none"
  page5.style.display="none"
})

page2.addEventListener('click', function(){
  style.display ="adsolute"
  page1.style.display="none"
  page3.style.display="none"
  page4.style.display="none"
  page5.style.display="none"
})

page3.addEventListener('click', function(){
  style.display ="adsolute"
  page1.style.display="none"
  page2.style.display="none"
  page4.style.display="none"
  page5.style.display="none"
})

page4.addEventListener('click', function(){
  style.display ="adsolute"
  page1.style.display="none"
  page2.style.display="none"
  page3.style.display="none"
  page5.style.display="none"
})

page5.addEventListener('click', function(){
  style.display ="adsolute"
  page1.style.display="none"
  page2.style.display="none"
  page3.style.display="none"
  page4.style.display="none"
})

