$(function(){
    $(".navbar-toggler").click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }
    });

    $(".login").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    });

    $(".modal-close").click(function(){
        $('#exampleModal').modal('hide');
    });

    // 吸顶效果
    let headerHeight=$(".header-top").height()+$(".header-middle").height();
    $(window).scroll(function(){
        let offsetY=$("body").scrollTop()+$("html").scrollTop();
        if(offsetY>=headerHeight){
            $(".header-top").removeClass("d-md-block");
            $(".header-middle").hide();
        }else{
            $(".header-top").addClass("d-md-block");
            $(".header-middle").show();
        }
    });

    // 控制第二屏的自动轮播
    let  mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        // loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          bulletClass : 'my-bullet',//需设置.my-bullet样式
          bulletActiveClass: 'my-bullet-active',
        },
        autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        },
        // 轮播图中的动画
        on:{
            init: function(){
              swiperAnimateCache(this); //隐藏动画元素 
              swiperAnimate(this); //初始化完成开始动画
            }, 
            slideChangeTransitionEnd: function(){ 
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
              //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
              let offsetY=this.activeIndex*45;
              $(".swiper-name>span").animate({top:-offsetY},1000);
              $(".swiper-num>span").animate({top:-offsetY},1000);
              console.log(this.activeIndex);
            } 
          }
    
      });  
    mySwiper.autoplay.stop();

    // 1.创建一个控制器
    let controller=new ScrollMagic.Controller();
    // 2.创建控制器对象
    let scene=new ScrollMagic.Scene(
        {
            triggerElement:".section1-trigger",
            triggerHook:"onLeave",
            duration:"100%",
        }
    );
    scene.setPin(".section1",{pushFollowers: false});
    // 3.将场景对象添加到控制器对象中
    controller.addScene(scene);





    // 2.创建控制器对象
    let scene2=new ScrollMagic.Scene(
        {
            triggerElement:".section2-trigger",
            triggerHook:"onEnter",
        }
    );
    scene2.setVelocity([".section2-top>div",".section2-top>div>p"],{
        top:"0px",
        opacity:"1",
    },{
        duration:500
    });
    // 3.将场景对象添加到控制器对象中
    controller.addScene(scene2);





    // 2.创建控制器对象
    let scene3=new ScrollMagic.Scene(
        {
            triggerElement:".section2-trigger",
            triggerHook:"onLeave",
            offset:$(".section2-top").height()+100,
            duration:"100%",
        }
    );
    scene3.setPin(".section2",{pushFollowers: false});
    let tm=new TimelineMax();
    tm.add([
        new TweenMax(".middle-left",1,{
            opacity:0,
            transform: "translateX(-100%)",
        }),
        new TweenMax(".middle-right",1,{
            opacity:0,
            transform: "translateX(100%)",
        }),
        new TweenMax(".middle-text",1,{
            opacity:1,
            delay:0.4,
        })
    ]);
    tm.add(
        new TweenMax(".middle-phone",1,{
            opacity:1,
        })
    );
    scene3.setTween(tm);
    // 3.将场景对象添加到控制器对象中
    controller.addScene(scene3);



    // 2.创建控制器对象
    let scene4=new ScrollMagic.Scene(
        {
            triggerElement:".section2-bottom",
            triggerHook:"onCenter",
        }
    );
    scene4.on("start", function (event) {
        // console.log("进入场景");
        // mySwiper.autoplay.start();
        if(event.scrollDirection==="FORWARD"){
            mySwiper.autoplay.start();
        }else{
            mySwiper.autoplay.stop();
        }
    });
    // 3.将场景对象添加到控制器对象中
    controller.addScene(scene4);
      




















});