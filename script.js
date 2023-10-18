const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let currentPhoto = 0;
const imageElement = document.getElementById("image");

function initialize() {
    setInterval(function() {
        currentPhoto = (currentPhoto + 1) % photos.length;
        imageElement.src = photos[currentPhoto];
    }, 3000);
}

function changeFacts() {
    const factsList = document.getElementById("funFacts");
    factsList.innerHTML = "<h5><ol><li>I've only been to New York once.</li><li>Honeydew is my favorite fruit. </li><li>Wingstop is my favorite chicken place.</div></li></ol></h5>";
    factsList.style.color = "Blue";
}