const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const settingsClose = document.getElementById("settingsClose");

function openSettings(){
    settingsModal.classList.add("open");
    settingsModal.setAttribute("aria-hidden", "false");
}

function closeSettings(){
    settingsModal.classList.remove("open");
    settingsModal.setAttribute("aria-hidden", "true");
}

settingsBtn?.addEventListener("click", openSettings);
settingsClose?.addEventListener("click", closeSettings);

settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) closeSettings();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSettings();
});