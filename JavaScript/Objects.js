(function () {
    var country0 = {
        name: "Russia",
        cities: [
            {
                name: "Saint Petersburg",
                population: "5 383 890"
            },
            {
                name: "Moscow",
                population: "12 615 279"
            },
            {
                name: "Novosibirsk",
                population: "1 618 039"
            },

            {
                name: "Yekaterinburg",
                population: "1 515 832"
            }]
    };

    var country1 = {
        name: "Finland",
        cities: [
            {
                name: "Helsinki",
                population: "648 650"
            },
            {
                name: "Espoo",
                population: "281 866"
            }]

    };

    var country2 = {
        name: "Australia",
        cities: [
            {
                name: "Sydney",
                population: "5 230 330"
            },
            {
                name: "Melbourne",
                population: "4 936 349"
            },
            {
                name: "Wollongong",
                population: "302 739"
            },

            {
                name: "Hobart",
                population: "232 606"
            }]
    };

    var country3 = {
        name: "Israel",
        cities: [
            {
                name: "Haifa",
                population: "283 640"
            },
            {
                name: "Beersheba",
                population: "209 002"
            },
            {
                name: "Ashdod",
                population: "224 628"
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
    for(var i = 0; i < countriesMaxNumCities.length; i++) {
        console.log(countriesMaxNumCities[i].name);
    }

})();