// expand desktop to mobile device
const navbar = document.querySelector("#navbar");
const btnExpand = document.querySelector(".btn-collapse");
const btnSearchDesktop = document.querySelector("#btn-search-desktop");
const searchbarDesktop = document.querySelector("#searchbar-desktop");
const btnSearchMobile = document.querySelector("#btn-search-mobile");
const searchbarMobile = document.querySelector("#searchbar-mobile");

$(btnExpand).click(function () {
  $(navbar).css("background", "rgba(20, 66, 114, 0.9)");
  $(this).find(".fa-solid").toggleClass("fa-bars fa-xmark");
});
$(btnSearchDesktop).click(function () {
  $(searchbarDesktop).toggleClass("d-none d-block");
  $(this).find(".fa-solid").toggleClass("fa-magnifying-glass fa-xmark");
});
$(btnSearchMobile).click(function () {
  $(searchbarMobile).toggleClass("d-none d-block");
  $(this).find(".fa-solid").toggleClass("fa-magnifying-glass fa-xmark");
});

// reveal animation
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 85;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};
window.addEventListener("scroll", reveal);

//
const wrapperImg = document.querySelector(".wrapper-img");
const imgDestination = document.querySelectorAll(".img-destination");

imgDestination.addEventListener("mouseover", () => {
  imgDestination.style.transform = "scale(1.5)";
});
