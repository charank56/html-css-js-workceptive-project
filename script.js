// on clicking the meunu to discribe more about cake 
var divs = ["details", "specification", "video", "review"];
var visibleId=0;

function show(id) {
    if (visibleId != id)
    {
        visibleId=id;
    }
    hide();
}
function hide(){
    var div,i,id;
    for (i=0;i<divs.length;i++)
    {
        id = divs[i];
        div=document.getElementById(id);
        if (visibleId===id)
        {
            div.style.display = "block";
        }
        else
        {
            div.style.display = "none";
        }
    }
}
window.addEventListener('DOMContentLoaded',function(){
    show(divs[visibleId]);
});

// to make active menubar 
var prod_nav =document.getElementById('prod_nav');
var btns=prod_nav.getElementsByClassName('clik-activ');
for(var i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',function(){
        var current=document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active"," ");
        // console.log(this.className);
        this.className+=" active";
    })
}

// upside arrow button 
let arrow_button=document.querySelector('#arrow-buton');
window.addEventListener('scroll', ()=>{
    
    if(window.scrollY >=100){
        arrow_button.style.visibility="visible";
    }
    else{
        arrow_button.style.visibility=" hidden";
    }
});
arrow_button.addEventListener('click',() => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})

// side bar left toggling

const openNav = () =>{
    // alert('helo');
    document.getElementById('side-bar-left').style.width = '300px';
}
const closeNav = () =>{
    document.getElementById('side-bar-left').style.width = '0px';
}
window.onscroll =()=>{
    document.getElementById('side-bar-left').style.width = '0px';
};

document.onclick=function(e){
    if(e.target.id!=='side-bar-left' && e.target.id!=='menu-icon1')
    {
        document.getElementById('side-bar-left').style.width = '0px';
    }
}


// side bar right toggling

const openRightNav = () =>{
    // alert('helo');
    document.getElementById('side-bar-right').style.width = '300px';
}
const closeRightNav = () =>{
    document.getElementById('side-bar-right').style.width = '0px';
}
window.onscroll =()=>{
    document.getElementById('side-bar-right').style.width = '0px';
};

document.onclick=function(e){
    if(e.target.id!=='side-bar-right' && e.target.id!=='menu-icon2')
    {
        document.getElementById('side-bar-right').style.width = '0px';
    }
}


// responsive 446px max-width footer navigation 

var foots = ["company-detail", "about", "policy", "information"];
var visbl_clik=0;

function shows(id) {
    if (visbl_clik != id)
    {
        visbl_clik=id;
    }
    hides();
}
function hides(){
    var footr,i,id;
    for (i=0;i<foots.length;i++)
    {
        id = foots[i];
        footr=document.getElementById(id);
        if (visbl_clik===id)
        {
            footr.style.display = "block";
        }
        else
        {
            footr.style.display = "none";
        }
    }
}
// window.addEventListener('DOMContentLoaded',function(){
//     show(divs[visbl_clik]);
// });