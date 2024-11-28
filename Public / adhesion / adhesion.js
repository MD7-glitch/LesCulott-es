emailjs.init('ZDjxUPJBHC2oBeQHv');  // Utilisez votre propre API Key publique

// Lorsque le formulaire est soumis
document.getElementById("adhesionForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêche la soumission par défaut du formulaire
    console.log(event.target); 

    // Envoyer l'email via EmailJS
  emailjs.sendForm('service_8ayk4ir', 'template_gs97h5s', event.target)
        .then(function(response) {
            // Message de succès
            alert('Votre demande d\'adhésion a été envoyée avec succès !');
        }, function(error) {
            // Message d'erreur
            alert('Une erreur est survenue lors de l\'envoi de l\'email.');
            console.error(error);
        });
});
