//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr = [1, 2, 3, 4, 5, 6]
let result = 0 
for (let index = 0; index < arr.length; index++) {
    result += arr[index]
}

    console.log(result)

//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr2 = [1, 2, 3, 4, 5, 6]
let result2 = 0
for (let index = 0; index < arr.length; index++) {
    result += arr2[index] ** 2
}

console.log(result)

//Дан массив с числами. Найдите среднее арифметическое его элементов.
let arr3 = [1, 2, 3, 4, 5, 6]
let result3 = 0
    for (let index = 0; index < arr.length; index++) {
        result3 +=arr3[index]
    }
    let average = result3 / arr.length
    console.log(average)

//Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.

let number = 5
let factorial = 1
for (let index = 1; index <= number; index++) {
    factorial *= index
}

console.log(factorial)

//Заполните массив числами от 10 до 1 с помощью цикла.
let array = []

    for (let index = 10; index >= 1 ; index--) {
            array.push(index)
}
    console.log(array)

//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let array2 = [-2, 4, -5, -6, 1, 3]
let summ = 0 
    for (let index = 0; index < arr.length; index++){
        if (array2[index]%2 !=1){
            console.log(array2[index]*2)
            }
        }

//Дан массив с числами. Выведите элементы этого массива в обратном порядке.

let arr4 = ['1', '2', '3', '4', '5', '6']
let res = arr.reverse()

console.log(res)

//Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
  let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    for (let index = 1; index < number2.length; index++) {
        if (number2[index] === index) {
            console.log(number2[i])
        }
    }
    


    
















