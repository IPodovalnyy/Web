function object() {
    console.clear();
    var country0 = {
        name: "Russia",
        cities: [
            {
                name: "Saint Petersburg",
                population: "5383890"
            },
            {
                name: "Moscow",
                population: "12615279"
            },
            {
                name: "Novosibirsk",
                population: "1618039"
            },

            {
                name: "Yekaterinburg",
                population: "1515832"
            }]
    };

    var country1 = {
        name: "Finland",
        cities: [
            {
                name: "Helsinki",
                population: "648650"
            },
            {
                name: "Espoo",
                population: "281866"
            }]

    };

    var country2 = {
        name: "Australia",
        cities: [
            {
                name: "Sydney",
                population: "5230330"
            },
            {
                name: "Melbourne",
                population: "4936349"
            },
            {
                name: "Wollongong",
                population: "302739"
            },

            {
                name: "Hobart",
                population: "232606"
            }]
    };

    var country3 = {
        name: "Israel",
        cities: [
            {
                name: "Haifa",
                population: "283640"
            },
            {
                name: "Beersheba",
                population: "209002"
            },
            {
                name: "Ashdod",
                population: "224628"
            }]

    };

    var countries = [country0, country1, country2, country3];

    function getCountriesMaxNumCities(array) {
        var temp = array.slice(0);
        var arrayOut = [];

        temp.sort(function (e1, e2) {
            return e2.cities.length - e1.cities.length;
        });

        var i = 1;
        arrayOut[0] = temp[0];
        while (temp[0].cities.length === temp[i].cities.length) {
            arrayOut[i] = temp[i];
            i++;
        }
        return arrayOut;
    }

    var countriesMaxNumCities = getCountriesMaxNumCities(countries);
    console.log("Страны с максимальным числом городов:\n");
    for (var i = 0; i < countriesMaxNumCities.length; i++) {
        console.log(countriesMaxNumCities[i].name);
    }

    function getTotalPopulation(country) {
        var totalPopulation = 0;
        for (var i = 0; i < country.cities.length; i++) {
            totalPopulation += parseInt(country.cities[i].population);
        }
        return totalPopulation;
    }

    var populationCountry = {};
    for (i = 0; i < countries.length; i++) {
        populationCountry[countries[i].name] = getTotalPopulation(countries[i]);
    }

    console.log("\nСтрана/численность по стране:\n");
    for (var name in populationCountry) {
        console.log(name + ": " + populationCountry[name]);
    }
}