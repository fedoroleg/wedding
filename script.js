console.log("works!");

// ждем полной загрузки страницы
window.onload = () => {
  console.log("onload run!");

  const imgObserver = new IntersectionObserver(
    (entries, observer) => {
      console.log("entries: ", entries);

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.source;

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll("img").forEach((img) => imgObserver.observe(img));
};
