let menulist = document.getElementById("menulist")
menulist.style.maxHeight = "0px";

function toggleMenu(){
    if(menulist.style.maxHeight == "0px")
    {
        menulist.style.maxHeight = "200px";
    }
    else{
        menulist.style.maxHeight = "0px";
    }
}