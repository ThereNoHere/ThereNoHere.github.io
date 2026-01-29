document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('lightBgInput');
    if (!input) return;
    
    const DEFAULT = '#fff5dd';
    const KEY = 'userLightBg';

    function validHex(c) {
        return /^#[0-9A-F]{6}$/i.test(c);
    }

    function apply(color) {
        if (color === '' || color === '#') {
            document.documentElement.style.setProperty('--light-bg', DEFAULT);
            localStorage.setItem(KEY, DEFAULT);
            input.style.borderColor = '';
            return;
        }
        
        if (validHex(color)) {
            document.documentElement.style.setProperty('--light-bg', color);
            localStorage.setItem(KEY, color);
            input.style.borderColor = '';
        } else {
            input.style.borderColor = '#ff4444';
        }
    }

    const saved = localStorage.getItem(KEY) || DEFAULT;
    input.value = saved;
    document.documentElement.style.setProperty('--light-bg', saved);

    input.addEventListener('input', (e) => apply(e.target.value));
    
    input.addEventListener('blur', (e) => {
        const val = e.target.value;
        if (val === '' || val === '#' || !validHex(val)) {
            input.value = DEFAULT;
            document.documentElement.style.setProperty('--light-bg', DEFAULT);
            localStorage.setItem(KEY, DEFAULT);
            input.style.borderColor = '';
        }
    });
});