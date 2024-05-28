// scripts.js
$(document).ready(function() {
    // Get the current location (pathname) of the HTML file
    var currentLocation = window.location.pathname;


    // Determine the correct path for the header.html file based on the location
    var headerPath =  currentLocation.endsWith("/") ? "footer.html" : "../footer.html";
    var footerPath = currentLocation.endsWith("/") ? "footer.html" : "../footer.html";

    // Load Header
    $("#header-container").load(headerPath);

    // Load Footer
    $("#footer-container").load(footerPath);
});


function testFunc() {
   print("HelloWorld")
}

