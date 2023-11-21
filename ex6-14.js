var image=new Array();
image[0]=new Image();
image[0].src="./image/hitokage.jpg";
image[1]=new Image();
image[1].src="./image/riza-donn.jpg";
var cnt=0;
function henkou14(){
if(document.getElementById){
  document.henkou.elements[0].disabled=true;
  document.getElementById("gh").src=image[cnt].src;
  cnt++;
  if(cnt<=1)
    var timer1=setTimeout("henkou14()",3000);}else{
  cnt=0;
  document.henkou.elements[0].disabled=false;
  clearTimeout(timer1);}}

//　https://www.pazru.net/js/timer/4.html 参照
