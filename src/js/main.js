function test() {
    var eng = ['green', 'yellow', 'red', 'black'];
    var rus = ['зеленый', 'желтый', 'красный', 'черный'];

    do {
        var index = Math.ceil(Math.random() * (eng.length - 1));
        var answer = prompt(eng[index]);
        if(rus[index] == answer) {
            alert('You are cool guy!')
        } else {
            alert('Go to scoll!')
        }
    } while (confirm('continue?'));
}

function test1() {
    var dictionary = {
        green: 'зеленый',
        yellow: 'желтый',
        red: 'красный',
        black: 'черный'
    };

    do {
        var index = Math.ceil(Math.random() * (eng.length - 1));
        var quest = Object.keys(dictionary)[index];
        var answer = prompt(quest);
        if(dictionary[quest] == answer) {
            alert('You are cool guy!')
        } else {
            alert('Go to scoll!')
        }
    } while (confirm('continue?'));
}

test1();