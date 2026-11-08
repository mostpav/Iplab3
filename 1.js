// Завдання 1. Робота з об'єктами
const user = {
    name: "Олександр",
    age: 20,
    email: "oleksandr@example.com",
    hobbies: ["читання", "спорт", "програмування"]
};

// 1. Виведення всіх властивостей
console.log("Початковий об'єкт:", user);

// 2. Додавання властивості
user.isAdmin = false;

// 3. Зміна віку
user.age = 21;

// 4. Видалення властивості email
delete user.email;

// 5. Перебір властивостей
const lines = [];
for (const key in user) {
    const value = Array.isArray(user[key]) ? user[key].join(", ") : user[key];
    const line = `${key}: ${value}`;
    console.log(line);
    lines.push(line);
}