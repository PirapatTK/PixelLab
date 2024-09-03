document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("side-bar");
    if (!sideBar) {
        return;
    }

    let sideBarSize = "250px";

    // set sidebar size based on screen width
    function setSidebarSize() {
        if (window.innerWidth < 1024) {
            sideBarSize = "200px";
        } else {
            sideBarSize = "250px";
        }

        if (sideBar.style.width !== "0px") {
            sideBar.style.width = sideBarSize;
            document.getElementById("content-body").style.marginLeft = sideBarSize;
        }
    }

    function toggleSideBar() {
        const sideBarWidth = window.getComputedStyle(sideBar).width;
        
        if (sideBarWidth === "0px") {
            openNav();
        } else {
            closeNav();
        }
    }

    function openNav() {
        sideBar.style.width = sideBarSize;
        document.getElementById("content-body").style.marginLeft = sideBarSize;
    }
    
    function closeNav() {
        sideBar.style.width = "0";
        document.getElementById("content-body").style.marginLeft = "0";
    }

    // Set initial sidebar size when page loads
    setSidebarSize();

    // Update sidebar size when the window is resized
    window.addEventListener('resize', setSidebarSize);

    // Expose toggleSideBar function to global scope if needed
    window.toggleSideBar = toggleSideBar;
});
