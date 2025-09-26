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

    // Inicialmente todas inativas, exceto a primeira
    windows.forEach((win, i) => {
        win.classList.add("inactive");
        if (i === 0) {
            win.classList.remove("inactive");
            win.classList.add("active");
        }

        // Quando clicar em uma janela → ativa apenas ela
        win.addEventListener("mousedown", () => {
            windows.forEach(w => {
                w.classList.remove("active");
                w.classList.add("inactive");
            });
            win.classList.add("active");
            win.classList.remove("inactive");

            // Trazer para frente (z-index mais alto)
            windows.forEach(w => w.style.zIndex = 2);
            win.style.zIndex = 5;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const closeButtons = document.querySelectorAll(".close-btn");
    const windows = document.querySelectorAll(".window");

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

                // Desativa todas as janelas
                windows.forEach(w => {
                    w.classList.remove("active");
                    w.classList.add("inactive");
                    w.style.zIndex = 2;
                });

                // Ativa a janela aberta
                targetWindow.classList.add("active");
                targetWindow.classList.remove("inactive");
                targetWindow.style.zIndex = 10;
            }
        });
    });
});
2