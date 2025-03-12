document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll(".nav-link").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    // Highlight active navbar link on scroll
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
      document.querySelectorAll("section").forEach(section => {
        if (scrollPosition >= section.offsetTop - 50 && 
            scrollPosition < section.offsetTop + section.offsetHeight) {
          document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === section.id) {
              link.classList.add("active");
            }
          });
        }
      });
    });
  
    // Dynamic search functionality for cafés
    document.querySelector("#search-input")?.addEventListener("keyup", function () {
      let filter = this.value.toLowerCase();
      document.querySelectorAll("#topcafe tbody tr").forEach(row => {
        let cafeName = row.cells[1].textContent.toLowerCase();
        row.style.display = cafeName.includes(filter) ? "" : "none";
      });
    });
  });
   
