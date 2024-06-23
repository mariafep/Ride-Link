document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const sectionId = this.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Handling content submission for index page
    const contentForm = document.getElementById('content-form');
    const contentText = document.getElementById('content-text');
    const contentArea = document.getElementById('content-area');

    if (contentForm) {
        contentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const content = contentText.value.trim();
            if (content) {
                const newContent = document.createElement('p');
                newContent.textContent = content;
                contentArea.appendChild(newContent);
                contentText.value = '';
            }
        });
    }

    // Handling reclamation submission for reclamaciones page
    const reclamacionesForm = document.getElementById('reclamaciones-form');
    const reclamacionText = document.getElementById('reclamacion-text');
    const reclamacionesArea = document.getElementById('reclamaciones-area');

    if (reclamacionesForm) {
        reclamacionesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const reclamacion = reclamacionText.value.trim();
            if (reclamacion) {
                const newReclamacion = document.createElement('p');
                newReclamacion.textContent = reclamacion;
                reclamacionesArea.appendChild(newReclamacion);
                reclamacionText.value = '';
            }
        });
    }
});
