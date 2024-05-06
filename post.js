User
document.addEventListener("DOMContentLoaded", function() {
  // 여기에 JavaScript 코드 추가
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

      // FileReader 객체 생성
      var reader = new FileReader();

      // FileReader onload 이벤트 설정
      reader.onload = function() {
          // 이미지를 읽어와서 상품 카드 생성
          var newProductCard = document.createElement("div");
          newProductCard.classList.add("product_card");

          // 이미지 엘리먼트 생성 및 설정
          var img = document.createElement("img");
          img.classList.add("product_img");
          img.src = reader.result; // 이미지 소스 설정

          // 상품 내용 엘리먼트 생성 및 설정
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
          var itemList = document.querySelector("#list .itemlist");
          itemList.appendChild(newProductCard);
      };

      // FileReader를 사용하여 이미지 읽기 시작
      reader.readAsDataURL(productImage);

      // 입력 폼 초기화
      document.getElementById("productName").value = "";
      document.getElementById("productPrice").value = "";
      document.getElementById("productDetail").value = "";
      document.getElementById("productImage").value = ""; // 파일 입력 필드 초기화
  });
});