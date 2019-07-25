function showHide(ele) {
    var ele1 = document.getElementById("content-bar-1"),
        ele2 = document.getElementById("content-bar-2"),
        ele3 = document.getElementById("content-bar-3"),
        ele4 = document.getElementById("content-bar-4"),
        ele5 = document.getElementById("content-bar-5"),
        ele6 = document.getElementById("content-bar-6"),
        ele7 = document.getElementById("content-bar-7");

    switch(ele.id){
        case "step1":
            if (ele1.style.display === "none") {
                ele1.style.display = "block";
                } else {
                    ele1.style.display = "none";
                }
            break;

        case "step2":
            if (ele2.style.display === "none") {
                ele2.style.display = "block";
                } else {
                    ele2.style.display = "none";
                }
            break;

        case "step3":
            if (ele3.style.display === "none") {
                ele3.style.display = "block";
                } else {
                    ele3.style.display = "none";
                }
            break;

        case "step4":
            if (ele4.style.display === "none") {
                ele4.style.display = "block";
                } else {
                    ele4.style.display = "none";
                }
            break;

        case "step5":
            if (ele5.style.display === "none") {
                ele5.style.display = "block";
                } else {
                    ele5.style.display = "none";
                }
            break;

        case "step6":
            if (ele6.style.display === "none") {
                ele6.style.display = "block";
                } else {
                    ele6.style.display = "none";
                }
            break;

        case "step7":
            if (ele7.style.display === "none") {
                ele7.style.display = "block";
                } else {
                    ele7.style.display = "none";
                }
            break;

        case "step8":
            if (ele8.style.display === "none") {
                ele8.style.display = "block";
                } else {
                    ele8.style.display = "none";
                }
            break;
    }
    
  }

  $(document).ready(function(){

    $('#go-up').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });

    $(window).scroll(function(){
        // On top of the page, this button disapear
        if($(this).scrollTop() > 0){
            $('#go-up').slideDown(1000);
        }else{
            $('#go-up').slideUp(500);
        };
    });

  });