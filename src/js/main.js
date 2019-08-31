function createHuman() {
    var human = {};
    var teenager = '';
    var humans = [];

    for (var i = 0; i < 2; i++) {

    var firstName = prompt('Type first name');
    var lastName = prompt('Type last name');
    var age = +prompt('Type age');
    var sex = prompt('Type sex');
    

    humans[i].firstName = firstName;
    humans[i].lastName = lastName;
    humans[i].age = age;
    humans[i].sex = sex;
    
}



    if(age >=13 && age <= 19) {
        teenager = 'He is teenager';
    } else {
        teenager = "He isn't teenager";
    }

    console.log(humans);

    for(var i = 0; i < 2; i++) {
        alert('Имя: ' +
            humans[i].firstName +
            '\nФамилия: ' +
            humans[i].lastName +
            '\nПол: ' +
            humans[i].sex +
            '\nВозраст: ' +
            humans[i].age +
            '\n' + teenager
            );
    }
}

createHuman();