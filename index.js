// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll("section");
//     const navList = document.getElementById("nav-list");
//     const navToggle = document.getElementById("nav-toggle");

//     navToggle.addEventListener("click", function () {
//         if (navList.classList.contains("nav-list-hidden")) {
//             navList.classList.remove("nav-list-hidden");
//         } else {
//             navList.classList.add("nav-list-hidden");
//         }
//     });

//     document.addEventListener("click", function (event) {
//         const isClickInside = navToggle.contains(event.target) || navList.contains(event.target);
//         if (window.innerWidth < 768){
//             if (!isClickInside) {
//                 if (!navList.classList.contains("nav-list-hidden")) {
//                     navList.classList.add("nav-list-hidden");
//                 }
//             }
//         }
//     });

//     function checkScreenWidth() {
//         if (window.innerWidth > 768) {
//             navList.classList.remove("nav-list-hidden");
//         }
//     }

//     checkScreenWidth();

//     window.addEventListener("resize", checkScreenWidth);

//     sections.forEach((section) => {
//         const sectionId = section.getAttribute("id");
//         const sectionTitle = section.querySelector("h2").textContent;

//         const listItem = document.createElement("li");
//         const link = document.createElement("a");

//         link.textContent = sectionTitle;
//         link.href = `#${sectionId}`;

//         link.addEventListener("click", function () {
//             if (window.innerWidth < 768) {
//                 if (!navList.classList.contains("nav-list-hidden")) {
//                     navList.classList.add("nav-list-hidden");
//                 }
//             }
//         });

//         listItem.appendChild(link);
//         navList.appendChild(listItem);
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navList = document.getElementById("nav-list");
    const navToggle = document.getElementById("nav-toggle");

    navToggle.addEventListener("click", function () {
        navList.classList.toggle("nav-list-hidden");
    });

    document.addEventListener("click", function (event) {
        const isClickInside = navToggle.contains(event.target) || navList.contains(event.target);
        const isSmallScreen = window.innerWidth < 768;

        if (isSmallScreen && !isClickInside) {
            navList.classList.add("nav-list-hidden");
        }
    });

    function checkScreenWidth() {
        if (window.innerWidth > 768) {
            navList.classList.remove("nav-list-hidden");
        }
    }

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTitle = section.querySelector("h2").textContent;

        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = sectionTitle;
        link.href = `#${sectionId}`;

        link.addEventListener("click", function () {
            if (window.innerWidth < 768) {
                navList.classList.add("nav-list-hidden");
            }
        });

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
});