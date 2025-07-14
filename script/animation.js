document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));
});