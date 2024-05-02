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

//화면 1 숨기고 화면2 나타내기
function showSecondScreen() {
  const style = document.querySelector('link[href="style.css"]');
  if (style) {style.disabled = true;} // 스타일 시트 비활성화
  const style2 = document.querySelector('link[href="style2.css"]');
  if (style2) { style2.disabled = false;} // 스타일 시트 활성화
  var containers = document.querySelectorAll('.container, .container_main, #features, #portfolio');
  containers.forEach(function(container) {container.style.display = 'none'; }); // 화면1 숨기기.
  document.querySelectorAll('#second_main, #list,#upload').forEach(function(element) { // 화면2 보이기
                            element.style.display = 'block';});
}


function show() {
  document.querySelector(".background").classList.add("show"); 
  //queryselector: html의 class, tag, id등을 선택
}

function close() {
  document.querySelector(".background").classList.remove("show");
}

document.getElementById("show").addEventListener("click", show);
document.getElementById("close").addEventListener("click", close);

//-------------글 올리기 - 상품 목록 추가
// 업로드 버튼 클릭 시 이벤트 처리
document.getElementById("uploadButton").addEventListener("click", function() {
  // 입력값 가져오기
  var productName = document.getElementById("productName").value;
  var productPrice = document.getElementById("productPrice").value;
  var productDetail = document.getElementById("productDetail").value;
  var productImage = document.getElementById("productImage").files[0]; // 파일 형식의 데이터 가져오기

  // 입력값이 비어 있는지 확인
  if (productName.trim() === "" || productPrice.trim() === "" || productDetail.trim() === "" || !productImage) {
      alert("상품 정보를 모두 입력해주세요.");
      return;
  }

  // 새로운 상품 카드 생성
  var newProductCard = document.createElement("div");
  newProductCard.classList.add("product_card");

  var img = document.createElement("img");
  img.classList.add("product_img");
  var reader = new FileReader(); // 파일을 읽기 위한 FileReader 객체 생성
  reader.onload = function() {
      img.src = reader.result; // 파일을 읽어서 이미지 소스로 설정
  }
  reader.readAsDataURL(productImage); // 파일을 읽기 시작
  // reader.onload 이벤트가 발생할 때 이미지가 설정됩니다.

  var productContents = document.createElement("div");
  productContents.classList.add("product_contents");

  var nameSpan = document.createElement("span");
  nameSpan.classList.add("product_name");
  nameSpan.textContent = productName;

  var priceSpan = document.createElement("span");
  priceSpan.classList.add("product_price");
  priceSpan.textContent = productPrice + "원";

  // 생성한 요소들을 상품 카드에 추가
  productContents.appendChild(nameSpan);
  productContents.appendChild(priceSpan);
  newProductCard.appendChild(img);
  newProductCard.appendChild(productContents);

  // 상품 목록에 추가
  var itemList = document.querySelector("#list .itemlist"); // #itemlist를 찾습니다.
  itemList.appendChild(newProductCard);

  // 입력 폼 초기화
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDetail").value = "";
  document.getElementById("productImage").value = ""; // 파일 입력 필드 초기화

  close();
});
