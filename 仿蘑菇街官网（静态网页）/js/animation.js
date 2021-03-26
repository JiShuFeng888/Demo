(function(){
    let timerId=null;    
    function linearAnimation(ele,obj,fn){
        clearInterval(timerId);
        // 防止多次点击按钮没达到定时器关闭的条件出现的bug
        timerId=setInterval(function(){
        let flag=true;
        for(let key in obj){   
            let num=obj[key];
            let style=getComputedStyle(ele);
            // 1.拿到元素当前的位置
            let startSpace=parseInt(style[key])||0;
            // 2.定义变量记录步长
            let buchang=num>startSpace?13:-13;
            // 匀速动画的步长
            // let buchang=(num-startSpace)*0.3;
            // 缓速动画的步长
            // 3.计算新的位置
            // 判断方块是向左走还是像右走
            startSpace += buchang;
            console.log(startSpace);        
            if(Math.abs(num-startSpace)>Math.abs(buchang))
            // 匀速动画的步长
            // if(Math.abs(Math.floor(buchang))<=1)
            // 缓速动画的步长
            {
                flag=false;
                // 如果步长不是整十，所以当方块靠近重点或越过终点的时候要归位，并且关闭定时器停止下来
            }else{
                startSpace=num;
            }
            ele.style[key]=startSpace+"px";
            // 修改方块的marginleft
            if(flag){
                clearInterval(timerId);
                fn&&fn();
            }
    
        }
      
    },20);
}
window.linearAnimation=linearAnimation;
})();
