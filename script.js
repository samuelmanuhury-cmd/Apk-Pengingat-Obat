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

  document.querySelectorAll(".circle-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".schedule-card");
      if (!card) return;

      const title = card.querySelector(".item-title");
      const isDone = button.classList.toggle("done");
      card.classList.toggle("active", isDone);
      if (title) {
        title.classList.toggle("done", isDone);
      }

      if (isDone) {
        button.innerHTML = "<span>✓</span>";
      } else {
        button.innerHTML = "";
      }
    });
  });

  const bellButton = document.querySelector(".bell-button");
  if (bellButton) {
    bellButton.addEventListener("click", () => {
      alert("Anda memiliki 3 notifikasi baru!");
    });
  }
});
