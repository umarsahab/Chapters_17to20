// Question 1
var arrayMulti= [['Banana', 'Apple', 'Mango'], ['xyz', 'abc', 'us']];

// Question 2
var matrixArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// Question 3
for (var i = 1; i < 11; i++) {
    document.write(i + '<br />');
}

// Question 4
var tableNumber = +prompt('Enter number for table');
var tablelenght = +prompt('Enter length of table');
document.write(' Multiplication table of ' + tableNumber + '<br />');
document.write(' Length ' + tablelenght + '<br />');
for (var i = 1; i <= tablelenght; i++) {
    document.write(tableNumber + ' x ' + i + ' = ' + tableNumber * i + '<br />');
}

// Question 5
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawbwerry'];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br />');
}
for (var i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br />');
}
// Question 6
document.write('Counting:' + '<br />');
for (var i = 1; i <= 15; i++) {
    document.write(i + ',');
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write('<br />' + 'Reverse counting:' + '<br />');
for (var i = 10; i >= 1; i--) {
    document.write(i + ',');
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write('<br />' + 'Even:' + '<br />');
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ',');
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write( '<br />' + 'Odd:' + '<br />');
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ',');
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write( '<br />' + 'Series:' + '<br />');
for (var i = 0; i <= 20; i += 2) {
    document.write(i + 'k,');
}
// Question 7
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt('Welcome to ABC bakery, what do you want sir/madam?');
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === userInput) {
        document.write(userInput + ' is available in our bakery at index ' + i  + '<br />');
        break;
    }
    else {
        document.write(' We are sorry ' + userInput + ' is not available in our bakery. '  + '<br />');
        break;
    }
}

// Question 8
var arr = [24, 53, 78, 91, 12];
var srtArr = arr.sort();
var arr_length = arr.length - 1;
var largest_num = srtArr[arr_length];
document.write('Array items: ' + arr + '<br />');
document.write('Largest Number: ' + largest_num + '<br />');

// Question 9

var arr = [24, 53, 78, 91, 12];
var updated_arr = arr.sort();
var smallest_num = updated_arr[0];
document.write('Array items: ' + arr + '<br />');
document.write('Smallest Number: ' + smallest_num + '<br />');
// Question 10
for (i = 5; i <= 100; i += 5) {
    document.write(i + ',');
}