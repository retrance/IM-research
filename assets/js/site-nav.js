(function () {
  const NAV_ITEMS = [
    { id: "app-structures", label: "首頁", href: "app_structures/index.html" },
    { id: "compare-features", label: "功能比較", href: "compare_features/index.html" },
    { id: "product-architecture", label: "產品架構", href: "product_architecture/index.html" },
    { id: "interaction-playground", label: "互動架構", href: "interaction_playground/index.html" },
    { id: "report", label: "完整報告", href: "reports/report.html" },
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
