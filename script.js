const square = document.querySelectorAll('.square');

square.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.background == '#ff0000') {
            item.style.background = 'yellow'
            item.style.border = '50%'
        } else {
            item.style.background = '#ff0000'
            item.style.border = '0px'
        }
    })
})
