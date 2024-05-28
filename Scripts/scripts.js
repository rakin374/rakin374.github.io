// scripts.js
$(document).ready(function() {
    // Specify the absolute paths for header.html and footer.html
    var headerPath = "/HTMLViews/header.html";
    var footerPath = "/HTMLViews/footer.html";

    // Load Header
    $("#header-container").load(headerPath);

    // Load Footer
    $("#footer-container").load(footerPath);
    someStyle()
});


function someStyle(){
// Define the CSS as a string
var css = `
@font-face {
    font-family: 'Big Caslon Medium';
    src: url('/fonts/BigCaslon-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.big-caslon {
    font-family: 'Big Caslon Medium', serif; /* Fallback to serif if the font fails to load */
    font-size: 8vw;
    height: 4vw;
}
`;

// Create a <style> element
var style = document.createElement('style');

// Set the type attribute
style.type = 'text/css';

// Append the CSS string to the <style> element
if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

// Append the <style> element to the <head>
document.head.appendChild(style);

}