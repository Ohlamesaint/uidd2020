var selector = document.querySelector("#selector");
var selectBar = document.querySelector(".selectBar");
var middleContanter = document.querySelector(".container-middle")
var el = document.body;
var barRightX = selectBar.offsetWidth/2+18;
var posXBuf = 0;
var goodTrip = document.querySelector("#goodTrip");
var niceFly = document.querySelector("#niceFly");
var blueBar2 = document.querySelector("#blueBar2");
var rightBlue = document.querySelector("#rightBlue");
var mainImg = document.querySelector("#mainImg");
var topWord = document.querySelector("#topWord");
var blueMan = document.querySelector("#blueMan");
var iconList = document.querySelector(".flex-container-footer ul");
var leftRed = document.querySelector("#leftRed");
var orangeBar2 = document.querySelector("#orangeBar2");
var redGirl = document.querySelector("#redGirl");
var help = document.querySelector(".help");
var language = document.querySelector(".language");
var redHelpButton = document.querySelector(".redHelpButton");
var blueHelpButton = document.querySelector(".blueHelpButton");
var mapRed = document.querySelector(".mapRed");
var mapBlue = document.querySelector(".mapBlue");
var redList = document.querySelector("#redList");
var blueList = document.querySelector("#blueList");             //與maptag對應
var blueTag = document.querySelectorAll(".blueTag");
var redTag = document.querySelectorAll(".redTag");
var greeting = document.querySelector(".greeting");
var initial = true;

let svg = document.querySelector('svg#logoIn');
let nodelist = svg.querySelectorAll(".path")
let pathes = Array.prototype.slice.call(nodelist);

let lengths = [];
let speed = 1000;










function move(e){
    var posX = e.clientX-(window.innerWidth/2)+20;
    if(posX>20&&posX<barRightX || posX>(-barRightX)&&posX<(-20)){
        selector.style.margin = "0px 0px 0px "+posX+"px";
        middleContanter.style.transform = "translateX("+posX+"px)";
    }
    else if(posX<(-barRightX)){
        selector.style.margin = "0px 0px 0px " + (-barRightX) + "px";
        middleContanter.style.transform = "translateX("+(barRightX)+"px)";
    }
    else if(posX>(barRightX)){
        selector.style.margin = "0px 0px 0px " + barRightX + "px";
        middleContanter.style.transform = "translateX("+(-barRightX)+"px)";
    }
    posXBuf = posX;
}

function animateCSS(element, animationName, callback) {
    const node = element;
    node.classList.add('animated', animationName);
    
    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
        
        if (typeof callback === 'function') callback();
    }
    
    node.addEventListener('animationend', handleAnimationEnd);
}

$(document).ready(function(){
    if(initial){
        pathes.forEach((el, i) => {
            let len = el.getTotalLength();
            lengths.push(len);
            el.style.strokeDasharray = len;
            el.style.strokeDashoffset = len; 
            setTimeout(()=>{
                el.classList.add("path-line");
            })
        });
        setTimeout(()=>{
            pathes.forEach((el, i) => {
                el.style.strokeDashoffset = 0;
            })
        });
        setTimeout(()=>{
            pathes.forEach((el, i) => {
                el.classList.add("path-back");
                el.classList.remove("path");
            })
        }, 2830);
        $(greeting).delay(4000).slideUp(); 
        initial = false;
    }
    
    $(selector).mousedown(function () { 
        selector.style.opacity = 1.0;
        el.addEventListener("mousemove", move, false);
    });  
    
    $(el).mouseup(function () { 
        el.removeEventListener("mousemove", move);
        var i = parseInt(selector.style.marginLeft.length);
        selector.style.marginLeft = "0px";
        if(posXBuf>=(barRightX)){
            middleContanter.style.transform = "translateX("+(-300)+"px)";
            animateCSS(niceFly, 'jackInTheBox', function() {
                $(rightBlue).fadeToggle();
                $(mainImg).fadeToggle();
                $(topWord).fadeToggle();
                $(selector).fadeToggle();
                $(selectBar).fadeToggle();
                $(iconList).fadeToggle();
                $(language).fadeToggle();
                setTimeout(() =>{   
                    return new Promise(function (resolve, reject) {
                        setTimeout(() => {
                            blueBar2.classList.add("show");
                            blueBar2.classList.remove("hide");
                            blueHelpButton.style.zIndex = "99";
                            blueHelpButton.classList.add("show");
                            blueHelpButton.classList.remove("hide");
                            help.classList.add("show");
                            help.classList.remove("hide-div");
                            $(language).fadeToggle();
                            return resolve(blueMan);
                        }, 300);
                    }).then(res => {
                        setTimeout(() =>{
                            console.log(res);
                            blueMan.classList.add("show-imme");
                            blueMan.classList.remove("hide-imme");
                            blueMan.classList.add("slideInFromLeft");
                        }, 500);
                    }).then(res => {
                        setTimeout(() =>{
                            blueMan.classList.add("rotated");
                        }, 1200)
                    }).then(() => {
                        setTimeout(() =>{
                            mapBlue.classList.add("show");
                            mapBlue.classList.remove("hide");
                            blueList.classList.add("show");
                            blueList.classList.remove("hide");
                        }, 1500)
                    }).catch(function (error) {
                        console.log(error);
                    });
                }, 800);
            })
        }
        else if(posXBuf<=(-barRightX)){
            middleContanter.style.transform = "translateX("+(300)+"px)";
            animateCSS(goodTrip, 'jackInTheBox', function() {
                $(leftRed).fadeToggle();
                $(mainImg).fadeToggle();
                $(topWord).fadeToggle();
                $(selector).fadeToggle();
                $(selectBar).fadeToggle();
                $(iconList).fadeToggle();
                $(language).fadeToggle();
                setTimeout(() =>{   
                    return new Promise(function (resolve, reject) {
                        setTimeout(() => {
                            orangeBar2.classList.add("show");
                            orangeBar2.classList.remove("hide");
                            redHelpButton.classList.add("show");
                            redHelpButton.classList.remove("hide");
                            redHelpButton.style.zIndex = "99";
                            help.classList.add("show");
                            help.classList.remove("hide-div");
                            $(language).fadeToggle();
                            return resolve(redGirl);
                        }, 300);
                    }).then(res => {
                        setTimeout(() =>{
                            console.log(res);
                            redGirl.classList.add("show-imme");
                            redGirl.classList.remove("hide-imme");
                            redGirl.classList.add("slideInFromRight");
                        }, 500);
                    }).then(res =>{
                        setTimeout(() => {
                            mapRed.classList.add("show");
                            mapRed.classList.remove("hide");
                            redList.classList.add("show");
                            redList.classList.remove("hide");
                        }, 2500);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }, 800);
            })
        }
        else{
            middleContanter.style.transform = "translateX(0px)";
        }
        selector.style.opacity = 0.5;
    })
    
    $("#blueList a").on("click",(event)=>{
        event.preventDefault();
    })
    $("#redList a").on("click",(event)=>{
        event.preventDefault();
    })
    
    blueList.addEventListener("click", (event)=>{
        $(blueMan).removeClass("manShake")
        blueMan.offsetWidth = blueMan.offsetWidth;
        $(blueMan).addClass("manShake");
        blueTag.forEach(element => {            
            element.classList.add("hide-tag")
            element.classList.remove("show-tag");
        });
        blueTag[event.target.dataset.item-1].classList.add("show-tag");
        blueTag[event.target.dataset.item-1].classList.remove("hide-tag");
        switch(event.target.dataset.item){
            case "3":
            blueTag[10].classList.add("show-tag");
            blueTag[10].classList.remove("hide-tag"); 
            break;
            case "4":
            blueTag[11].classList.add("show-tag");
            blueTag[11].classList.remove("hide-tag"); 
            break;
            case "5":
            blueTag[12].classList.add("show-tag");
            blueTag[12].classList.remove("hide-tag"); 
            break;
            default:
            break;
        }
    }, false)
    
    redList.addEventListener("click", (event)=>{
        $(redGirl).removeClass("manShake")
        redGirl.offsetWidth = redGirl.offsetWidth;
        $(redGirl).addClass("manShake");
        redTag.forEach(element => {            
            element.classList.add("hide-tag")
            element.classList.remove("show-tag");
        });
        redTag[event.target.dataset.item-1].classList.add("show-tag");
        redTag[event.target.dataset.item-1].classList.remove("hide-tag");
        switch(event.target.dataset.item){
            case "5":
            redTag[10].classList.add("show-tag");
            redTag[10].classList.remove("hide-tag"); 
            break;
            case "9":
            redTag[11].classList.add("show-tag");
            redTag[11].classList.remove("hide-tag"); 
            break;
            case "10":
            redTag[12].classList.add("show-tag");
            redTag[12].classList.remove("hide-tag"); 
            break;
            default:
            break;
        }
    }, false);
}
)
