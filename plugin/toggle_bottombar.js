function toggle_bottombar(p) {
    var bb = document.getElementById('liberator-bottombar');
    if (!bb)
        return;
    if (p == 'on'){
        bb.style.height = '';
        bb.style.overflow = '';
        return;
    }
    if (p == 'off'){
        bb.style.height = '0px';
        bb.style.overflow = 'hidden';
        return;
    }
    bb.style.height = (bb.style.height == '') ? '0px' : '';
    bb.style.overflow = (bb.style.height == '') ? '' : 'hidden';
}
toggle_bottombar();
