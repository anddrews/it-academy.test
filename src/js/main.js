var wrapp = document.querySelector('.numbers');
var res = document.querySelector('.result');

wrapp.addEventListener('click', function (e) {
    var id = e.target.id
    
    if(parseInt(id)) {
        res.innerText = res.innerText ? res.innerText + id : id;
    }

    if (id === 'call') {
        res.innerText = ''
    }
})