(() => {
  const buttons = [...document.querySelectorAll("[data-gulp]")];
  const toastEl = document.getElementById("toast");
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const showToast = message => {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1700);
  };

  function reset(button) {
    button.classList.remove("is-eating", "is-done", "is-returning");
    button.disabled = false;
    const label = button.querySelector("[data-label]");
    label.innerHTML = "Delete";
    label.style.opacity = "";
    button.setAttribute("aria-label", "Delete item");
  }

  async function eat(button) {
    if (button.classList.contains("is-eating") ||
        button.classList.contains("is-done") ||
        button.classList.contains("is-returning")) return;

    const label = button.querySelector("[data-label]");
    const letters = [..."Delete"];
    let landed = 0;
    label.innerHTML = letters.map((char, index) =>
      `<span class="letter" style="--i:${index}">${char}</span>`
    ).join("");

    const letterNodes = [...label.querySelectorAll(".letter")];
    button.classList.add("is-eating");
    button.setAttribute("aria-label", "Deleting item");

    // Each landing is its own animationend; --p is the count.
    const allLanded = new Promise(resolve => {
      letterNodes.forEach(node => {
        node.addEventListener("animationend", event => {
          if (event.animationName !== "gulp-fly") return;
          landed += 1;
          button.style.setProperty("--p", landed / letters.length);
          if (landed === letters.length) resolve();
        }, { once: true });
      });
    });

    await allLanded;
    button.classList.add("is-done");
    button.setAttribute("aria-label", "Item deleted");

    // Simulated request; this sample has no server or real delete operation.
    await sleep(700);
    showToast(button.dataset.gulp === "red"
      ? "Item deleted · red button"
      : "Item deleted · dark button");

    await sleep(1500);
    button.classList.add("is-returning");
    await sleep(620);
    reset(button);
  }

  buttons.forEach(button => button.addEventListener("click", () => eat(button)));
  document.getElementById("resetAll").addEventListener("click", () => {
    buttons.forEach(reset);
    showToast("Both buttons reset");
  });
})();