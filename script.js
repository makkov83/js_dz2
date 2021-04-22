1
/*var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - ++ перед переменной возвращается результат операции
d = b++; alert(d);           // 1 - ++ после переменной возвращается переменная, но результат сохранется после
c = (2 + ++a); alert(c);      // 5 - по аналогии вышеописанного 2+1 +1+1=5
d = (2 + b++); alert(d);      // 4 - 2+1 +1
alert(a);                    // 3 не понял почему так, буду еще перечитывать методичку и пересмотрю урок
alert(b);                    // 3 не понял почему так, буду еще перечитывать методичку и пересмотрю урок
*/

2
/*var a = 2;
var x = 1 + (a *= 2); будет 5, операция возвращает результат 1 + (4)=5
*/

3
/*var a = 20
var b = -10
if (a > 0 && b > 0) {
    alert(a - b)
}
else if (a < 0 && b < 0) {
    alert(a * b)
}
else {
    alert(a + b)
}*/

4
/*function range(a, str = '') {
    switch (true) {
        case (a <= 15):
            str+=a + '' + range(a+1)
            default:
                return str
    }
}
*/

5
/*function sub(a = 5, b = 6) {
    return a - b
}

function mul(a = 5, b = 6) {
    return a * b
}

function sum(a = 5, b = 6) {
    return a + b
}
function div(a = 5, b = 6) {
    return a / b
}
alert (range(3))*/

6

/*function mathOperation(arg1, arg2, operation) {
switch (operation) {
    case '+'
    return sum(arg1, arg2);
    case '-'
    return sub(arg1, arg2);
    case '*'
    return mul(arg1, arg2);
    case '/'
    return div(arg1, arg2):
    default:
        return 'неизвестная операция'
}}
alert(mathOperation(10, 15 '-'))*/

