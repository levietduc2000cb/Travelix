const app = document.querySelector(".app");

const headerNav = document.querySelector(".header_nav");
const headerTopbarContainer = document.querySelector(
  ".header_topbar_container"
);
const headerNavContainer = document.querySelector(".header_nav_container");
let headerNavOverlay = document.querySelector(".header_nav_overlay");
const iconClose = document.querySelector(".icon_close");
const iconListMobile = document.querySelector(".icon_list_mobile");
const headerNavList = document.querySelector(".header_nav_list");

let heightNavContainer = headerNavContainer.clientHeight;

iconListMobile.addEventListener("click", (e) => {
  headerNavList.style.animation = "showMenu 1s";
  headerNavOverlay.style.display = "block";
});
iconClose.addEventListener("click", (e) => {
  setTimeout(() => {
    headerNavOverlay.style.display = "none";
  }, 1900);
  headerNavList.style.animation = "hideMenu 2s";
});

window.addEventListener("scroll", (e) => {
  if (
    app.getBoundingClientRect().top <
    headerTopbarContainer.clientHeight * -1
  ) {
    headerNav.style.marginTop = "0";
    headerNavContainer.style.height = heightNavContainer - 24.2 + "px";
  } else {
    headerNav.style.marginTop = headerTopbarContainer.clientHeight + "px";
    headerNavContainer.style.height = heightNavContainer + "px";
  }
});
window.onresize = function (e) {
  if (e.target.innerWidth >= 1024) {
    headerNavOverlay.style.display = "block";
  } else {
    headerNavOverlay.style.display = "none";
  }
};
