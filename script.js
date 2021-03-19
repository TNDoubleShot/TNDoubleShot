generateNavHeader();
eventNav();

function generateNavHeader() {
    const liNav = ['HOME', 'ABOUT', 'SKILLS','PORTFOLIO', 'CONTACT'];
    const navHeader = document.querySelector('#nav-header');

    for (let index = 0; index < liNav.length; index += 1) {
        const textItem = liNav[index];
        const newListItem = document.createElement('li');

        newListItem.classList.add('li-nav-header');
        newListItem.innerText = textItem;
        navHeader.appendChild(newListItem);
    }
}

function eventNav() {
    const allLiNav = document.querySelectorAll('.li-nav-header');
    for (let index = 0; index < allLiNav.length; index += 1) {
        allLiNav[index].addEventListener('click', function () {
            alert(allLiNav[index].innerText);
        });
    }
}
