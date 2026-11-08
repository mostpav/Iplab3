// Завдання 3. Комбіноване завдання
const users = [
    { name: "Анна", age: 17, email: "anna@example.com", hobbies: ["малювання", "музика"] },
    { name: "Максим", age: 22, email: "maksym@example.com", hobbies: ["футбол", "ігри"] },
    { name: "Софія", age: 19, email: "sofia@example.com", hobbies: ["читання", "подорожі"] },
    { name: "Дмитро", age: 16, email: "dmytro@example.com", hobbies: ["велосипед"] },
    { name: "Ірина", age: 25, email: "iryna@example.com", hobbies: ["програмування", "спорт"] }
];

// Функція приймає масив, фільтрує повнолітніх і виводить їхні імена
function showAdultUsers(usersArray) {
    const adults = usersArray.filter(user => user.age >= 18);
    console.log("Імена повнолітніх користувачів:");
    adults.forEach(user => console.log(user.name));
    return adults;
}

const adultUsers = showAdultUsers(users);