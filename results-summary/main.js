const score = Array.from(document.querySelectorAll(".summary-item-note"));
fetch("./data.json")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((e) => {
      score.forEach((i) => {
        if (i.classList.contains(e.category)) {
          i.innerHTML = `${e.score} <span>/ 100</span>`;
        }
      });
    });
  });
