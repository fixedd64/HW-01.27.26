// РЯДКИ

//------------------------------------------------------------------------------------------------------------

// Завдання 1

/*
    Створіть змінну "str", яка містить рядок "hello world the world".

    Створіть новий рядок "newStr", у якому кожне слово з початкового рядка починається з великої літери.
*/

//let str = "hello world the world";

// let arrStr = str.split(" ");
// let newStr = "";

// for (const key in arrStr) {
//     const item = arrStr[key];
//     const newItem = item[0].toUpperCase() + item.slice(1);
//     newStr += newItem;

//     if (key < arrStr.length - 1) {
//         newStr += " ";
//     }
// }

// console.log(newStr); 


//------------------------------------------------------------------------------------------------------------

// Завдання 2 

/*
    Створіть змінну "str", яка містить рядок "hello world the world".

    Створіть новий рядок "newStr", у якому кожне слово з початкового рядка закінчується великою літерою.
*/

// let str = "hello world the world";

// let arrStr = str.split(" ");
// console.log(arrStr);

// let newStr = "";

// for (const key in arrStr) {
//     const item = arrStr[key];
//     const newItem = item.slice(0, -1) + item[item.length - 1].toUpperCase();
//     newStr += newItem;

//     if (key < arrStr.length - 1) {
//         newStr += " ";
//     }
// }

// console.log(newStr);




//------------------------------------------------------------------------------------------------------------

// Завдання 3 

/*
  Створіть змінну "str", яка містить рядок "hello world the world".

  Створіть новий рядок "newStr", у якому кожне слово з початкового рядка починається і закінчується великою літерою.
*/

// let str = "hello world the world";

// let arrStr = str.split(" ");
// let newStr = "";

// for (const key in arrStr) {
//     const item = arrStr[key];
//     const newItem =
//         item[0].toUpperCase() + item.slice(1, -1) + item[item.length - 1].toUpperCase();
//     newStr += newItem;

//     if (key < arrStr.length - 1) {
//         newStr += " ";
//     }
// }

// console.log(newStr);




//------------------------------------------------------------------------------------------------------------

// Завдання 4  

/*
  Створіть змінну "str", яка містить рядок "hello world the world".

  Створіть новий рядок "newStr", у якому кожне слово з початкового рядка починається і закінчується великою літерою,
  окрім останнього слова, яке починається з великої літери.
*/

// let str = "hello world the world";

// let arrStr = str.split(" ");
// let newStr = "";

// for (const key in arrStr) {
//     const item = arrStr[key];
//     let newItem;

//     if (key == arrStr.length - 1) {
    //     newItem = item[0].toUpperCase() + item.slice(1);
    // } else {
    //     newItem = item[0].toUpperCase() + item.slice(1, -1) + item[item.length - 1].toUpperCase();
//     }

//     newStr += newItem;

//     if (key < arrStr.length - 1) {
//         newStr += " ";
//     }
// }

// console.log(newStr);


//------------------------------------------------------------------------------------------------------------


// Завдання 5

/*
  Створіть змінну "str", яка містить рядок "hello world the world".

  Створіть новий рядок "newStr", який містить початковий рядок у форматі "camelCase" 
*/

// let str = "hello world the world";
// let arrStr = str.split(" ");
// console.log(arrStr);

// let newStr = arrStr[0].toLowerCase();
// console.log(newStr);

// for (let index = 1; index < arrStr.length; index++) {
//     const item = arrStr[index].toLowerCase(); //world
//     newStr += item[0].toUpperCase() + item.slice(1);
//     // console.log(newStr);
// }
// console.log(newStr);


//------------------------------------------------------------------------------------------------------------


// Завдання 6

/*
  Створіть змінну "str", яка містить рядок "hello world the world".

  Створіть новий рядок "newStr", який містить абревіатуру початкового рядка. 
  В абревіатурі мають бути лише перші літери слів, довжина яких більша за 3 символи.
*/

// let str = "hello world the world";

// let arrStr = str.split(" ");
// let newStr = "";

// for (const key in arrStr) {
//     const item = arrStr[key];
//     if (item.length > 3) {
//         newStr += item[0].toUpperCase();
//     }
// }

// console.log(newStr);


//------------------------------------------------------------------------------------------------------------


// Завдання 7

/*
  Створіть змінну "str", яка містить рядок "hello world the world".

  Створіть новий рядок "newStr", у якому кожен парний символ кожного слова знаходиться у верхньому регістрі.
*/
// --- Me ---

// let str = "hello world the world";

// let arrStr = str.split(" ");
// let newStr = "";

// for (const key in arrStr) {
//     const item = arrStr[key];
//     let newItem;

//     if (key % 2 === 0) {
//         newItem = item[0].toUpperCase() + item.slice(1);
//     } else {
//         newItem = item[0].toUpperCase() + item.slice(1, -1) + item[item.length - 1].toUpperCase();
//     }
//     newStr += newItem + " ";
// }

// console.log(newStr);
//------------------------------------------------------------------------------------------------------------
// --- chatGPT ---
// let str = "hello world the world";

// let arrStr = str.split(" ");
// let newStr = "";

// for (let word of arrStr) {
//     let newWord = "";

//     for (let i = 0; i < word.length; i++) {
//         if (i % 2 === 0) {
//             newWord += word[i].toUpperCase();
//         } else {
//             newWord += word[i];
//         }
//     }

//     newStr += newWord + " ";
// }

// newStr = newStr.trim();
// console.log(newStr);


//------------------------------------------------------------------------------------------------------------




// Завдання 8

/*
    Створіть змінну "str", яка містить рядок "hello world the world".

    Створіть новий рядок "newStr", у якому кожен НЕпарний символ кожного слова знаходиться у верхньому регістрі.
*/
let str = "hello world the world";

let arrStr = str.split(" ");
let newStr = "";

for (let key of arrStr) {
    let newItem = "";

    for (let index = 0; index < key.length; index++) {
        if (index % 2 !== 0) {
            newItem += key[index].toUpperCase();
        } else {
            newItem += key[index];
        }
    }

    newStr += newItem + " ";
}

newStr = newStr.trim();
console.log(newStr);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
