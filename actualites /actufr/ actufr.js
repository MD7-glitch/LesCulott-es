document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".article");
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.style.transform = "translateY(0)";
            article.style.opacity = "1";
        }, index * 200); // Délai pour un effet "stagger"
    });
});

// Mode sombre / clair
const toggleButton = document.createElement("button");
toggleButton.textContent = "Mode sombre";
toggleButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #ff4081;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode")
        ? "Mode clair"
        : "Mode sombre";
});

// Effet de survol sur les articles
document.querySelectorAll(".article").forEach((article) => {
    article.addEventListener("mouseover", () => {
        article.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
        article.style.transform = "scale(1.05)";
    });
    article.addEventListener("mouseout", () => {
        article.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        article.style.transform = "scale(1)";
    });
});
