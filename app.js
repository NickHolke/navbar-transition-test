const aboutSection = document.querySelector("#about");
const navBar = document.querySelector("nav");

const options = {
  threshold: 0.06,
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      navBar.classList.add("show");
    } else {
      navBar.classList.remove("show");
    }
  })
}

const observer = new IntersectionObserver(callback, options)

observer.observe(aboutSection);