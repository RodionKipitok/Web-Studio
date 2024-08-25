const refs = {
  btnMenu: document.querySelector(".burger"),
  mobileMenu: document.querySelector(".nav "),
};

const onToggle = () => {
  refs.btnMenu.classList.toggle("active");
  refs.mobileMenu.classList.toggle("open");
  console.log("Script");
};

refs.btnMenu.addEventListener("click", onToggle);
