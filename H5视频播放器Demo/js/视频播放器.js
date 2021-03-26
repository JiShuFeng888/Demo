window.onload=function(){
    let oVideo=document.querySelector("video");
    let oLastTime=document.querySelector(".lastTime");
    let oFirstTime=document.querySelector(".firstTime");
    let oPlay=document.querySelector("#play");
    let oLine=document.querySelector(".line");
    let oProgress=document.querySelector(".progress");
    let oFull=document.querySelector("#full");

    oVideo.oncanplay=function(){
        // 加载视频
        oVideo.style.display="block";
        oVideo.style.backgroundImage="";
        // 加载视频结束时间
        let obj=formatDate(oVideo.duration);
        oLastTime.innerHTML=`${obj.hour}:${obj.minute}:${obj.second}`;

    }

        // 监听播放按钮
    let flag=false;
    oPlay.onclick=function(){
        if(flag){
            oPlay.className="iconfont icon-zanting";
            oVideo.play();
            flag=false;
        }else{
            oPlay.className="iconfont icon-bofang";
            oVideo.pause();
            flag=true;
        }
    };
    
        // 监听播放进度
    oVideo.ontimeupdate=function(){
        // 同步当前时间
        let obj=formatDate(oVideo.currentTime);
        oFirstTime.innerHTML=`${obj.hour}:${obj.minute}:${obj.second}`;
        // 同步进度条
        let res=oVideo.currentTime/oVideo.duration*100;
        oLine.style.width=res+"%";
    };

        // 监听进度条点击事件
    oProgress.onclick=function(event){
        event=event||window.event;
        let currentTime=event.offsetX/oProgress.offsetWidth*oVideo.duration;
        oVideo.currentTime=currentTime;
    };
        // 监听播放完毕事件
    oVideo.onended=function(){
        oPlay.className="iconfont icon-bofang";
        oLine.style.width=0+"%";
        oFirstTime.innerHTML="00:00:00";
        oVideo.currentTime=0;
    };
        // 监听全屏按钮的点击事件
    oFull.onclick=function(){
        // oVideo.requestFullscreen();
        toFullVideo(oVideo);
    };
    


    



};




function formatDate(time) {
    // 4.利用相差的总秒数 / 小时 % 24;
    let hour = Math.floor(time / (60 * 60) % 24);
    hour = hour >= 10 ? hour : "0" + hour;
    // 5.利用相差的总秒数 / 分钟 % 60;
    let minute = Math.floor(time / 60 % 60);
    minute = minute >= 10 ? minute : "0" + minute;
    // 6.利用相差的总秒数 % 秒数
    let second = Math.floor(time % 60);
    second = second >= 10 ? second : "0" + second;
    return {
        hour: hour,
        minute: minute,
        second: second,
    };
}

function toFullVideo(videoDom){

    if(videoDom.requestFullscreen){
  
      return videoDom.requestFullscreen();
  
    }else if(videoDom.webkitRequestFullScreen){
  
      return videoDom.webkitRequestFullScreen();
  
    }else if(videoDom.mozRequestFullScreen){
  
      return videoDom.mozRequestFullScreen();
  
    }else{
  
      return videoDom.msRequestFullscreen();
  
    }
  
  }
  