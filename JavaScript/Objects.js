(function useObjects() {
    console.log("Работа с объектами:");

    function getCountriesWithCitiesMaxQuantity(array) {
        var citiesMaxQuantity = array.reduce(function (max, current) {
            if (current.cities.length > max) {
                max = current.cities.length;
            }
            return max;
        }, 0);

        return array.filter(function (current) {
            return Number(current.cities.length) === Number(citiesMaxQuantity);
        });
    }

    function getTotalPopulation(country) {
        return country.cities.reduce(function (totalPopulation, city) {
            return totalPopulation + city.population;
        }, 0);
    }

    var countriesList = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Saint Petersburg",
                    population: 5383890
                },
                {
                    name: "Moscow",
                    population: 12615279
                },
                {
                    name: "Novosibirsk",
                    population: 1618039
                },
                {
                    name: "Yekaterinburg",
                    population: 1515832
                }
            ]
        },
        {
            name: "Finland",
            cities: [
                {
                    name: "Helsinki",
                    population: 648650
                },
                {
                    name: "Espoo",
                    population: 281866
                }
            ]
        },
        {
            name: "Australia",
            cities: [
                {
                    name: "Sydney",
                    population: 5230330
                },
                {
                    name: "Melbourne",
                    population: 4936349
                },
                {
                    name: "Wollongong",
                    population: 302739
                },
                {
                    name: "Hobart",
                    population: 232606
                }
            ]
        },
        {
            name: "Israel",
            cities: [
                {
                    name: "Haifa",
                    population: 283640
                },
                {
                    name: "Beersheba",
                    population: 209002
                },
                {
                    name: "Ashdod",
                    population: 224628
                }
            ]
        }
    ];

    var countriesWithCitiesMaxQuantity = getCountriesWithCitiesMaxQuantity(countriesList);
    console.log("Страны с максимальным числом городов:\n");
    countriesWithCitiesMaxQuantity.forEach(function (e) {
        console.log(e.name);
    });

    console.log("\nСтрана/численность по стране:\n");
    var countries = {};
    countriesList.forEach(function (e) {
        countries[e.name] = getTotalPopulation(e);
    });

    for (var name in countries) {
        console.log(name + ": " + countries[name]);
    }
})();