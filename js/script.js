// ---------- mobile nav toggle ----------
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  // ---------- footer year ----------
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- inject small pixel icons ----------
  const icons = {
    controller: '<svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="8" width="20" height="10" /><path d="M6 11v4M4 13h4M15.5 12.5h.01M18.5 10.5h.01" /></svg>',
    ghost: '<svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 21V11a7 7 0 0 1 14 0v10l-2.5-2-2 2-2.5-2-2.5 2-2-2-2.5 2Z" /><circle cx="10" cy="11" r=".6" fill="currentColor" /><circle cx="14" cy="11" r=".6" fill="currentColor" /></svg>',
    film: '<svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" /><path d="M8 5v14M16 5v14M3 9h5M3 15h5M16 9h5M16 15h5" /></svg>',
    ball: '<svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><circle cx="12" cy="12" r="2.6" /></svg>',
    note: '<svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 18V5l10-2v13" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="16.5" cy="16" r="2.5" /></svg>',
    leaf: '<svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 4C10 4 4 10 4 18c8 0 14-6 16-14Z" /><path d="M6 18c3-3 6-6 12-12" /></svg>',
    code: '<svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m8 6-5 6 5 6M16 6l5 6-5 6" /></svg>'
  };
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    if (icons[name]) el.innerHTML = icons[name];
  });
});
