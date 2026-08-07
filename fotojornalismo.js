document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('sideModal');
    const overlay = document.getElementById('panelOverlay');
    const openBtn = document.getElementById('triggerModal');
    const closeBtn = document.getElementById('closePanel');

    const openPanel = () => {
        modal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closePanel = () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (openBtn) openBtn.addEventListener('click', openPanel);
    if (closeBtn) closeBtn.addEventListener('click', closePanel);
    if (overlay) overlay.addEventListener('click', closePanel);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePanel();
        }
    });
});