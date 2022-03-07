const img = document.querySelector('img');
// 或者
// const img = 'http://example.com/image.jpg';
RGBaster.colors(img, {
  // 调色板大小，就是提取的样本，越大越精确，同时性能越差
  paletteSize: 30,
  // 颜色排除
  exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ],
  success: function(payload) {
    console.log('Dominant color:',payload.dominant);// 提取出来的主色
    console.log('Secondary color:', payload.secondary);// 次色
    console.log('Palette:', payload.palette); // 调色板
  }
})

const c = payload.dominant.match(/\d+/g);
const Color = `rgba(${c[0]},${c[1]},${c[2]},0.8)`;

let fontColor;
const grayLevel = c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114;
if (grayLevel >= 192) {
  // 若为浅色，把文字设置为黑色
  fontColor = '#000';
} else {
  fontColor = '#fff';
}