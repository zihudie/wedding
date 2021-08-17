const  innerCons = 
`
<div class="con-inner">
<audio src="./images/music.mp3"  id="audio1"  loop="loop"></audio>
<div class="music active" id='music'><img src="./images/music.png"></div>
<div class="wedding-inner">
<div class="top">
   <div class="big-pic">
        <img class='pic' src="./images/top_pic.jpg" alt="">
        <img class="memo" src="./images/log.png" alt="">
   </div>
</div>
<img src="./images/top1.png" alt="">
<p>
  <img src="./images/carbon.png" alt="">
</p>
<!--自我介绍 -->
<div class="groom-bride">
    <div class="person bride">
      <div class="pics">
        <img src="./images/us/bride.jpg" />
        <p>我是新娘</p>
      </div>
      <div class="desc ml10">
          我对象是一个运动细胞发达头脑更发达（maybe 可能 也许 非常）不浪漫的直男；他善良又真诚，是一个敢冬天直面冷水洗车的男人～～ ；他说以后会当我的好队友，这让我很安心。。。
      </div>
      
    </div>
    <div class="person groom">    
        <div class="desc mr10">
          我媳妇是一个可爱、积极向上的小仙女，我们有着不少共同点，比如都喜欢小孩子，对人友善，勤俭节约，最佩服她的一点是烧的菜又香又好吃(^～^)，以后不会变成大胖子吧。。。
        </div>
        <div class="pics">
            <img src="./images/us/groome.jpg" />
            <p>我是新郎</p>
        </div>
      </div>
</div>
<p class="sub-title">
    <img src="./images/flower/1.png" alt="">
</p>
<!-- 生活照片 -->
<div class="life-photos" id="lifePhotos">
  <div class="item">
    <div class="col">
        <img src="./images/life/IMG_0112.jpg" alt="">
        <p class="msg">嘻嘻～</p>
      </div>
     
      <div class="col">
        <img src="./images/life/IMG_0586.jpg" alt="">
        <p class="msg">大🍊大利</p>
      </div>
  </div>
  <div class="item">
    <div class="col">
      <img src="./images/life/IMG_0585.jpg" alt="">
      <p class="msg">翻滚吧</p>
    </div>
    <div class="col">
      <img src="./images/life/IMG_9582.jpg" alt="">
      <p class="msg">接球吧</p>
    </div>
</div>
<div class="item">
    <div class="col">
      <img src="./images/life/IMG_0590.jpg" alt="">
      <p class="msg">二人·食</p>
    </div>
    <div class="col">
      <img src="./images/life/IMG_8631.jpg" alt="">
      <p class="msg">有点甜</p>
    </div>
</div>
<div class="item">
    <div class="col">
        <img src="./images/life/IMG_1894.jpg" alt="">
        <p class="msg">哼哼～</p>
      </div>
    <div class="col">
        <img src="./images/life/IMG_0588.jpg" alt="">
        <p class="msg">合法～</p>
      </div>
</div>
<div class="item">
    <div class="col">
      <img src="./images/life/IMG_0584.jpg" alt="">
      <p class="msg">村哥</p>
    </div>
    <div class="col">
      <img src="./images/life/IMG_0583.jpg" alt="">
      <p class="msg">村妹</p>
    </div>
</div>
</div>
 <!-- 结婚照片 轮播  -->
 <div class="swiper-container" id="weddingSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/wedding/w1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/wedding/w2.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/wedding/w3.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/wedding/w03.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/wedding/w4.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/wedding/w5.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/wedding/w6.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/wedding/w9.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/wedding/w10.jpg" alt="">
      </div>
    </div>
 </div>

  <!-- 时间地点 -->
  <p class="sub-title">
    <img src="./images/flower/3.png" alt="">
 </p>
  <!-- 婚礼倒计时 -->
  <div class="wedding-time">
    <ul class="ul" id='weddingTime'>
    </ul>
   </div>
 <div class="time-address">
   <p class="item">  <span class="icon"><img class="time" src="./images/time.png" alt=""></span>：2021年10月02日 18:00</p>
   <p class="item">  <span class="icon"><img src="./images/address.png" alt=""></span>：池州市贵池区观港花园龙都大酒店 </p>
 </div>
 
 <p class="sub-title">
    <img src="./images/flower/4.png" alt="">
</p>
  <!-- 感谢 -->
</div>
</div>
`
window.onload = function(){
    let timer = null 
    const weddingCons = document.getElementById("weddingCons")
    const  envelope = document.getElementById("envelope")
    const audioObj = document.getElementById("audio")
    const joinBtn = document.getElementById("join")
    let audioObj1  
    let musicBtn 
    const coverObj = document.getElementById("cover")
    const dom  = document.getElementById("coverInner")
    const myText =`亲 爱 的 家 人 , 朋 友 你 们 好 : <br/> 我 们 即 将 在 2 0 2 1 年 1 0 月 0 2 号 举 办 婚 礼 <br/>
    现 特 邀 您 参 加 我 们 的 婚 礼 `
    const data = myText.split(' ')
    let index = 0
    function writing(index) {
        if (index < data.length) {
            dom.innerHTML += data[index]
            setTimeout(writing.bind(this), 200, ++index)
            
        }else{
            audioObj.pause()
            audioObj.style.display = 'none'
           setTimeout(() => {
            joinBtn.className = 'active'
            
           }, 500);  
        }  
    }
    // 开封面
    envelope.onclick = function(){
        this.classList.add("shade-out")
        coverObj.classList.add("shade-in")
        writing(index)
        audioObj.play()
    }
     // 去参加
     joinBtn.onclick =  function(){
        coverObj.classList.add("shade-out")
        coverObj.classList.remove("shade-in")
        /**************展示第三页********************/
        // wedding contents
        weddingCons.classList.add("shade-in")
        weddingCons.innerHTML  = innerCons
        setTimeout(() => {
            audioObj1.play()
        }, 800);
        audioObj1 = document.getElementById("audio1")
        musicBtn = document.getElementById("music")
        new Swiper('.swiper-container',{
            loop:true,
            autoplay:true
        });
        musicBtn.addEventListener("click",()=>{
            if(musicBtn.classList.contains("active")){
                audioObj1.pause()
                musicBtn.classList.remove("active")
            }else{
                musicBtn.classList.add("active")
                audioObj1.play()
            }
        })
        getTime()
    }
    // musicBtn.onclick = function(){
    //     if(this.classList.contains("active")){
    //         audioObj1.pause()
    //         this.classList.remove("active")
    //     }else{
    //         this.classList.add("active")
    //         audioObj1.play()
    //     }
    // }


    // 倒计时

   function  getDate(time,dom){
    const _time = new Date().getTime()
    const leftTime =  time - _time
    let innerSrc 
    if (leftTime>=0) {
       d = '0'+Math.floor(leftTime/1000/60/60/24);
       h = '0'+Math.floor(leftTime/1000/60/60%24);
       m = '0'+Math.floor(leftTime/1000/60%60);
       s = '0'+Math.floor(leftTime/1000%60);  
       innerSrc  = `
       <li class="item">
            <span class="num">${d.slice(-2)}</span>
            <p class="unit">
                天
            </p>
        </li>
        <li class="item">
            <span class="num">${h.slice(-2)}</span>
            <p class="unit">
                小时
            </p>
        </li>
        <li class="item">
          <span class="num">${m.slice(-2)}</span>
          <p class="unit">
              分钟
          </p>
      </li>
      <li class="item">
          <span class="num">${s.slice(-2)}</span>
          <p class="unit">
              秒
          </p>
      </li>
`                 
   }else{
    if(timer){
        clearInterval(timer)
    }
    innerSrc   =  `
    <li class="item big-item"> 
        <p class="unit">
            we are family now 
        </p>
    </li>
`
   }
   
   dom.innerHTML = innerSrc
   }
   function getTime(){
       const timeCon  = document.getElementById("weddingTime")
       const time = new Date('2021/10/02 18:00').getTime()
       getDate(time,timeCon)
       timer = setInterval(() => {
           getDate(time,timeCon)
       }, 1000);
   }
    
}       