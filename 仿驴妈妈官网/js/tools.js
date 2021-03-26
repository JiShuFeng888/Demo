(function(){
    // 获取网页滚动距离兼容
    function getPageScroll(){
        let x,y;
        if(window.pageXOffset){
            x=window.pageXOffset;
            Y=window.pageYOffset;
        }
        else if(document.compatMode==="BackCompat"){
            x=document.body.scrollLeft;
            y=document.body.scrollTop;
        }else{
            x=document.documentElement.scrollLeft;
            y=document.documentElement.scrollTop;
        }return{
            x:x,
            y:y
        };
    }
    // 获取网页可视区域宽高兼容
    function getScreen(){
                let width,height;
                if(window.innerWidth){
                    width=window.innerWidth;
                    height=window.innerHeight;
                }
                else if(document.compatMode==="BackCompat"){
                    width=document.body.clientWidth;
                    height=document.body.clientHeight;
                }else{
                    width=document.documentElement.clientWidth;
                    height=document.documentElement.clientHeight;
                }return{
                    width:width,
                    height:height
                };
    }
    // 添加事件兼容
    function addEvent(ele,name,fn){
            if(ele.attachEvent){
                ele.attachEvent("on"+name,fn);
            }else{
                ele.addEventListener(name,fn);
            }
    }
    //元素获取CSS样式兼容
    function getStyleAttr(obj,name){
            if(obj.currentStyle[name]){
                return obj.currentStyle[name];
            }else{
                return getComputedStyle(obj)[name];
            }
    }
    // 函数防抖
    function debounce(fn,delay){
        let timerId=null;
        return function(){
            let self=this;
            let args=arguments;
            timerId&&clearTimeout(timerId);
            timerId=setTimeout(function(){
            fn.apply(self,args);
        },delay||1000);
    }
    }                       
    // 函数节流
    function throttle(fn,delay){
        // let timerId=null;
        let flag=true;
        return function(){
            if(flag!=true) return;
            flag=false;
            let self=this;
            let args=arguments;
            // timerId&&clearTimeout(timerId);
            // timerId=
            setTimeout(function(){
            flag=true;
            fn.apply(self,args);
        },delay||500);
    }
    }





    window.getPageScroll=getPageScroll;
    window.getScreen=getScreen;
    window.addEvent=addEvent;
    window.getStyleAttr=getStyleAttr;
    window.debounce=debounce;
    window.throttle=throttle;
})();