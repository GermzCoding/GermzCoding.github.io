// Function to create a button and add it to the navigation bar
function createButton(text, link) {
    var button = document.createElement("li");
    var buttonLink = document.createElement("a");
    buttonLink.textContent = text;
    if (link.startsWith("mailto:")) {
        buttonLink.href = link;
    } else {
        buttonLink.href = link;
        buttonLink.target = "_blank"; // Open in a new tab for external links
    }
    button.appendChild(buttonLink);
    return button;
}

// Append buttons to the navigation bar
var navBar = document.getElementById("navBar");
navBar.querySelector("ul").appendChild(createButton("Home", "#bio"));
navBar.querySelector("ul").appendChild(createButton("Bio", "#bio"));
navBar.querySelector("ul").appendChild(createButton("Donate", "https://www.paypal.com/donate/?business=LZ23PENCUYC7C&no_recurring=0&currency_code=USD"));
navBar.querySelector("ul").appendChild(createButton("Book me for a Show!", "mailto:mrinsanemethod@gmail.com"));
