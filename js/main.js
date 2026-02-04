const params = new URLSearchParams(window.location.search);
const book = params.get("book");

fetch(`assets/previews/${book}.txt`)
  .then(res => res.text())
  .then(text => {
    document.getElementById("preview-text").innerText = text;
  })
  .catch(() => {
    document.getElementById("preview-text").innerText = "Preview not available.";
  });
