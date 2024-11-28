const videoPlayer = document.getElementById('videoPlayer');
        const togglePlayButton = document.getElementById('togglePlay');
        const videoContainer = document.getElementById('videoContainer');

        // Contrôle du bouton pour la vidéo
        togglePlayButton.addEventListener('click', () => {
            const iframeSrc = videoPlayer.src;

            // Vérification de l'état actuel (lecture ou pause)
            if (iframeSrc.includes('autoplay=1')) {
                // Stopper la lecture
                videoPlayer.src = iframeSrc.replace('autoplay=1', '');
                togglePlayButton.textContent = 'Lire la vidéo';
            } else {
                // Lancer la lecture
                videoPlayer.src = iframeSrc.includes('?')
                    ? iframeSrc + '&autoplay=1'
                    : iframeSrc + '?autoplay=1';
                togglePlayButton.textContent = 'Mettre en pause';
            }
        });

        // Événement visuel sur hover
        videoContainer.addEventListener('mouseover', () => {
            videoContainer.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.3)';
        });

        videoContainer.addEventListener('mouseout', () => {
            videoContainer.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
        });
   