(function () {
    var photo = [
        'back0.jpeg',
        'back1.jpeg',
        'back2.jpeg',
        'back3.jpeg',
        'back4.jpeg'
    ];

    const btns = document.querySelectorAll('.btn');
    const image = document.querySelector('.container');
    let counter = 0;

    btns.forEach(function buttons(btn) {
        btn.addEventListener('click', function pic() {
            if (btn.classList.contains('left')) {
                counter--;
                if (counter < 0) {
                    counter = photo.length - 1;
                }
            }
            if (btn.classList.contains('right')) {
                counter++;
                if (counter > photo.length - 1) {
                    counter = 0;
                }
            }
            image.style.backgroundImage = `url('./img/${photo[counter]}')`;
        })
    })
})();
