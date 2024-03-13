document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navList = document.getElementById("nav-list");
    const navToggle = document.getElementById("nav-toggle");

    navToggle.addEventListener("click", function () {
        navList.style.display = (navList.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        const isClickInside = navToggle.contains(event.target) || navList.contains(event.target);

        if (!isClickInside) {
            navList.style.display = "none";
        }
    });

    sections.forEach((section, index) => {
        const sectionId = section.getAttribute("id");
        const sectionTitle = section.querySelector("h2").textContent;

        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = sectionTitle;
        link.href = `#${sectionId}`;

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
                navList.style.display = 'none';
            }
        });
    });
});

    
