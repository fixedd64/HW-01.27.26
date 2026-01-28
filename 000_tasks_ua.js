const developers = [
    // [id, name,    age, isCar,  [city, country],     typeDeveloper, level,    salary, skills[]                       ]
    [ 1,    "Ivan",   25,  true,  ["Kyiv", "Ukraine"], "FrontEnd",    "Junior", 1200,   ["HTML", "CSS", "JavaScript" ] ],
    [
        2,
        "Oleh",
        25,
        true,
        ["Kyiv", "Ukraine"],
        "FrontEnd",
        "Junior",
        1200,
        ["HTML", "CSS", "JavaScript"]
    ],
    [
        3,
        "Sofia",
        30,
        false,
        ["Kharkiv", "Ukraine"],
        "FullStack",
        "Senior",
        3500,
        ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express", "SQL", "MySQL", "PostgreSQL", "MongoDB"]
    ],
    [
        4,
        "Danil",
        22,
        true,
        ["Kharkiv", "Ukraine"],
        "FrontEnd",
        "Junior",
        1700,
        ["HTML", "CSS", "JavaScript", "TypeScript", "MUI"]
    ],
    [
        5,
        "Maxym",
        28,
        true,
        ["Kharkiv", "Ukraine"],
        "BackEnd",
        "Junior",
        1700,
        ["JavaScript", "Node.js", "Express", "SQL", "MySQL", "MongoDB"]
    ],
    [
        6,
        "Andrey",
        35,
        false,
        ["Kharkiv", "Ukraine"],
        "DevOps",
        "Junior",
        1700,
        ["Docker", "Kubernets", "CI/CD"]
    ],
    [
        7,
        "Anna",
        29,
        false,
        ["Lviv", "Ukraine"],
        "FrontEnd",
        "Junior",
        1500,
        ["HTML", "CSS", "JavaScript", "TypeScript"]
    ],
    [
        8,
        "Artem",
        26,
        true,
        ["Kyiv", "Ukraine"],
        "FullStack",
        "Middle",
        3500,
        ["HTML", "CSS", "JavaScript", "TypeScript", "MUI", "Node.js", "Express", "SQL", "MySQL", "MongoDB"]
    ],
    [
        9,
        "Ivan",
        24,
        false,
        ["Lviv", "Ukraine"],
        "DevOps",
        "Junior",
        1700,
        ["HTML", "CSS", "JavaScript"]
    ],
    [
        10,
        "Igor",
        27,
        true,
        ["Kharkiv", "Ukraine"],
        "FrontEnd",
        "Junior",
        1200,
        ["HTML", "CSS", "JavaScript"]
    ],
    [
        11,
        "Iryna",
        33,
        true,
        ["Kharkiv", "Ukraine"],
        "FullStack",
        "Middle",
        2700,
        ["JavaScript", "TypeScript", "Node.js", "Express", "SQL", "MySQL", "MongoDB"]
    ],
    [
        12,
        "David",
        31,
        true,
        ["Odessa", "Ukraine"],
        "FullStack",
        "Middle",
        2200,
        ["JavaScript", "Node.js", "Express", "SQL", "PostgreSQL", "MongoDB"]
    ],
    [
        13,
        "Andrey",
        23,
        false,
        ["Kharkiv", "Ukraine"],
        "DataBase",
        "Senior",
        4000,
        ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis"]
    ],
    [
        14,
        "Sofia",
        30,
        true,
        ["Lviv", "Ukraine"],
        "BackEnd",
        "Middle",
        2500,
        ["JavaScript", "TypeScript", "Node.js", "Express", "SQL", "PostgreSQL", "MongoDB"]
    ],
    [
        15,
        "Roman",
        29,
        true,
        ["Kharkiv", "Ukraine"],
        "FullStack",
        "Senior",
        3800,
        ["HTML", "CSS", "JavaScript", "TypeScript", "NestJS", "SQL", "MySQL", "PostgreSQL", "MongoDB", "TypeORM", "Sequelize"]
    ],
    [
        16,
        "Mykola",
        28,
        false,
        ["Kharkiv", "Ukraine"],
        "BackEnd",
        "Senior",
        3200,
        ["JavaScript", "TypeScript", "Node.js", "Express", "SQL", "MySQL", "PostgreSQL", "MongoDB"]
    ],
    [
        17,
        "Kateryna",
        26,
        false,
        ["Odessa", "Ukraine"],
        "FrontEnd",
        "Middle",
        2000,
        ["HTML", "CSS", "JavaScript", "Typescript", "MUI"]
    ],
    [
        18,
        "Oksana",
        27,
        true,
        ["Kyiv", "Ukraine"],
        "DataBase",
        "Middle",
        2500,
        ["SQL", "MySQL", "MongoDB",]
    ],
    [
        19,
        "Anastasia",
        25,
        false,
        ["Kharkiv", "Ukraine"],
        "DevOps",
        "Junior",
        3800,
        ["Docker", "CI/CD"]
    ],
    [
        20,
        "Mykola",
        22,
        true,
        ["Kharkiv", "Ukraine"],
        "FrontEnd",
        "Senior",
        3500,
        ["HTML", "CSS", "JavaScript", "TypeSctipt"]
    ],
    [
        21,
        "Olena",
        24,
        true,
        ["Kyiv", "Ukraine"],
        "FrontEnd",
        "Junior",
        1700,
        ["HTML", "CSS", "JavaScript", "TypeScript", "MUI"]
    ],

]

/*
    Масив "developers" містить вкладені масиви, де кожен елемент описує структуру "developer"

    [id, name, age, isCar, [city, country],     typeDeveloper, level,    salary, skills[]]

    - 0 id - число, ідентифікатор розробника
    - 1 name - рядок, ім'я розробника
    - 2 age - число, вік розробника
    - 3 isCar - булеве значення, є чи немає авто у розробника
    - 4 address - вкладений масив рядків, місто ("city") та країна ("country") проживання розробника
    - 5 typeDeveloper - тип розробника - "FrontEnd", "BackEnd", "FullStack", "DataBase", "DevOps" 
    - 6 level - рядок, рівень розробника - "Junior", "Middle", "Senior"
    - 7 salary - число, зарплата розробника
    - 8 skills - масив рядків, навички розробника

*/ 

//------------------------------------------------------------------------------------------------------------

// Завдання 1

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де вік розробників більше 24.
    
    // let newArr = [];

// for (const developer of developers) {
//     let age = developer[2];
//     if (age > 24) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// // debugger
*/

//------------------------------------------------------------------------------------------------------------

// Завдання 2

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де вік розробників менше 24.

*/
// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); //(9) [1, 'Ivan', 25, true, Array(2), 'FrontEnd', 'Junior', 1200, Array(3)]
//     let age = developer[2];
//     if (age < 24) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// // debugger

//------------------------------------------------------------------------------------------------------------

// Завдання 3

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де вік розробників більше 20 та менше 25.

*/
// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let age = developer[2];
//     if (age > 20 && age < 25) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// // debugger

//------------------------------------------------------------------------------------------------------------

// Завдання 4

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де вік розробників менше 20 або більше 25.

*/

// wrong
// let newArr = [];

// for (const developer of developers) {
//     let age = developer[2];
//     if (age > 25 || age < 20) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// debugger


//------------------------------------------------------------------------------------------------------------

// Завдання 5

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де зарплата (salary) розробників більше 2500
*/

// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let salary = developer[7];
//     if (salary > 2500) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// // debugger

//------------------------------------------------------------------------------------------------------------

// Завдання 6

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де зарплата (salary) розробників менше 2500
*/

// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let salary = developer[7];
//     if (salary < 2500) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// // debugger

//------------------------------------------------------------------------------------------------------------

// Завдання 7

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де зарплата (salary) розробників більше 2000 та менше 3000
*/

// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let salary = developer[7];
//     if (salary > 2000 && salary < 3000) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// // debugger

//------------------------------------------------------------------------------------------------------------

// Завдання 8

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, у яких є авто (isCar)
*/

// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let isCar = developer[3];
//     if (isCar === true) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// // debugger

//------------------------------------------------------------------------------------------------------------



// Завдання 9

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, у яких немає авто (isCar)
*/

// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let isCar = developer[3];
//     if (isCar !== true) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// debugger

//------------------------------------------------------------------------------------------------------------




// Завдання 10

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де посада розробника (typeDeveloper) - "frontend"
*/

// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let typeDeveloper = developer[5];
//     if (typeDeveloper === "FrontEnd") {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// debugger

//------------------------------------------------------------------------------------------------------------


// Завдання 11

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де посада розробника (typeDeveloper) - "fullstack"
*/

// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let typeDeveloper = developer[5];
//     if (typeDeveloper === "FullStack") {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// debugger

//------------------------------------------------------------------------------------------------------------

// Завдання 12

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де посада розробника (typeDeveloper) - "database" АБО "devops"
*/

// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let typeDeveloper = developer[5];
//     if (typeDeveloper === "DataBase" || typeDeveloper === "DevOps" ) {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// // debugger

//------------------------------------------------------------------------------------------------------------


// Завдання 13

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де рівень розробника (level) - "junior" АБО "senior"
*/

//------------------------------------------------------------------------------------------------------------


// Завдання 14

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, які володіють навичками (skills) — "JavaScript" АБО "TypeScript"
*/

//  --- Not Working ---
// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let skills = developer[8];
//     if (skills === "JavaScript" || skills === "TypeScript") {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// debugger

//------------------------------------------------------------------------------------------------------------

// Завдання 15***

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, які володіють навичками (skills) — "JavaScript" І "TypeScript"
*/

//  --- Not Working ---
// let newArr = [];

// for (const developer of developers) {
//     // console.log(developer); 
//     let skills = developer[8];
//     if (skills === "JavaScript" && skills === "TypeScript") {
//         newArr.push(developer); 
//     }
// }
// console.log(newArr);
// debugger

//------------------------------------------------------------------------------------------------------------

// Завдання 16 re-mapping/presentors

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити елементи,
    що являють собою підмасиви з такою структурою - [id, name, age, typeDeveloper, level, salary].
*/

// let newArr = [];
// console.log(newArr);

// for (const developer of developers) {
//     let id = developer[0];
//     let name = developer[1];
//     let age = developer[2];
//     let typeDeveloper = developer[5];
//     let level = developer[6];
//     let salary = developer[7];
    
//     // newArr.push([id, name, age, typeDeveloper, level, salary])
//     let newDeveloper = [id, name, age, typeDeveloper, level, salary];
//     newArr.push(newDeveloper)
//     // newArr.push([developer[0], developer[1], developer[2], developer[5], developer[6], developer[7]]);
// }
// console.log(newArr);

//------------------------------------------------------------------------------------------------------------

// Завдання 17 !!

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть новий масив "newArr", який буде містити лише ті масиви, де адреса (місто) розробника — "Kharkiv".
*/

//  --- Not Working ---

// let newArr = [];

// for (const developer of developers) {
//     let address = developer[4];

//     if (address === "Kharkiv") {
//         newArr.push(developer);
//     }
// }

// console.log(newArr);



//------------------------------------------------------------------------------------------------------------

// Завдання 18**

/*
    Дано масив "developers", що містить масиви з інформацією про розробників.

    Створіть змінну "offset" - число, що вказує зміщення, з якої позиції повертати частину масиву.
    Створіть змінну "limit" - число, що вказує кількість елементів, які мають бути в новому масиві.

    Створіть новий масив "newArr", який буде містити елементи з масиву "developers", починаючи з позиції "offset" та в кількості "limit".

*/

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------