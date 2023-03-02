window.addEventListener("scroll", (event) => {
   let navigation = document.querySelector("nav");
   if (window.scrollY > 8) {
      navigation.classList.add("enable-sticky");
   }
   else {
      navigation.classList.remove("enable-sticky");
   }
})