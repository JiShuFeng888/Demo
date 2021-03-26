window.onload=function(){
    let oToolbar=document.querySelector(".toolbar");
    let oNav=document.querySelector(".nav");
    let oMenu=document.querySelector("#myMenu");
    let menuUp=document.querySelector(".menu-up");
    let menuDown=document.querySelector(".menu-down");
    let oLis=document.querySelectorAll(".section-four>ul>li");
    let oImgs=document.querySelectorAll(".section-four>ul>li>img");
    let oH3s=document.querySelectorAll(".section-four>ul>li>h3");
    let oTip=document.querySelector(".tip");



    // 初始化fullpage
    new fullpage('#fullpage', {
        sectionsColor : ['black', 'black','black','black','black','black','black'],
        verticalCentered:false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage','sixthPage'],
        menu: '#myMenu',



         onLeave: function(origin, destination, direction){
        if(destination.isFirst){
            oToolbar.style.display="block";
            oNav.style.top="42px";
            oMenu.style.display="none";
        }else{
            oToolbar.style.display="none";
            oNav.style.top="0px";
            oMenu.style.display="block";
        }
        if(destination.isLast){
            oTip.style.display="none";
        }else{
            oTip.style.display="block";
        }
    }
    
    

        }
    );

    menuUp.onclick=function(){
        fullpage_api.moveSectionUp();
    };
    menuDown.onclick=function(){
        fullpage_api.moveSectionDown();
    };


    initSection4Img();


    function initSection4Img(){
        for(let i=0;i<oLis.length;i++){
            oLis[i].onmouseenter=function(){
                oLis[0].style.width="20%";
                oLis[1].style.width="20%";
                oLis[2].style.width="20%";
                oLis[i].style.width="60%";
                if(i===0){
                    oImgs[0].style.left=0;
                }else if(i===2){
                    oImgs[2].style.right=0;
                }
                oImgs[i].style.opacity=1;
                oH3s[i].style.opacity=1;
            };
            oLis[i].onmouseleave=function(){
                oLis[0].style.width="33%";
                oLis[1].style.width="34%";
                oLis[2].style.width="33%";
                if(i===0){
                    oImgs[0].style.left=-180+"px";
                }else if(i===2){
                    oImgs[2].style.right=-180+"px";
                }
                oImgs[i].style.opacity=0.6;
                oH3s[i].style.opacity=0.6;

    
        };
    }

}









}
// function  a(xx){
//     this.x=xx;
//     return this;
// }
// var x=a(5);
// var y=a(6);
// console.log(x.x);
// console.log(y.x);
