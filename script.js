// 잘 연결되었는지 테스트 하고자 할 경우: alert('test');
(function(){
const spanEl = document.querySelector("main h2 span");
const txtArr = ['중고마켓','중고거래']; // 작성할 텍스트를 배열에 저장
let index =0;
let currentTxt = txtArr[index].split("");


function writeTxt(){ // 배열 요소를 한 개씩 출력
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){
    setTimeout(writeTxt, Math.floor(Math.random()*100));
    }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt,3000)
    }
}

function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !==0 ){
        setTimeout(deleteTxt, Math.floor(Math.random()*100));
    }else{
        index = (index +1)%txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();   
    }
  

}
writeTxt();
}) ();
// 최초 한 번만 실행되면 되니까 직접 실행함수로 적음. 

// 스크롤 이동 시 헤더 영역에 스타일 적용
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
}

const animationMove = function(selector){
  const target = document.querySelector(selector);
  const browserScrollY = window.pageYOffset;
  const targetScrollY = target.getBoundingClientRect().top + browserScrollY;//이동할 대상
  window.scrollTo({top:targetScrollY, behavior: 'smooth'})
  console.log(target);


}

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
console.log(scrollMoveEl);
for(let i=0; i<scrollMoveEl.length; i++){
  scrollMoveEl[i].addEventListener("click",function(e){
    animationMove(this.dataset.target); //this가 이벤트가 발생한 자기 자신을 의미 =e.target
  });
}