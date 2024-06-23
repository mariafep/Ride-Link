document.addEventListener('DOMContentLoaded', function() {
    // Definir secciones
    const sections = {
        publicaciones: '<h2>Publicaciones</h2><p>Aquí puedes ver las publicaciones.</p>',
        reclamaciones: '<h2>Reclamaciones</h2><p>Aquí puedes ver y realizar reclamaciones.</p>',
        perfil: document.querySelector('.profile') ? document.querySelector('.profile').outerHTML : '<h2>Perfil</h2>'
    };

    // Manejar la navegación entre secciones
    document.querySelectorAll('nav ul li a').forEach(navLink => {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const section = event.target.getAttribute('data-section');
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = sections[section];
            if (section === 'perfil') {
                addEditButtonListeners();
            }
            handleActiveLink(navLink);
        });
    });

    function handleActiveLink(activeLink) {
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    // Función para manejar botones de editar en el perfil
    function addEditButtonListeners() {
        document.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', function() {
                const parentElement = button.parentElement;
                const detailElement = parentElement.querySelector('.details');
                const newValue = prompt(`Editar ${detailElement.textContent}`, detailElement.textContent);
                if (newValue) {
                    detailElement.textContent = newValue;
                }
            });
        });
    }

    // Inicializar con la sección de perfil
    addEditButtonListeners();

    // Manejar comentarios en la página de publicaciones
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentText = commentInput.value.trim();
            if (commentText) {
                addComment(commentText);
                commentInput.value = '';
            }
        });
    }

    function addComment(text) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <p>${text}</p>
            <div>
                <button class="edit-comment">Editar</button>
                <button class="delete-comment">Eliminar</button>
            </div>
        `;
        commentsList.appendChild(commentElement);

        const editButton = commentElement.querySelector('.edit-comment');
        const deleteButton = commentElement.querySelector('.delete-comment');

        editButton.addEventListener('click', function() {
            const newText = prompt('Editar comentario', text);
            if (newText) {
                commentElement.querySelector('p').textContent = newText;
            }
        });

        deleteButton.addEventListener('click', function() {
            commentsList.removeChild(commentElement);
        });
    }

    // Manejar contenido enviado en la página de index
    const contentForm = document.getElementById('content-form');
    const contentText = document.getElementById('content-text');
    const contentArea = document.getElementById('content-area');

    if (contentForm) {
        contentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const content = contentText.value.trim();
            if (content) {
                const newContent = document.createElement('p');
                newContent.textContent = content;
                contentArea.appendChild(newContent);
                contentText.value = '';
            }
        });
    }

    // Manejar reclamaciones enviadas en la página de reclamaciones
    const reclamacionesForm = document.getElementById('reclamaciones-form');
    const reclamacionText = document.getElementById('reclamacion-text');
    const reclamacionesArea = document.getElementById('reclamaciones-area');

    if (reclamacionesForm) {
        reclamacionesForm.addEventListener('submit', function(event) {
            event.preventDefault();
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
