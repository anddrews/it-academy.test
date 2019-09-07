var arr = [];

function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j ++) {
            if (arr[i] > arr[j]) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

function main() {
    do {
        var value = prompt('Input number');
        if(value) {
            arr.push(value);
        }
    } while (value);

    alert(sort(arr));  
    alert('min ' + arr[0])
    alert('max ' + arr[arr.length - 1])
};

document.querySelector('.button-map').addEventListener('click', main);

var wrap = document.querySelector('.preview');
var prev = document.querySelector('.img__preview--small');

prev.addEventListener('click', () => wrap.classList.toggle('active'));

var prev = document.querySelector('.img__preview');

prev.addEventListener('click', () => wrap.classList.toggle('active'));