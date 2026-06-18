// Selecting Elements
const heading = document.getElementById("mainHeading");
const paragraph = document.getElementById("paragraph");
const input = document.getElementById("userInput");

let fontSize = 16;

/* -----------------------------------
   Change Heading Text
----------------------------------- */
document
    .getElementById("changeTextBtn")
    .addEventListener("click", function () {

        if (input.value.trim() !== "") {
            heading.innerHTML = input.value;
        } else {
            alert("Please enter some text!");
        }

    });

/* -----------------------------------
   Change Background Color
----------------------------------- */
document
    .getElementById("bgColorBtn")
    .addEventListener("click", function () {

        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);

        document.body.style.backgroundColor = randomColor;

    });

/* -----------------------------------
   Increase Font Size
----------------------------------- */
document
    .getElementById("fontSizeBtn")
    .addEventListener("click", function () {

        fontSize += 2;
        paragraph.style.fontSize = fontSize + "px";

    });

/* -----------------------------------
   Show / Hide Paragraph
----------------------------------- */
document
    .getElementById("toggleBtn")
    .addEventListener("click", function () {

        if (paragraph.style.display === "none") {
            paragraph.style.display = "block";
        } else {
            paragraph.style.display = "none";
        }

    });

/* -----------------------------------
   Reset Everything
----------------------------------- */
document
    .getElementById("resetBtn")
    .addEventListener("click", function () {

        // Reset heading
        heading.innerHTML = "Welcome to JavaScript Lab";

        // Reset paragraph
        paragraph.style.display = "block";

        fontSize = 16;
        paragraph.style.fontSize = fontSize + "px";

        // Reset background
        document.body.style.backgroundColor = "#f4f4f4";

        // Clear input field
        input.value = "";

    });