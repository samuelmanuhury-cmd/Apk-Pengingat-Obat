document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".bottom-nav .nav-item");
  const views = document.querySelectorAll(".view");
  const sectionTitle = document.querySelector(".subtitle");

  const viewTitles = {
    today: "Pengingat Obat",
    medications: "Daftar Obat",
    history: "Riwayat"
  };

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetView = button.dataset.view;
      navButtons.forEach((item) => item.classList.toggle("active", item === button));
      views.forEach((view) => view.classList.toggle("active", view.dataset.view === targetView));

      if (sectionTitle && viewTitles[targetView]) {
        sectionTitle.textContent = viewTitles[targetView];
      }
    });
  });
});
