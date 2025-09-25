const menuTitles = document.querySelectorAll('.menu-title');

menuTitles.forEach(title => {
    title.addEventListener('click', function (event) {
        event.stopPropagation();

        const dropdown = this.nextElementSibling;

        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdown) {
                menu.classList.remove('show');
            }
        });

        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    });
});

window.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const closeButtons = document.querySelectorAll(".close-btn");

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const windowElement = btn.closest(".window");
            if (windowElement) {
                windowElement.style.display = "none";
            }
        });
    });
});
