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
