"use strict";


// выполнение по нажатию на кнопку с задержкой
const functionButtons = document.querySelectorAll('.functions_list__button');
functionButtons.forEach(button => {
    button.addEventListener('click', function() {
        switch(this.id) {
            case 'for_while':
                for_while();
                break;
            case 'forForArrays':
                forForArrays();
                break;
            case 'forIn':
                forIn();
                break;
            case 'exercise2':
                exercise2();
                break;
        }
    })
})




function for_while() {

    // 1
    console.log('1: ');
    for (let i = 0; i <= 100; i++)
        console.log(i);
    
    // 2
    console.log('2: ');
    for (let i = 11; i <= 33; i++)
        console.log(i);
    
    // 3
    console.log('3: ');
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0)
            console.log(i);
    }

    // 4
    let sum = 0;
    for (let i = 1; i <= 100; i++)
        sum += i;
    console.log('4: ' + sum);
}


function forForArrays() {

    // 1
    console.log('1: ');
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i]);

    // 2
    let result = 0;
    for (let i = 0; i < arr.length; i++)
        result += arr[i];
    console.log('2: ' + result);
}


function forIn() {

    // 1
    console.log('1: ');
    let obj = {
        'green': 'зеленый',
        'red': 'красный',
        'blue': 'голубой'
    }

    for (let prop in obj)
        console.log(`${prop}: ${obj[prop]}`);

    // 2
    console.log('2: ');
    obj = {
        'Коля': '200',
        'Вася': '300',
        'Петя': '400'
    }

    for (let prop in obj) {
        console.log(`${prop} - зарплата ${obj[prop]} долларов`);
    }
}


function exercise2() {

    // 1
    console.log('1: ');
    let arr = [2, 5, 9, 15, 0, 4];
    for (let element of arr) {
        if (element > 3 && element < 10)
            console.log(element);
    }

    // 2
    let sum = 0;
    for (let element of arr) {
        if (element >= 0)
        sum += element;
    }
    console.log('2: ' + sum);
    
    // 3
    arr = [1, 2, 5, 9, 4, 13, 4, 10];
    for (let element of arr) {
        if (element == 4) {
            console.log('3: есть!');
            break;
        }
    }

    // 4
    console.log('4: ');
    arr = [10, 20, 30, 50, 235, 3000];
    for (let element of arr) {
        if (String(element)[0] == '1' ||
            String(element)[0] == '2' ||
            String(element)[0] == '5')
            console.log(element);
    }

    // 5
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `-${arr[i]}`;
    }
    str += '-';
    console.log('5: ' + str);

    // 6
    console.log('6: ');
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    for (let i = 0; i < days.length; i++) {
        if (i >= 5)
            console.log(`%c${days[i]}`, "font-weight:900;");
        else
            console.log(days[i]);
    }

    // 7
    console.log('7: ');
    days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let day = 'friday'
    for (let element of days) {
        if (element == day)
            console.log(`%c${element}`, 'font-style:italic;');
        else
            console.log(element);
    }

    // 8
    let n = 1000;
    let num = 0;
    for (n; n >= 50; n /= 2)
        num++;
    console.log('8: ' + num);
}




// ripple click effect
const click_effect = document.querySelectorAll('.click_effect');
click_effect.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        let face = document.createElement('span');
        face.className = 'face';
        face.style.top = ripple.style.top;
        face.style.left = ripple.style.left;

        this.appendChild(ripple);
        this.appendChild(face);

        setTimeout(() => {
            ripple.remove();
            face.remove();
        }, 500);
    })
})