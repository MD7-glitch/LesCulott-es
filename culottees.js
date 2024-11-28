document.addEventListener("DOMContentLoaded", function() {
    // Récupère le bouton, le cache de bienvenue, et le contenu principal
    const enterButton = document.getElementById("enter-site");
    const welcomeCache = document.getElementById("welcome-cache");
    const mainContent = document.getElementById("main-content");

    // Ajoute un événement de clic sur le bouton
    enterButton.addEventListener("click", function() {
        // Cache le cache de bienvenue avec une transition
        welcomeCache.classList.add("hidden");

        // Après la transition, masque le cache et affiche le contenu principal
        setTimeout(() => {
            welcomeCache.style.display = "none";
            mainContent.style.display = "block";
        }, 500); // 500 ms correspond à la durée de la transition CSS
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookies = document.getElementById("acceptCookies");
    const declineCookies = document.getElementById("declineCookies");

    // Vérifie si le consentement est déjà donné
    if (!localStorage.getItem("cookieConsent")) {
        cookieBanner.style.display = "block";
    }

    // Accepter les cookies
    acceptCookies.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.style.display = "none";
    });

    // Refuser les cookies
    declineCookies.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "declined");
        cookieBanner.style.display = "none";
    });
});



const image = document.getElementById("interactiveImage");
const tooltip = document.getElementById("tooltip");

image.addEventListener("mouseover", function(event) {
    tooltip.style.display = "block";
});

image.addEventListener("mousemove", function(event) {
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = (event.pageY - 30) + "px"; /* Positionner au-dessus de la souris */
});

image.addEventListener("mouseout", function() {
    tooltip.style.display = "none";
});
const rotatingImage = document.getElementById("rotatingImage");

rotatingImage.addEventListener("click", function() {
    rotatingImage.classList.toggle("rotate"); // Ajoute/enlève la classe pour démarrer/arrêter la rotation
});