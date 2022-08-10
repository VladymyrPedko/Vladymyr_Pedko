// DeadLine: 11.08.2022
//
// 1) Задание на классы:
//     1.1) Создать абстрактный класс Human
// Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
//     Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.
//
// 1.2) Создать два класса(которые должны зависеть от абстракции):
// - Фронтенд разработчик
// - Строитель
//
// 1.3) Класс Фронтенд разработчик:
//     Добавить доп. свойства:
// - начало карьеры(формат Date),
// - предыдущие компании(массив объектов
// {
//     start: new Date(),
//         end: new Date(),
//     salaryPerMonth: number,
//     position: 'middle' или 'junior' или 'senior',
//     companyName: 'Oracle',
// })
// Добавить доп. методы:
// - изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
// - добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
//     высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
//     в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
// - добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
// - возможность добавить компанию в массив предыдущих компаний по примеру объекта выше
//
// 1.4) Класс Строитель:
//     Добавить доп. свойства:
// - локация строительного объекта(строка)
// - набор инструментов (массив строк ['кирка', 'топор'])
// - скорость выполнения работы на один квадратный метр (количество минут - number)
// Добавить доп. методы:
// - метод построить дом (принимает в себя количество квадратных метров) - должен показать сколько дней займет постройка дома текущим мастером
// если меньше одного дня - показать количество часов
// если больше одного дня - показать количество дней и часов
// если больше недели - показать количество недель дней и часов
// если больше месяца - показать количество месяцев недель дней и часов
// если больше года - показать количество лет месяцев недель дней и часов

class Human {
    constructor(height, weight, name, date, gender, disability) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.disability = disability;
    }

    get getInfo() {
        const info = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            date: this.date,
            gender: this.gender,
            disability: this.disability
        };
    }
    get getSayHello() {
        let hello = `Привет, меня зовут ${this.name}`;
        console.log(hello)
    }
    set setExchangeName(name){
        this.name = name;
    }
    set setExchangeDisability (disability){
        this.disability = disability;
    } set setGender (gender){
        this.gender = gender;
    }
}

const myHuman = new Human(190, 120, 'Victor', new Date('1976,05,26'),
    'male', false);
myHuman.getSayHello;
myHuman.getInfo;
myHuman.setExchangeName = 'Max';
myHuman.setExchangeDisability = true;
myHuman.setGender = 'Mole';
console.log(myHuman);



class FrontendDeveloper extends Human {
    constructor(height, weight, name, date, gender, disability, carierStart, previousCompan) {
        super(height, weight, name, date, gender, disability);

        this.carierStart = carierStart;
        this.previousCompan = previousCompan
    }

    get getSayHello() {
        let hello = `Привет, меня зовут ${this.name}, я Фронтенд разработчик. Работаю с ${this.carierStart}`;
        console.log(hello)
    }
    myTotalMoney(){
        const myStartTameOracle = Date.parse(myFrontendDeveloper.previousCompan[0].start);
        const myEndTameOracle = Date.parse(myFrontendDeveloper.previousCompan[0].end);
        let totalSalaryOracle = (Math.floor((myEndTameOracle - myStartTameOracle)/1000/60/60/24/365*12))
            * myFrontendDeveloper.previousCompan[0].salaryPerMonth;
        const myStartTameDesire = Date.parse(myFrontendDeveloper.previousCompan[1].start);
        const myEndTameDesire = Date.parse(myFrontendDeveloper.previousCompan[1].end);
        let myTameDesire = (myEndTameDesire - myStartTameDesire)/1000/60/60/24/365*12;
        let totalSalaryDesire = Math.floor(myTameDesire) * myFrontendDeveloper.previousCompan[1].salaryPerMonth;
        const totalSalary = totalSalaryDesire + totalSalaryOracle;

        console.log(totalSalary);
    }


    myPreviousCompan(companyName){
        const myCompany  =  this.previousCompan.filter(obj => {
            return  obj.previousCompan === companyName});
        console.log(myCompany)
    };


    newCompany (obj){
        this.previousCompan.push(obj)
    }
}

const myFrontendDeveloper = new FrontendDeveloper(188, 99, 'Ivan', new Date(1999,11,25),
    'Mole', false,new Date(2015, 8, 3),[
        {
            start: new Date('2015-08-03'),
            end: new Date(2020, 8, 3),
            salaryPerMonth: 100,
            position: 'junior',
            companyName: 'Oracle',
        },

        {
            start: new Date(2020, 8, 4),
            end: new Date(2022, 8, 4),
            salaryPerMonth: 200,
            position: 'junior',
            companyName: 'Desire',
        }
    ]);

myFrontendDeveloper.getSayHello;
myFrontendDeveloper.myTotalMoney();
myFrontendDeveloper.myPreviousCompan('Oracle');
myFrontendDeveloper.newCompany({
    start: new Date(2022, 8, 4),
    end: new Date(2022, 9, 4),
    salaryPerMonth: 230,
    position: 'junior',
    companyName: 'Lola'
});
console.log(myFrontendDeveloper);


class Builder extends Human {
    constructor(height, weight, name, date, gender, disability, location, tool, speed) {
        super(height, weight, name, date, gender, disability);
        this.location = location;
        this.tool = tool;
        this.speed = speed;
    }

    buildingHouse(house) {
        let buildHour = Math.floor((house) * myBuilder.speed / 60);
        let hour = buildHour % 24;
        let builDay = Math.floor(buildHour / 24);
        let day = builDay % 7;
        let builkWeek = Math.floor(builDay / 7);
        let week = builkWeek % 4;
        let builMonth = Math.floor(builkWeek / 4);
        let month = builMonth % 12;
        let builYear = Math.floor(builMonth / 12);

        if (buildHour < 24) {
            return `Работа займет ${buildHour}`;
        } else if (buildHour > 24 && builDay < 7) {
            return `Работа займет ${builDay} дней и ${hour} часов`;
        } else if (builDay > 7 && builkWeek < 4) {
            return `Работа займет ${builkWeek} недель ${day} дней и ${hour}`;
        } else if (builkWeek > 4 && builMonth < 12) {
            return `Работа займет ${month} месяцев ${week} недель ${day} дней ${hour} часов`
        } else {
            return `Работа займет ${builYear} лет ${month} месяцев ${week} недель ${day} дней ${hour} часов`
        }
    }
}
const myBuilder = new Builder(150, 66, 'Oleg', new Date(1990, 1, 1), 'mole',
    false, 'Kharkov', ['кирка', 'топор'], 10);
console.log(myBuilder);
myBuilder.buildingHouse(15500);























