// //    1   УДАЛЯЕТ ГЛАССНЫЕ ИЗ СЛОВ

// /*
// function disemvowel(str) {
//     const vowels = /[aeiouAEIOU]/g;
//     return str.replace(vowels, "");
// }
// str = disemvowel("This website is for losers LOL!");
// console.log(str);
// */

// //========================================================================================================================================================


// //    2   ИЗОГРАММА (ПРОВЕРЯЕТ ПОВТОРЯЮТСЯ ЛИ БУКВЫ В СЛОВЕ)
// /*
// function usogram(str) {

//     let strCopy = new Set(str.toLowerCase());
//     console.log(strCopy);
//     return str.length == new Set(str.toLowerCase()).size;

// }
// console.log(usogram("reweqwe"));
// */

// //========================================================================================================================================================

// /*
// function explode(s) {

//     let arr = s.split("");
//     console.log(arr);
// }

// explode ("123");
// */

// //========================================================================================================================================================
// /*
// Вам даны два отсортированных массива, оба из которых содержат только целые числа. Ваша задача — найти способ объединить их в один, отсортированный по возрастанию. 
// Завершите функцию mergeArrays(arr1, arr2), где arr1 и arr2 — исходные отсортированные массивы.
// Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами с 0 или более целыми числами. Если и arr1, и arr2 пусты, просто верните пустой массив.
// Примечание: arr1 и arr2 могут быть отсортированы в разном порядке. Также arr1 и arr2 могут иметь одинаковые целые числа. Удалить дубликаты в возвращаемом результате.
// */

// /*
// function mergeArrays(arr1, arr2) {

//     arr2 = typeof arr2 !== "undefined" ? arr2 : [];

//     let arr = arr1.concat(arr2);
//     console.log(arr);
//     arr.sort((a, b) => a - b);

//     arrNew = new Set(arr);
//     arr3 = Array.from(arrNew);
//     console.log(arr3);
// }

// mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
// */

// const students = [{
//         name: "bob",
//         ade: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         ade: 21,
//         isMarried: true,
//         scores: 89,
//     },
//     {
//         name: "Nik",
//         ade: 20,
//         isMarried: false,
//         scores: 120,
//     },
//     {
//         name: "Araham",
//         ade: 19,
//         isMarried: false,
//         scores: 100,
//     },
//     {
//         name: "Jone",
//         ade: 35,
//         isMarried: false,
//         scores: 210,
//     },
// ];


// const mapFunction = (arr, callbak) => {
//     const scores = [];
//     //
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = callbak(arr[i]);
//         scores[i] = newValue;
//     }
//     return scores;
// };

// //console.log(mapFunction(students, el => el.name));
// //console.log(mapFunction(students, el => el.scores));
// //console.log(mapFunction(students, el => ({...el, scores: el.scores + 10})));

// const filterFunction = (arr, callbak) => {
//     const result = [];
//     //
//     for (let i = 0; i < arr.length; i++) {
//         if(callbak(arr[i]) === true) {
//             result.push((arr[i]));
//         }
//     }
//     return result;
// }

// //console.log(filterFunction(students, el => el.scores > 100 && el.scores < 200));
// //console.log(filterFunction(students, el => !el.isMarried));



// const arrayOfSheep = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true];

// function countSheeps(arrayOfSheep) {
//  const result = arrayOfSheep.filter(el => el === true && el != null && el != undefined);
//     return result.length;
//   }

// //console.log(countSheeps(arrayOfSheep));

// var summation = function (num) {
//     // Code here
//   }


// const array = [0, 2, 3, 4, 5];

// function invert(array) {
//     return  array.map(el => el * -1);
// }
// //console.log(invert(array));


// function boolToWord( bool ){
//     return (bool === true) ? "Yes": "No";

//     // if (bool === true) {
//     //     return "Yes";
//     // } else if (bool === false) {
//     //     return "No";
//     // }
// }

// //console.log(boolToWord( true ));

// const args = [34, 15, 88, -2];


// findSmallestInt = (args) => {
//       const val = args.sort((a, b) => a - b);
//       return val[0];
//     }


//   //console.log(findSmallestInt(args));


// function maps(x){
//     return x.map(el => el * 2);
// }

// let str = "world";
// function solution(str){
//   return str.split("").reverse().join("");
// }
// //console.log(solution(str));

// var isSquare = function(n){

//     const val = Math.round(Math.sqrt(n));
//     console.log(val);

//     if (n === val * val) {
//         return  'sex'; 
//     } else {
//         return "qe";
//     }

//   }

//  console.log(isSquare(69)); 

//  function usogram(str) {

//     let strCopy = new Set(str.toLowerCase());
//     console.log(strCopy);
//     return str.length == new Set(str.toLowerCase()).size;

// }
// console.log(usogram("reweqwe"));

// function XO(str) {

//     let newStr = str.toLowerCase()
//     let mus = newStr.split("")
//     console.log(mus);
//     let target1 = "x";
//     let target2 = "o";
//     let count1 = 0
//     let count2 = 0
//     let mus1 = mus.map(el => el === target1 ? count1 = count1 + 1 : el)
//     let mus2 = mus.map(el => el === target2 ? count2 = count2 + 1 : el)

//     console.log(count1);
//     console.log();
//     if (count1 == count2) {
//         return true
//     } else {
//         return false
//     }
// }

// XO("AdWsxxfxxaOOEQE")


function stringToArray(string){
   return string.split(' ')
    
	// code code code

}

console.log(stringToArray("Robin Singh"));

function positiveSum(arr) {
   return console.log(arr.filter(x => x >= 0).reduce((a, c) => a + c, 0));

}
//positiveSum([1, -4, 7, 12])
//

function repeatStr(n, s) {
   let str = '';
   for (let i = 0; i < n; i++) {
      str += s;

   }
   return str;
}
//repeatStr(6, "I");

function century(year) {
   return console.log(Math.ceil(year / 100));

}
//century(1701)
