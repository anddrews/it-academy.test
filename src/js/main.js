var body = document.querySelector('body');

body.addEventListener('click', function(e) {
    var hash = e.target.hash;
    
    if(hash) {
        e.preventDefault();
        var element = document.querySelector(hash);
        element.scrollIntoView({behavior: 'smooth'});
    }
})