

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const profilePicture = document.querySelector(".about-pic1");
    const logoTitle = document.querySelector(".logo");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    profilePicture.classList.toggle("hidden");
    logoTitle.classList.toggle("hidden");
}
