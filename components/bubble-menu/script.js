var front_toggle = 0;
var front_node = document.getElementById("menu_front").childNodes;
function expandFront() {
    document.getElementById("toggle_front").style.transform = "translateY(2px)";
    setTimeout(() => { document.getElementById("toggle_front").style.transform = "translateY(-2px)"}, 100);
    if(front_toggle == 0) {
        //code
        document.getElementById("menu_front").style.transform = "scale(1)";

        front_node[1].style.transform ="translate(84.9px, -84.9px)";
        front_node[3].style.transform ="translate(-84.9px, -84.9px)";
        front_node[5].style.transform ="translateY(120px)";
        front_toggle = 1;
    }else{
        //code
        document.getElementById("menu_front").style.transform = "scale(0.9)";
        front_node[1].style.transform ="translateY(0)";
        front_node[3].style.transform ="translate(0)";
        front_node[5].style.transform ="translate(0)";
        front_toggle = 0;
    }
}

var back_toggle = 0;
var back_node = document.getElementById("menu_back").childNodes;
function expandBack() {
    document.getElementById("toggle_back").style.transform = "translateY(2px)";
    setTimeout(() => { document.getElementById("toggle_back").style.transform = "translateY(-2px)"}, 100);
    if(back_toggle == 0) {
        //code
        document.getElementById("menu_back").style.transform = "scale(1)";
        back_node[1].style.transform ="translate(-104px, 60px)";
        back_node[3].style.transform ="translate(104px, 60px)";
        back_node[5].style.transform ="translate(104px, -60px)";
        back_node[7].style.transform ="translateY(120px)";
        back_node[9].style.transform ="translate(-104px, -60px)";
        back_toggle = 1;
    }else{
        //code
        document.getElementById("menu_back").style.transform = "scale(0.9)";
        back_node[1].style.transform ="translateY(0)";
        back_node[3].style.transform ="translate(0)";
        back_node[5].style.transform ="translate(0)";
        back_node[7].style.transform ="translate(0)";
        back_node[9].style.transform ="translate(0)";

        back_toggle = 0;
    }
}

var os_toggle = 0;
var os_node = document.getElementById("menu_os").childNodes;
function expandOS() {
    document.getElementById("toggle_os").style.transform = "translateY(2px)";
    setTimeout(() => { document.getElementById("toggle_os").style.transform = "translateY(-2px)"}, 100);
    if(os_toggle == 0) {
        //code
        document.getElementById("menu_os").style.transform = "scale(1)";

        os_node[1].style.transform ="translateX(-120px)";
        os_node[3].style.transform ="translateX(120px)";
        os_node[5].style.transform ="translateY(120px)";
        os_toggle = 1;
    }else{
        //code
        document.getElementById("menu_os").style.transform = "scale(0.9)";
        os_node[1].style.transform ="translateX(0)";
        os_node[3].style.transform ="translateX(0)";
        os_node[5].style.transform ="translateY(0)";
        os_toggle = 0;
    }
}