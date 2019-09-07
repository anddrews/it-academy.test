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

document.querySelector('.button-map').addEventListener('click', main)