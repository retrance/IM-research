(function () {
  const NAV_ITEMS = [
    { id: "benchmark", label: "競品 Benchmark", href: "index.html" },
    { id: "current-product", label: "現有產品", href: "current_product/index.html" },
    { id: "gap-analysis", label: "差異分析", href: "gap_analysis/index.html" },
    { id: "archive", label: "Archive", href: "archive/index.html" },
  ];

  function joinPath(root, path) {
    if (!root) return path;
    return `${root.replace(/\/?$/, "/")}${path}`;
  }

  function renderNav(nav) {
    const root = nav.dataset.navRoot || "";
    const activeId = nav.dataset.active || "";
    nav.innerHTML = NAV_ITEMS.map((item) => {
      const activeClass = item.id === activeId ? " class=\"active\" aria-current=\"page\"" : "";
      return `<a${activeClass} href="${joinPath(root, item.href)}">${item.label}</a>`;
    }).join("");
  }

  function syncTopbarCompact() {
    const topbar = document.querySelector(".topbar");
    if (!topbar) return;
    const mode = document.body.dataset.topbarMode || topbar.dataset.topbarMode || "compact";
    const thresholdValue = document.body.dataset.topbarThreshold || topbar.dataset.topbarThreshold || "18";
    const threshold = Number.parseInt(thresholdValue, 10);

    if (mode === "compact") {
      topbar.classList.add("is-compact");
      return;
    }

    if (mode === "static") {
      topbar.classList.remove("is-compact");
      return;
    }

    const sync = () => {
      topbar.classList.toggle("is-compact", window.scrollY > (Number.isFinite(threshold) ? threshold : 18));
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
  }

  document.querySelectorAll("[data-site-nav]").forEach(renderNav);
  syncTopbarCompact();
})();
