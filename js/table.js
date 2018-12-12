//��������ֲ�����Ч��
$(document).ready(function(){
    var slideBox = $(".slideBox");
    var ul = slideBox.find("ul");
    var oneWidth = slideBox.find("ul li").eq(0).width();
    console.log(oneWidth);
    var number = slideBox.find(".spanBox span");            //ע��ֺ� �Ͷ��ŵ��÷�
    var timer = null;
    var sw = 0;
    //ÿ��span��click�¼�������л���ɫ�Ͷ������Լ���ȡ����ֵ
    number.on("click",function (){
        $(this).addClass("active").siblings("span").removeClass("active");
        sw=$(this).index();
        ul.animate({
            "right":oneWidth*sw,    //ul��ǩ�Ķ���Ϊ�����ƶ���
        });
    });
    //���Ұ�ť�Ŀ���Ч��
    $(".next").stop(true,true).click(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
    });
    $(".prev").stop(true,true).click(function (){
        sw--;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
    });
    //��ʱ����ʹ�ã��Զ���ʼ
    timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
    },2000);
    //hover�¼������ͣ�ͣ�����ͼ��Ķ���Ч��
    slideBox.hover(function(){
        $(".next,.prev").animate({
            "opacity":1,
        },200);
        clearInterval(timer);
    },function(){
        $(".next,.prev").animate({
            "opacity":0.5,
        },500);
        timer = setInterval(function (){
            sw++;
            if(sw==number.length){sw=0};
            number.eq(sw).trigger("click");
        },2000);
    })

})

