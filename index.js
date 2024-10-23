//імпорт необхідних модулів
const {Command} = require('commander');
const prog = new Command(); //для роботи з командним рядком
const fs = require("node:fs"); //для роботи з файлами

//обробляє параметри та читає вхідний файл з 9 по 24 рядок коду

//ініціалізація командного інтерфейсу
prog
.option("-i, --input <path>",)                  //Шлях до input файлу
.option("-o, --output <path>", "output.txt")    //Шлях до output файлу
.option("-d, --display");                       //Виведення в консоль

//парсимо аргументи
prog.parse(process.argv);
const {input, output, display} = prog.opts();

//перевірка наявності та читання файлу
if (!input){ //переввірка чи інпут (див. рядок 10) порожній 
    console.log("Please, specify input file"); 
    process.exit(); //завершення роботи програми 
}
if (!fs.existsSync(input)){  //перевірка існування файлу вказаний в інпуті
    console.log("Cannot find input file");
    process.exit();  
}
//читання вмісту input файлу
const fileContent = fs.readFileSync(input, "utf-8"); //дозволяє !синхронно! прочитати вміст файлу (див. рядок 10)

//обробка JSON та фільтрація даних
const data = JSON.parse(fileContent).filter((item) => item.value > 5 && item.ku > 13 );  //нема ku зі значенням 13 тому буде > 13  (ааааа)

//формування рядка з результатом
const result = data.map((item) => item.value).join('\n'); 

//запис у файл якщо вказано параметр output
if (output){
    fs.writeFileSync(output, result); //синхронно записує значення змінної result у вказаний файл. (див. рядок 11)
}
//виведення у консоль якщо активовано параметр display
if (display){ 
    console.log(result);
}