(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const revealTargets = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!revealTargets.length) return;

  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => observer.observe(el));
})();
