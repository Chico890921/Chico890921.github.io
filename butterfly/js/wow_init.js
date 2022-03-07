// 給首頁文章卡片套上動畫
var arr = document.getElementsByClassName("recent-post-item");
for(var i = 0;i<arr.length;i++){
    arr[i].classList.add("wow"); //必要項，添加wow.js標記
    arr[i].classList.add("animate__zoomIn"); //必要項，添加樣式動畫
  }
// 給側欄卡片套上動畫
var arr = document.getElementsByClassName("card-widget");
for(var i = 0;i<arr.length;i++){
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__slideInRight");
  }
//初始化函數
wow = new WOW({
  boxClass: 'wow',
  // 當用戶滾動時顯示隱藏框的類名稱
  animateClass: 'animate__animated',
  // 觸發 CSS 動畫的類名稱（動畫庫默認為"animate.css"庫）
  offset: 0,
  // 定義瀏覽器視口底部與隱藏框頂部之間的距離。
  // 當用戶滾動並到達此距離時，將顯示隱藏的框。
  mobile: true,
  // 在移動設備上打開/關閉wow.js。
  live: true
  // 在頁面上檢查新的 wow.js元素。
})
wow.init();