(() => {
  const memories = window.MEMORIES || [];
  const grid = document.querySelector("#memory-grid");
  const count = document.querySelector("#memory-count");
  const memoryDialog = document.querySelector("#memory-dialog");
  const letterDialog = document.querySelector("#letter-dialog");
  const motionOff = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelector("#year").textContent = new Date().getFullYear();

  function cardMarkup(item, index) {
    const hasVisual = item.kind === "video" ? Boolean(item.poster) : Boolean(item.src);
    const visualPath = item.kind === "video" ? item.poster : item.src;
    const media = hasVisual
      ? `<img class="memory-card__image" src="${visualPath}" alt="${item.title}" loading="lazy" />`
      : `<div class="memory-art memory-art--${item.art || "blue"}" aria-hidden="true"><span class="memory-art__number">${item.id}</span><span class="memory-art__orb"></span><span class="memory-art__orbit"></span><span class="memory-art__spark">✦</span><span class="memory-art__label">MEMORY<br />IN ORBIT</span></div>`;

    return `<button class="memory-card ${index === 2 ? "memory-card--wide" : ""}" type="button" data-id="${item.id}" data-chapter="${item.chapter}" aria-label="打开记忆：${item.title}">
      <span class="memory-card__visual">${media}<span class="memory-card__shade"></span><span class="memory-card__type">${item.kind === "video" ? "▶ VIDEO SIGNAL" : "✦ PHOTO SIGNAL"}</span><span class="memory-card__open" aria-hidden="true">↗</span></span>
      <span class="memory-card__meta"><span>${item.chapterName} <i>·</i> ${item.date}</span><span class="memory-card__id">${item.id}</span></span>
      <span class="memory-card__title">${item.title}</span>
    </button>`;
  }

  function renderMemories(filter = "all") {
    const visible = filter === "all" ? memories : memories.filter((item) => item.chapter === filter);
    grid.innerHTML = visible.map(cardMarkup).join("");
    count.textContent = `${String(visible.length).padStart(2, "0")} SIGNALS`;
    grid.querySelectorAll(".memory-card").forEach((card) => {
      const image = card.querySelector(".memory-card__image");
      if (image) image.addEventListener("error", () => image.remove(), { once: true });
      card.addEventListener("click", () => openMemory(card.dataset.id));
    });
  }

  function openMemory(id) {
    const item = memories.find((memory) => memory.id === id);
    if (!item) return;
    const mediaContainer = document.querySelector("#dialog-media");
    const title = document.querySelector("#dialog-title");
    const caption = document.querySelector("#dialog-caption");
    const date = document.querySelector("#dialog-date");
    const kicker = document.querySelector("#dialog-kicker");
    mediaContainer.replaceChildren();
    title.textContent = item.title;
    caption.textContent = item.caption || "在这里写下一句回忆。";
    date.textContent = `${item.chapterName}  /  ${item.date}`;
    kicker.textContent = `${item.kind === "video" ? "VIDEO" : "PHOTO"} SIGNAL  ·  ${item.id}`;

    if (item.src && item.kind === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      if (item.poster) video.poster = item.poster;
      video.controls = true;
      video.playsInline = true;
      video.autoplay = true;
      mediaContainer.append(video);
    } else if (item.src) {
      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.title;
      mediaContainer.append(image);
      image.addEventListener("error", () => {
        mediaContainer.innerHTML = `<div class="dialog-placeholder"><span>✦</span><p>这颗星还在等一段回忆。</p></div>`;
      }, { once: true });
    } else {
      mediaContainer.innerHTML = `<div class="dialog-placeholder dialog-placeholder--${item.art || "blue"}"><span>✦</span><p>这颗星还在等一段回忆。</p></div>`;
    }
    if (!memoryDialog.open) memoryDialog.showModal();
  }

  document.querySelectorAll(".chapter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".chapter").forEach((chapter) => {
        const active = chapter === button;
        chapter.classList.toggle("chapter--active", active);
        chapter.setAttribute("aria-pressed", String(active));
      });
      renderMemories(button.dataset.filter);
    });
  });

  document.querySelectorAll(".dialog-close").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog").close());
  });
  [memoryDialog, letterDialog].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      const video = dialog.querySelector("video");
      if (video) video.pause();
    });
  });

  document.querySelector("#open-letter").addEventListener("click", () => {
    letterDialog.showModal();
    if (!motionOff.matches) scatterStars();
  });

  function scatterStars() {
    const layer = document.querySelector(".confetti-layer");
    layer.replaceChildren();
    const colors = ["#efd59b", "#b8b0ff", "#ffb5b1", "#a9d9d4"];
    for (let i = 0; i < 34; i += 1) {
      const star = document.createElement("span");
      star.className = "confetti-star";
      star.textContent = i % 3 === 0 ? "✦" : "·";
      star.style.setProperty("--x", `${Math.random() * 100}%`);
      star.style.setProperty("--delay", `${Math.random() * 0.8}s`);
      star.style.setProperty("--duration", `${1.2 + Math.random() * 1.6}s`);
      star.style.setProperty("--color", colors[i % colors.length]);
      layer.append(star);
    }
    window.setTimeout(() => layer.replaceChildren(), 3300);
  }

  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    document.querySelector(".header-nav").classList.toggle("header-nav--open", open);
  });
  document.querySelectorAll(".header-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      document.querySelector(".header-nav").classList.remove("header-nav--open");
    });
  });

  if (!motionOff.matches && window.matchMedia("(pointer: fine)").matches) {
    const art = document.querySelector(".hero-art");
    art.addEventListener("pointermove", (event) => {
      const bounds = art.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      art.style.setProperty("--pointer-x", `${x * 12}px`);
      art.style.setProperty("--pointer-y", `${y * 12}px`);
    });
    art.addEventListener("pointerleave", () => {
      art.style.setProperty("--pointer-x", "0px");
      art.style.setProperty("--pointer-y", "0px");
    });
  }

  renderMemories();
})();
