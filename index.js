//імпорт необхідних модулів
const {Command} = require('commander');
const prog = new Command(); //для роботи з командним рядком
const fs = require("node:fs"); //для роботи з файлами

//обробляє параметри та читає вхідний файл з 9 по 24 рядок коду

//ініціалізація командного інтерфейсу
prog
.option("-i, --input <path>",)  //Шлях до input файлу
.option("-o, --output <path>", "output.txt")    //Шлях до output файлу
.option("-d, --display");                       //Виведення в консоль

//парсимо аргументи
prog.parse(process.argv);
const {input, output, display} = prog.opts();

//Перевірка наявності та читання файлу
if (!input) 
    throw new Error("Please, specify input file");
if (!fs.existsSync(input)) 
    throw new Error("Cannot find input file");

