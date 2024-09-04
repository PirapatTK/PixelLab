document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("side-bar");
    const contentBody = document.getElementById("content-body");

    if (!sideBar || !contentBody) {
        return;
    }

    let sideBarSize = "250px";

    // Set sidebar size based on screen width
    function setSidebarSize() {
        if (window.innerWidth < 1024) {
            sideBarSize = "200px";
        } else {
            sideBarSize = "250px";
        }

        if (window.innerWidth < 768) {
            closeNav();
        } else {
            openNav();
        }
    }

    function toggleSideBar() {
        if (sideBar.offsetWidth === 0) {
            openNav();
        } else {
            closeNav();
        }
    }

    function openNav() {
        sideBar.style.width = sideBarSize;
        contentBody.style.marginLeft = window.innerWidth < 768 ? "0px" : sideBarSize;
        contentBody.style.filter = window.innerWidth < 768 ? "brightness(0.5)" : "none";
        contentBody.style.pointerEvents = window.innerWidth < 768 ? "none" : "auto"; // Disable interactions
        document.body.style.overflow = window.innerWidth < 768 ? "hidden" : "auto"; // Disable scrolling
    }
    
    function closeNav() {
        sideBar.style.width = "0";
        contentBody.style.marginLeft = "0";
        contentBody.style.filter = "none";
        contentBody.style.pointerEvents = "auto"; // Enable interactions
        document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Close sidebar when clicking on the content for screens smaller than 768px
    contentBody.addEventListener('click', () => {
        if (window.innerWidth < 768 && sideBar.offsetWidth > 0) { 
            closeNav();
        }
    });

    // Set initial sidebar size when page loads
    setSidebarSize();

    // Update sidebar size when the window is resized
    window.addEventListener('resize', setSidebarSize);

    // Expose toggleSideBar function to global scope if needed
    window.toggleSideBar = toggleSideBar;
});