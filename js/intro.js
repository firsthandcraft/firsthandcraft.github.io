$(document).ready(function(){

    // aside 마우스 오버시 글씨 나타나기
    $('aside#submenu>ul>li').mouseover(function(){
		var index = $(this).index();
		$('.subtext').eq(index).stop().fadeIn();
        $('aside#submenu>ul>li>a>span')
        .css('border-color','#e23c00').slideDown();
	})
    $('aside#submenu>ul>li').mouseleave(function(){
		$('.subtext').stop().fadeOut();
        $('aside#submenu>ul>li>a>span').slideUp().css('border-color','#4e2c14');
	});

    //aside click scroll
    let asideH = $('#submenu').height();
    // console.log(asideH);
    let asideMtop=(asideH)/2;
    // console.log(asideMtop);
    $('#submenu').css('margin-top','-'+asideMtop+'px');

    $('#submenu>ul>li>a').on('click',function(){
    // css정리 
    let secPos = $(this).attr('href');
    let headerH = $('#headerwrap').innerHeight();
    console.log(secPos,headerH);
    let sec = $(secPos).position().top;
    console.log(sec);

    //aside animation 
    $('html, body').stop().animate({
      scrollTop:sec
    },1200);
    return false;
    });
    // 
    $('#submenu>ul>li:first>a').addClass('on');
    $(window).on('scroll',function(e){
        let headerH = $('#headerwrap').innerHeight();

        let dScroll = $(window).scrollTop();
        let dTop1 = ($('#box01').position().top)-headerH;
        let dTop2 = ($('#box02').position().top)-headerH;
        let dTop3 = ($('#box03').position().top)-headerH;
        let dTop4 = ($('#box04').position().top)-headerH;
        let dTop5 = ($('#box05').position().top)-headerH;
        let dTop6 = ($('#box05').position().top);
        console.log(dTop1,dTop2,dTop3,dTop4,dTop5,dTop6);
        if(dScroll >= dTop1 && dScroll < dTop2){
            $('#submenu>ul>li>a').removeClass();
            $('#submenu>ul>li:eq(0)>a').addClass('on');
            $('.subtitle>h3').text(' ');
            // 로고
            let IMG = document.querySelector('header>h1.logo>a>img');
            IMG.setAttribute('src','img/logos.png');
            // 햄버거 네비
            $('#btn>span').css('background-color','#4e2c14');
        }
        if(dScroll >= dTop2 && dScroll < dTop3){
            $('#submenu>ul>li>a').removeClass('on');
            $('#submenu>ul>li:eq(1)>a').addClass('on');
            $('.subtitle>h3').text('ABOUT').css('color','#fff');
            // 로고
            let IMG = document.querySelector('header>h1.logo>a>img');
            IMG.setAttribute('src','img/logoswh.png');
            // 햄버거네비
            $('#btn>span').css('background-color','#fff');
        }
        if(dScroll >= dTop3 && dScroll < dTop4){
            $('#submenu>ul>li>a').removeClass('on');
            $('#submenu>ul>li:eq(2)>a').addClass('on');
            $('.subtitle>h3').text('SKILLS').css('color','#fff');
            let IMG = document.querySelector('header>h1.logo>a>img');
            IMG.setAttribute('src','img/logoswh.png');
            // 햄버거네비
            $('#btn>span').css('background-color','#fff');
            
        }    
        if(dScroll >= dTop4 && dScroll < dTop5){
            $('#submenu>ul>li>a').removeClass('on');
            $('#submenu>ul>li:eq(3)>a').addClass('on');
            $('.subtitle>h3').text('WEB WORKS').css('color','#4e2c14');
            let IMG = document.querySelector('header>h1.logo>a>img');
            IMG.setAttribute('src','img/logos.png');
            // 햄버거 네비
            $('#btn>span').css('background-color','#4e2c14');
        }
        if(dScroll >= dTop5 && dScroll < dTop6){
            $('#submenu>ul>li>a').removeClass('on');
            $('#submenu>ul>li:eq(4)>a').addClass('on');
            $('.subtitle>h3').text('ETC WORKS').css('color','#4e2c14');
            let IMG = document.querySelector('header>h1.logo>a>img');
            IMG.setAttribute('src','img/logos.png');
            // 햄버거 네비
            $('#btn>span').css('background-color','#4e2c14');
        }
    });


    // btn 클릭시 네비 페이지 창 나오게
    $('#btn').click(function(){
        $('nav').stop().show();
    });
    $('nav>.close').click(function(){
        $('nav').stop().hide();
    });
    $('nav>ul>li>a').click(function(){
         $('nav').stop().hide();
    });



    // box02 abiout  tabmenu
    $('#box02 ul.icon>li').eq(this).addClass('on');
    $('#box02 ul.icon>li').click(function(){
        var index = $(this).index();
        $('#box02 h4').hide();
        $('#box02 .substance>li').hide();
        $('#box02 ul.icon>li').removeClass('on');
        $('#box02 .substance>li').eq(index).show();
        $('#box02 ul.icon>li').eq(index).addClass('on');
        return false;
    });
     // about 이미지 슬라이드
     $('#box02 .leftbt>a').on('click',function(e){
        $('.icon>li:last').prependTo('.icon');
        $('.substance>li:last').prependTo('.substance');
        var index = $(this).index();
        $('#box02 .substance>li').hide();
        $('#box02 .substance>li').eq(index).show();
        return false;
    });
    
    $('#box02 .rightbt').on('click',function(e){
        $('.icon>li:first').appendTo('.icon');
        $('.substance>li:first').appendTo('.substance');
        var index = $(this).index();
        $('#box02 .substance>li').hide();
        $('#box02 .substance>li').eq(index).show();
        return false;
    });
    // #box02 마우스 오버
    $('#box02>article>.box02big>.box02small>.icon li span').css("opacity","0")
    $('#box02>article>.box02big>.box02small>.icon li').mouseover(function(){
        $(this).find("span").stop().animate({
            "opacity":"1",
        },1000);
    });
    $('#box02>article>.box02big>.box02small>.icon li').mouseleave(function(){
        $(this).find("span").stop().animate({
            "opacity":"0"
        },1000);
    });

   

    // box03 skills tabmenu
    $('#box03>article>.text>.mini>li>a').eq(0).addClass('on');
    $('#box03>article>.text>.mini>li').click(function(){
        var index = $(this).index();
        $('#box03>article>.text dl').hide();
        $('#box03>article>.text>.mini>li>a').eq(0).removeClass('on');
        $('#box03>article>.text dl').eq(index).show();
        $('#box03>article>.text>.mini>li>a').eq(index).addClass('on');
        return false;
    });

    $('#box03>article .title>ul>li:not(.de)').click(function(){
        // let tc = $(this).attr('class')
        // console.log(tc);
        $('#box03>article>.text dl.design').hide();
        $('#box03>article>.text dl.cording').show();
        return false;
    });
    $('#box03>article .title>ul>li.de').click(function(){
        $('#box03>article>.text dl.cording').hide();
        $('#box03>article>.text dl.design').show();
        return false;
    });
    //이미지 스크롤 애니 메이션 
    // $('.jjsmall>li:first-child').mouseover(function(){
    //     $(".museumovera>img").addClass("scrollx")
    //     $(".museumoverb>img").addClass("scrollp")
    //     $(".museumoverc>img").addClass("scrollm")
    // });
    // $('.jjsmall>li:first-child').mouseleave(function(){
    //     $(".museumovera>img").removeClass("scrollx")
    //     $(".museumoverb>img").removeClass("scrollp")
    //     $(".museumoverc>img").removeClass("scrollm")
	// });
    //  hover시 도형 투명도 1로 바꾸기
    $('#box03>article>.circle ul>li.de>a').mouseover(function(){
        $('#box03>article>.circle>.cordingimg').fadeOut(1600);
    });
    $('#box03>article>.circle ul>li.de>a').mouseleave(function(){
        $('#box03>article>.circle>.cordingimg').fadeIn(1600);
    });
    $('#box03>article>.circle ul>li:not(.de)>a').mouseover(function(){
        $('#box03>article>.circle>.designimg').fadeOut(1600);
    });
    $('#box03>article>.circle ul>li:not(.de)>a').mouseleave(function(){
        $('#box03>article>.circle>.designimg').fadeIn(1600);
    });
    


    // web box04 works 
    // tab메뉴
    $('#box04 .tabname>li').eq(0).addClass('on');
    $('#box04 .tabname>li').click(function(){
        var index = $(this).index();
        $('#box04 .imageslide>li').hide();
        $('#box04 .tabname>li').removeClass('on'); 
        $('#box04 .imageslide>li').eq(index).show();
        $('#box04 .tabname>li').eq(index).addClass('on');
        return false;
     });
    

    //  이미지 슬라이드
    let wWindow = $(window).width();
    if(wWindow>=980){
            var bigSize = $('#box04 .imageslide>li>ul>li').width();
            console.log(bigSize);
            //jj이미지슬라이드   
            var jjlegth = 4;
            $('#box04 .jjsmall').css('width',bigSize*jjlegth);
            $('.imgslide>li').width(bigSize);
            // setInterval(function(){	
            // $('#box04 .jjsmall').delay(1000).animate({marginLeft:'-='+bigSize+'px'},2000,function(){
            //     $('#box04 .box04big>ul>li>.jjsmall>li:first-child').appendTo('#box04 .box04big>ul>li>.jjsmall');
            //      $('#box04 .box04big>ul>li>.jjsmall').css('margin-left',0);
            // })
            // },3000)	
            
            // HC이미지 슬라이드
            var hclegth = 4;  
            $('#box04 .hcsmall').css('width',bigSize*hclegth);
            $('.imageslide>li').width(bigSize);
            setInterval(function(){	
            $('#box04 .hcsmall').delay(1000).animate({marginLeft:'-='+bigSize+'px'},2000,function(){
                $('#box04 .imageslide>li>.hcsmall>li:first-child').appendTo('#box04 .imageslide>li>.hcsmall');
                 $('#box04 .imageslide>li>.hcsmall').css('margin-left',0);
            })
            },5000)	
        }

        else if(wWindow<580){
               // nav mobile 사이즈 줄 나오게
            $('nav>ul>li').mouseover(function(){
                var index = $(this).index();
                $('nav>ul>li>img').eq(index).stop().fadeIn(200);
            });
            $('nav>ul>li').mouseleave(function(){
                $('nav>ul>li>img').stop().fadeOut(200);
            });
            $('#box02 .box02small>h4').fadeOut(7000);
            
        }else {
            // console.log('tabletsize=none if문');
        };

    // 오른쪽 왼쪽 화살표 움직이기
    $('#box04 .leftbt>a').on('click',function(e){
        $('.hcsmall>li:last').prependTo('.hcsmall');
        return false;
    }); 
    $('#box04 .rightbt>a').on('click',function(e){
        $('.hcsmall>li:first').appendTo('.hcsmall');
        return false;
    }); 

    // modal
    // $('#box05 .etcworks>.poto').click(function(){
    //     $('.jjmodal .potomo').stop().show();
    //     return false;
    // });
    // $('#box05 .etcworks>.seaworld').click(function(){
    //     $('.jjmodal .seawmo').stop().show();
    //     return false;
    // });
    // $('#box05 .etcworks>.herbsalt').click(function(){
    //     $('.jjmodal .herbmo').stop().show();
    // });
    // $('#box05 .etcworks>.jejusalt').click(function(){
    //     $('.jjmodal .jejumo').stop().show();
    // });

    // $('.jjmodal .close').click(function(){
    //     $('.jjmodal').stop().hide();
    //     return false;
    // });

        // // 새로고침 내용
        // resize
        // $(window).on('resize',function(e){
        //     window.location.reload();
        // });

        // 또는 이렇게 지만 복잡하니 새로 고침 으로 하기 
            // $(window).on('resize',function(){
            //     let wWindow = $(window).width();
            //     if(wWindow>=980){
                
            //     }
            //     if(wWindow>=580){
            //         // tablet
                
            //     } if(wWindow<580){
            //     // mobile
            //         // nav 클릭시 줄이나오게
            //         $('nav>ul>li').mouseover(function(){
            //             var index = $(this).index();
            //             $('nav>ul>li>img').eq(index).stop().fadeIn(200);
            //         });
            //         $('nav>ul>li').mouseleave(function(){
            //             $('nav>ul>li>img').stop().fadeOut(200);
            //         });
                    
            //     };
            // });

            // 마우스 움직이기
            // $(window).mousemove(function(e){

            //     $(".cursor").css({ left: e.clientX - 25, top: e.clientY - 25 });
            // })
});