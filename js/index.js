
 



window.onload = function(){
    let timer = null 
    const weddingCons = document.getElementById("weddingCons")
    const  envelope = document.getElementById("envelope")
    const audioObj = document.getElementById("audio")
    const joinBtn = document.getElementById("join")
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
            // audio.trigger('play');
            
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
        weddingCons.classList.add("shade-in")
    }

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
       const time = new Date('2021-10-02 18:00').getTime()
       getDate(time,timeCon)
       timer = setInterval(() => {
           getDate(time,timeCon)
       }, 1000);
   }
    getTime()
}       