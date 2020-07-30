function goToNightMode() {
    $("#day-mode-btn").css("display", "none");
    $("#night-mode-btn").css("display", "initial");
    
    $("body").removeClass("day-mode");
    $("body").addClass("night-mode");
    
    $("link#rainbow-theme").attr("href", "../../assets/css/themes/rainbow.css");
    
    $("tr:nth-child(even)").css("background-color", "#666");
    
    localStorage.setItem("day-mode", "false");
}

function goToDayMode() {
    $("#night-mode-btn").css("display", "none");
    $("#day-mode-btn").css("display", "initial");
    
    $("body").removeClass("night-mode");
    $("body").addClass("day-mode");
    
    $("link#rainbow-theme").attr("href", "../../assets/css/themes/pastie.css");
    
    $("tr:nth-child(even)").css("background-color", "#ddd");
    
    localStorage.setItem("day-mode", "true");
}

function hideSidebar() {
    $("#sidebar").css("display", "none");
    $("#bars-btn-show").css("display", "initial");
    
    if ($("#day-mode-btn").css("display") != "none")
        $("#bars-btn-show").css("color", "#000");
    else
        $("#bars-btn-show").css("color", "#eee");
    
    localStorage.setItem("sidebar-display", "false");
}

function showSidebar() {
    $("#sidebar").css("display", "initial");
    $("#bars-btn-show").css("display", "none");
    
    if ($("#day-mode-btn").css("display") != "none")
        $("#bars-btn-show").css("color", "#000");
    else
        $("#bars-btn-show").css("color", "#eee");
    
    localStorage.setItem("sidebar-display", "true");
}

// when clicking on the hamburger to show/hide the sidebar
$("#bars-btn-hide").click(hideSidebar);
$("#bars-btn-show").click(showSidebar);

// when toggling day/night mode
$("#day-mode-btn").click(goToNightMode);
$("#night-mode-btn").click(goToDayMode);

// checking local storage
if (localStorage.getItem("day-mode") != undefined && localStorage.getItem("day-mode") == "false")
    goToNightMode();
else
    goToDayMode();

if (localStorage.getItem("sidebar-display") != undefined && localStorage.getItem("sidebar-display") == "false")
    hideSidebar();
else
    showSidebar();