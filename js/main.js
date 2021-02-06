'use strict'
var msg = 'Hello World';
console.log(msg);

var a = -5,
    b = 4;

/*
if (a > 0 && b > 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    alert(a + b);
}*/
var a = 3;

switch (a) {
    case 1:
        console.log('1')
    case 2:
        console.log('2')
    case 3:
        console.log('3')
    case 4:
        console.log('4')
    case 5:
        console.log('5')
    case 6:
        console.log('6')
    case 7:
        console.log('7')
    case 8:
        console.log('8')
    case 9:
        console.log('9')
    case 10:
        console.log('10')
    case 11:
        console.log('11')
    case 12:
        console.log('12')

    case 13:
        console.log('13')
    case 14:
        console.log('14')
    case 15:
        console.log('15')

}

function sum(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

function mult(a, b) {
    return a * b;
};

function div(a, b) {
    return a / b;
};


function mathOperation(a, b, operation) {

    switch (operation) {
        case 'sum':
            return sum(a, b);
        case 'sub':
            return sub(a, b);
        case 'mult':
            return mult(a, b);
        case 'div':
            return div(a, b);
        default:
            console.log('unknown operation');
    }
}
console.log(mathOperation(3, 5, 'sum'));
console.log(mathOperation(3, 5, 'sub'));
console.log(mathOperation(3, 5, 'mult'));
console.log(mathOperation(3, 5, 'div'));

if (null == 0) {
    console.log('true');
} else {
    console.log('false');
}
console.log(null == 0);

function power(val, pow) {
    if (pow == 1)
        return val;
    return val * power(val, pow - 1);
}

console.log(power(2, 8));