document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('cCB1');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            window.location.href = 'index.html';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contactToggle = document.getElementById('contactToggle');
    const contactDetails = document.getElementById('contactDetails');
    
    contactToggle.addEventListener('click', () => {
        contactDetails.classList.toggle('show');
    });

    // Cerrar el desplegable al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!contactToggle.contains(event.target) && !contactDetails.contains(event.target)) {
            contactDetails.classList.remove('show');
        }
    });
});

