// Завдання 2. Робота з масивами
const products = [
    { name: "Ноутбук", price: 25000, category: "Електроніка" },
    { name: "Смартфон", price: 18000, category: "Електроніка" },
    { name: "Книга", price: 450, category: "Книги" },
    { name: "Навушники", price: 2200, category: "Електроніка" },
    { name: "Рюкзак", price: 1500, category: "Аксесуари" }
];

// 1. Виведення всього масиву
console.log("Початковий масив:", products);
const initialProducts = [...products];

// 2. Додавання товару методом push()
products.push({ name: "Планшет", price: 12000, category: "Електроніка" });

// 3. Видалення останнього елемента методом pop()
const removedProduct = products.pop();
console.log("Видалений товар:", removedProduct);

// Додаткова демонстрація shift() та unshift()
const firstProduct = products.shift();
products.unshift(firstProduct);

// 4. Фільтрація за категорією
const category = "Електроніка";
const filteredProducts = products.filter(product => product.category === category);

// 5. Отримання назв товарів через map()
const productNames = products.map(product => product.name);

// 6. Загальна сума через reduce()
const total = products.reduce((sum, product) => sum + product.price, 0);

console.log("Товари категорії", category, filteredProducts);
console.log("Назви товарів:", productNames);
console.log("Загальна сума:", total);