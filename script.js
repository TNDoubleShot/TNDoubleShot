generateNavHeader();
eventNav();

let pastActive;
document.querySelectorAll(".content-main")[0].classList.add("content-active");
pastActive = 0;

function generateNavHeader() {
  const liNav = ["HOME", "ABOUT", "SKILLS", "PORTFOLIO"];
  const navHeader = document.querySelector("#nav-header");

  for (let index = 0; index < liNav.length; index += 1) {
    const textItem = liNav[index];
    const newListItem = document.createElement("li");

    newListItem.classList.add("li-nav-header");
    newListItem.innerText = textItem;
    navHeader.appendChild(newListItem);
  }
}

function eventNav() {
  const allLiNav = document.querySelectorAll(".li-nav-header");
  const sectionsMain = document.querySelectorAll(".content-main");
  for (let index = 0; index < allLiNav.length; index += 1) {
    allLiNav[index].addEventListener("click", function () {
      if (index === 0) {
        sectionsMain[pastActive].classList.remove("content-active");
        sectionsMain[0].classList.add("content-active");
        pastActive = 0;
      } else if (index === 1) {
        sectionsMain[pastActive].classList.remove("content-active");
        sectionsMain[1].classList.add("content-active");
        pastActive = 1;
      } else if (index === 2) {
        sectionsMain[pastActive].classList.remove("content-active");
        sectionsMain[2].classList.add("content-active");
        pastActive = 2;
      } else if (index === 3) {
        sectionsMain[pastActive].classList.remove("content-active");
        sectionsMain[3].classList.add("content-active");
        pastActive = 3;
      }
    });
  }
}
