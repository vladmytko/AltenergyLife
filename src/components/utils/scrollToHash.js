export const scrollToHash = (hash, options = {  behavior: 'smooth'  }) => {
    if (!hash) return;

    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView(options);
    }
};