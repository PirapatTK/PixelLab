function toggleSideBar() {
    // Get the width of the side bar
    var sideBar = document.getElementById("side-bar");
    var sideBarWidth = window.getComputedStyle(sideBar).width;

    if (sideBarWidth === "250px") {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    // Set the width of the side bar to 250px (Open)
    document.getElementById("side-bar").style.width = "250px";
    document.getElementById("content-body").style.marginLeft = "250px";
}

function closeNav() {
    // Set the width of the side bar to 0 (Close)
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("content-body").style.marginLeft = "0";
}
