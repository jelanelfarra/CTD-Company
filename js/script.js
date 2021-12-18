$(document).ready(function (){

	
    $('.carousel').carousel({
        interval:4000
    });
});

$(function (){
    'use strict' ;
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

    });

    // Click On Botton To Scroll Top 
    scrollButton.click(function () {
        $("html ,body").animate({ scrollTop: 0 }, 600);

    });
}); 
    
document.getElementById('tog-btn').onclick = function(){
      var Bag =  document.getElementById('bag');
          Bag.style.display = "none";   
}
    var ImgOne = document.getElementById('img1'),
        Pic1 = document.getElementById('pic1'),
        ImgTwo = document.getElementById('img2'),
        Pic2 = document.getElementById('pic2'),
        ImgThree = document.getElementById('img3'),
        Pic3 = document.getElementById('pic3'),
        ImgFour = document.getElementById('img4'),
        Pic4 = document.getElementById('pic4');


    ImgOne.addEventListener('mouseover',changeOne);
    ImgOne.addEventListener('mouseout',changeOnee);
    ImgTwo.addEventListener('mouseover',changeTwo);
    ImgTwo.addEventListener('mouseout',changeTwoo);
    ImgThree.addEventListener('mouseover',changeThree);
    ImgThree.addEventListener('mouseout',changeThreee);
    ImgFour.addEventListener('mouseover',changeFour);
    ImgFour.addEventListener('mouseout',changeFourr);
    

    function changeOne(){
        Pic1.setAttribute('width','80%'); 
        Pic1.src ="https://static.wixstatic.com/media/9c608a_02ab3c69f2bb4397b73f28f0d5d0d466.jpg/v1/fill/w_465,h_465,al_c,q_85,usm_0.66_1.00_0.01/9c608a_02ab3c69f2bb4397b73f28f0d5d0d466.jpg"
    }
    function changeOnee(){
        Pic1.src ="https://static.wixstatic.com/media/9c608a_a220b0ace7c14f89b580dceded35f7b6.jpg/v1/fill/w_492,h_492,al_c,q_85,usm_0.66_1.00_0.01/9c608a_a220b0ace7c14f89b580dceded35f7b6.webp%22);"
    }
    function changeTwo(){
        Pic2.setAttribute('width','80%'); 
        Pic2.src ="https://static.wixstatic.com/media/9c608a_36e11adb6d8841098c281113e76f48c3.jpg/v1/fill/w_394,h_465,al_c,q_85,usm_0.66_1.00_0.01/9c608a_36e11adb6d8841098c281113e76f48c3.jpg"
    }
    function changeTwoo(){
        Pic2.src ="https://static.wixstatic.com/media/9c608a_8ac1adb0a50749a5aa72cd0181945cd0.jpg/v1/fill/w_465,h_465,al_c,q_85,usm_0.66_1.00_0.01/9c608a_8ac1adb0a50749a5aa72cd0181945cd0.jpg"
    }
    function changeThree(){
        Pic3.setAttribute('width','80%'); 
        Pic3.src ="https://static.wixstatic.com/media/9c608a_562215ea6c354b07bcd40b079df48c46.jpg/v1/fill/w_465,h_465,al_c,q_85,usm_0.66_1.00_0.01/9c608a_562215ea6c354b07bcd40b079df48c46.jpg"
    }
    function changeThreee(){
        Pic3.src ="https://static.wixstatic.com/media/9c608a_8db6307d7c7b4b70b675a59fd036787e.jpg/v1/fill/w_465,h_465,al_c,q_85,usm_0.66_1.00_0.01/9c608a_8db6307d7c7b4b70b675a59fd036787e.jpg"
    }
    function changeFour(){
        Pic4.setAttribute('width','80%'); 
        Pic4.src ="https://static.wixstatic.com/media/9c608a_8c2439ea7a264abd853460a43578bacb.jpg/v1/fill/w_475,h_465,al_c,q_85,usm_0.66_1.00_0.01/9c608a_8c2439ea7a264abd853460a43578bacb.jpg"
    }
    function changeFourr(){
        Pic4.src ="https://static.wixstatic.com/media/9c608a_1a0f12c2b7d44080a23e2642cae13b74.jpg/v1/fill/w_465,h_465,al_c,q_85,usm_0.66_1.00_0.01/9c608a_1a0f12c2b7d44080a23e2642cae13b74.jpg"
    }
 





