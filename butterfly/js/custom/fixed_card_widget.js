// 固定卡片點擊動作
function FixedCardWidget(type,name,index){
    // 根據id或class選擇元素
    if (type === "id"){
      var tempcard = document.getElementById(name);
    }
    else{
      var tempcard = document.getElementsByClassName(name)[index];
    }
    // 若元素存在
    if (tempcard) {
        // 首先判斷是否存在fixed-card-widget類
        if (tempcard.className.indexOf('fixed-card-widget') > -1){
          // 存在則移除
          RemoveFixedCardWidget();
        }
        else{
          // 不存在則先初始化防止卡片疊加
          RemoveFixedCardWidget();
          //新建退出蒙版
          CreateQuitBox();
          // 再添加固定卡片樣式
          tempcard.classList.add('fixed-card-widget');
        }
    }
  }
  //創建一個蒙版，作為退出鍵使用
  function CreateQuitBox(){
    var quitBox = `<div id="quit-box" onclick="RemoveFixedCardWidget()"></div>`
    var asideContent = document.getElementById('aside-content');
    asideContent.insertAdjacentHTML("beforebegin",quitBox)
  }
  // 移除卡片方法
  function RemoveFixedCardWidget(){
    var activedItems = document.querySelectorAll('.fixed-card-widget');
    if (activedItems) {
      for (i = 0; i < activedItems.length; i++) {
        activedItems[i].classList.remove('fixed-card-widget');
      }
    }
    //移除退出蒙版
    var quitBox = document.getElementById('quit-box');
    if (quitBox) quitBox.remove();
  }
  // 常規先初始化，確保切換頁面後不會有固定卡片留存
  RemoveFixedCardWidget()