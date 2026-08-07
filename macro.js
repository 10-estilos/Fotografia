document.addEventListener('DOMContentLoaded', () => {
    const sheet = document.getElementById('bottomSheet');
    const overlay = document.getElementById('sheetOverlay');
    const openBtn = document.getElementById('focusBtn');
    const closeBtn = document.getElementById('closeSheet');

    const openSheet = () => {
        sheet.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeSheet = () => {
        sheet.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    if (openBtn) openBtn.addEventListener('click', openSheet);
    if (closeBtn) closeBtn.addEventListener('click', closeSheet);
    if (overlay) overlay.addEventListener('click', closeSheet);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sheet.classList.contains('open')) {
            closeSheet();
        }
    });
});