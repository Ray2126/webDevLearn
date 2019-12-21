//Get contact names as an array
const contacts = document.querySelectorAll(".collection-item");

const searchBar = document.getElementById("search");
searchBar.addEventListener("keyup", keyPressed);

function keyPressed(e) {
  for (let i = 0; i < contacts.length; i++) {
    if (
      contacts[i].innerText
        .toLowerCase()
        .indexOf(searchBar.value.toLowerCase()) > -1
    ) {
      contacts[i].style.display = "";
    } else {
      contacts[i].style.display = "none";
    }
  }
}
