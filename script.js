document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('show-info');
    var info = document.getElementById('adhesion-info');

    button.addEventListener('click', function () {
        if (info.style.display === 'none' || info.style.display === '') {
            info.style.display = 'block';
            button.textContent = 'Masquer les infos d’adhésion';
        } else {
            info.style.display = 'none';
            button.textContent = 'Voir les infos d’adhésion';
        }
    });
});
