var imageElement = document.getElementById("image");
let x = 0;
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  const EST = { timeZone: "America/New_York" };
  document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', EST);
}

function changeFacts() {
    const factsList = document.getElementById("funFacts");
    factsList.innerHTML = "<h5><ol><li>I've only been to New York once.</li><li>Honeydew is my favorite fruit. </li><li>Wingstop is my favorite place to get chicken.</div></li></ol></h5>";
    factsList.style.color = "Red";
}
function myEnterFunction() {
    document.getElementById("takes").innerHTML = x+=1;
  }  

