$(document).ready(function () {
    function getAverageAge(people) {
        return _.reduce(people, function (sum, p) {
            return sum + p.age;
        }, 0) / people.length;
    }

    function getRangeAge(people) {
        return _.chain(people)
            .filter(function (p) {
                return p.age >= 20 && p.age <= 30;
            })
            .sortBy(function (man) {
                return man.age;
            })
            .value();
    }

    function addFullName(people) {
        return _.map(people, function (man) {
            return _.extend(man, {fullName: [man.lastName] + " " + [man.name]})
        });

    }

    var people = [
        {
            age: 25,
            name: "Иван",
            lastName: "Федотов"
        },
        {
            age: 20,
            name: "Петр",
            lastName: "Данилов"
        },
        {
            age: 19,
            name: "Василий",
            lastName: "Зайцев"
        },
        {
            age: 55,
            name: "Матвей",
            lastName: "Сергеев"
        },
        {
            age: 47,
            name: "Кирилл",
            lastName: "Щербаков"
        },
        {
            age: 91,
            name: "Мария",
            lastName: "Кузнецова"
        },
        {
            age: 12,
            name: "Елена",
            lastName: "Смирнова"
        },
        {
            age: 5,
            name: "Ольга",
            lastName: "Соловьева"
        },
        {
            age: 27,
            name: "Татьяна",
            lastName: "Романова"
        },
        {
            age: 105,
            name: "Мирослава",
            lastName: "Макарова"
        }
    ];

    console.log("Средний возраст: " + getAverageAge(people));

    console.log("\nЛюди от 20 до 30 лет: ");
    _.each(getRangeAge(people), function (p) {
        console.log(p.name + ": " + p.age);
    });

    console.log("\nПолные имена");
    var fullName = addFullName(people);
    _.each(fullName, function (p) {
        console.log(p.fullName + ": " + p.age);
    });
});