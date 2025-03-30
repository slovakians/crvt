document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("[data-tab]");
    const sections = document.querySelectorAll("[data-content]");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-tab");

            // Hide all sections
            sections.forEach(section => section.classList.add("hidden"));

            // Show the targeted section
            document.querySelector(`[data-content='${target}']`).classList.remove("hidden");
        });
    });
});
