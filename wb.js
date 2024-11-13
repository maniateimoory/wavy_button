const btns = document.querySelectorAll('.btn');
btns.forEach( btn => {
    btn.addEventListener('click', (e) => {
        let x = e.pageX - e.target.offsetLeft ;
        let y = e.pageY - e.target.offsetTop ;

        let wave = document.createElement('span');
        wave.style.left = x + 'px';
        wave.style.top = y + 'px';

        btn.appendChild(wave);

        setTimeout(() => {
            wave.remove();
        },1000);

    })
});