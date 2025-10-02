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
    const windows = document.querySelectorAll(".window");

    windows.forEach((win, i) => {
        win.classList.add("inactive");
        if (i === 0) {
            win.classList.remove("inactive");
            win.classList.add("active");
        }

        win.addEventListener("mousedown", () => {
            windows.forEach(w => {
                w.classList.remove("active");
                w.classList.add("inactive");
            });
            win.classList.add("active");
            win.classList.remove("inactive");

            windows.forEach(w => w.style.zIndex = 2);
            win.style.zIndex = 5;
        });
    });

    const closeButtons = document.querySelectorAll(".close-btn");

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const windowElement = btn.closest(".window");
            if (windowElement) {
                windowElement.style.display = "none";
            }
        });
    });

    const icons = document.querySelectorAll(".icon");
    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            const targetId = icon.dataset.target;
            const targetWindow = document.getElementById(targetId);
            if (targetWindow) {
                targetWindow.style.display = "block";

                windows.forEach(w => {
                    w.classList.remove("active");
                    w.classList.add("inactive");
                    w.style.zIndex = 2;
                });

                targetWindow.classList.add("active");
                targetWindow.classList.remove("inactive");
                targetWindow.style.zIndex = 10;
            }
        });
    });

    const resizeButtons = document.querySelectorAll(".resize-btn");

    resizeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const win = btn.closest(".window");

            if (win.classList.contains("fullscreen")) {
                win.classList.remove("fullscreen");
                if (win.dataset.originalStyle) {
                    win.style.cssText = win.dataset.originalStyle;
                }
            } else {
                win.dataset.originalStyle = win.style.cssText;
                win.classList.add("fullscreen");

                windows.forEach(w => w.style.zIndex = 2);
                win.style.zIndex = 10;
            }
        });
    });
});
    