let page1 = document.getElementById('btn1-1');
let page2 = document.getElementById('btn1-2');
let page3 = document.getElementById('btn1-3');
let page4 = document.getElementById('btn1-4');
let info = document.querySelector('.info');





//상단버튼
let up = document.querySelector('.top');

up.addEventListener('click', function(e){
  e.preventDefault();
  scroll({
    top: 0,
    behavior: "smooth"
  });
  info.style.transform = "translateX(0%)";
  setTimeout(function(){
    aboutIt.style.display = "none";
    historys.style.display = "none";
    howToMake.style.display = "none";
    other.style.display = "none";
    footer.style.display = "none";
   },500);
})
// 페이지 버튼 바닐라



page1.addEventListener('click', function(){
  aboutIt.style.display = "block";
  setTimeout(function(){
    aboutIt.style.opacity = 1;
    historys.style.opacity = 0;
    howToMake.style.opacity = 0;
    other.style.opacity = 0;
    historys.style.display = "none";
    howToMake.style.display = "none";
    other.style.display = "none";
   },400);
  
 
  scroll({
    top: 0,
    behavior: "smooth"
  });
});

page2.addEventListener('click', function(){
  historys.style.display = "block";

  setTimeout(function(){
    aboutIt.style.opacity = 0;
    historys.style.opacity = 1;
    howToMake.style.opacity = 0;
    other.style.opacity = 0;
    aboutIt.style.display = "none";
    howToMake.style.display = "none";
    other.style.display = "none";
   },400);

  scroll({
    top: 0,
    behavior: "smooth"
  });
});

page3.addEventListener('click', function(){
  howToMake.style.display = "block";

  setTimeout(function(){
    aboutIt.style.opacity = 0;
    historys.style.opacity = 0;
    howToMake.style.opacity = 1;
    other.style.opacity = 0;
    aboutIt.style.display = "none";
    historys.style.display = "none";
    other.style.display = "none";
   },400);

  scroll({
    top: 0,
    behavior: "smooth"
  });
});

page4.addEventListener('click', function(){
  other.style.display = "block";

  setTimeout(function(){
    aboutIt.style.opacity = 0;
    historys.style.opacity = 0;
    howToMake.style.opacity = 0;
    other.style.opacity = 1;
    aboutIt.style.display = "none";
    historys.style.display = "none";
    howToMake.style.display = "none";
   },400);

  scroll({
    top: 0,
    behavior: "smooth"
  });

});


//소셜 셋

let set = document.getElementById('set');
let social = document.querySelector('.social');

set.addEventListener('click', (e) => {
  e.preventDefault();
  social.classList.toggle('active');
  set.classList.toggle('active');
  home.classList.toggle('active');
  youtube.classList.toggle('active');
  google.classList.toggle('active');
  insta.classList.toggle('active');
});



// section 스크롤 스무스

const links1 = document.querySelectorAll(".textBx a");


for (const link1 of links1) {
  link1.addEventListener("click", clickHandler);
}


function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  setTimeout(function(){
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
   },500);
}

// 여러가지술 가로드래그 스크롤
const slider = document.querySelector('.deck ul');
let isMouseDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
   isMouseDown = true;
   slider.classList.add('active');

   startX = e.pageX - slider.offsetLeft;
   scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
   isMouseDown = false;
   slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
   isMouseDown = false;
   slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
   if (!isMouseDown) return;

   e.preventDefault();
   const x = e.pageX - slider.offsetLeft;
   const walk = (x - startX) * 1;
   slider.scrollLeft = scrollLeft - walk;
});




//btn1-1 657 
const targetEl = document.getElementById('btn1-1');	
const clientRect = targetEl.getBoundingClientRect();	
const relativeTopPosition = clientRect.top;	


const scrolledTopPosition = window.pageYOffset;	
const absoluteTopPosition = scrolledTopPosition + relativeTopPosition;


// 메인 메뉴바로 만들기
window.addEventListener('scroll', function(){
  let value = document.body.scrollHeight;
  
  var scrollDepth = ((window.scrollY + window.innerHeight)/document.body.scrollHeight) * 100;
  console.log(absoluteTopPosition);
})

// 절대좌표와 상대좌표



