let windowstuff = window.location.pathname;

if (windowstuff.includes('/website')) {
    windowstuff = windowstuff.replace('/website', '');
    window.location.href = windowstuff;
}