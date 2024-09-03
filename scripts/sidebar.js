function toggleSideBar() {
    var sideBar = document.getElementById("side-bar");
    var sideBarWidth = window.getComputedStyle(sideBar).width;

    if (sideBarWidth === "250px") {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    document.getElementById("side-bar").style.width = "250px";
    document.getElementById("content-body").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("content-body").style.marginLeft = "0";
}
