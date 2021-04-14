const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артём",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFamaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Вера",
            "id_2": "Надежда",
            "id_3": "Любовь",
            "id_4": "Мария",
            "id_5": "Ольга",
            "id_6": "Кира",
            "id_7": "Светлана",
            "id_8": "Наталья",
            "id_9": "Ирина",
            "id_10": "Селена"
        }
    }`,

    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артёмов",
            "id_5": "Дмитриев",
            "id_6": "Никитов",
            "id_7": "Михайлов",
            "id_8": "Даниилов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,

    famaleProfessionJson: `{
        "count": 10,
        "list": {     
            "id_1": "учительница",
            "id_2": "медсестра",
            "id_3": "бухгалтер",
            "id_4": "гувернантка",
            "id_5": "стюардесса",
            "id_6": "секретарша",
            "id_7": "домохозяйка",
            "id_8": "хореограф",
            "id_9": "web-разработчица",
            "id_10": "куртизанка"
        }
    }`,

    maleProfessionJson: `{
        "count": 10,
        "list": {     
            "id_1": "шахтёр",
            "id_2": "медбрат",
            "id_3": "боксёр",
            "id_4": "китаец",
            "id_5": "писатель",
            "id_6": "военный",
            "id_7": "художник",
            "id_8": "музыкант",
            "id_9": "сварщик",
            "id_10": "хулиган"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    randomMonth: function () {
        const obj = JSON.parse(this.monthJson);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return this.randomIntNumber(this.Day(obj.list[prop]), 1) + " " + obj.list[prop];
    },

    Day: function (month) {
        if (month === "февраля") {
            if (((this.person.birthYear % 4 == 0) && (this.person.birthYear % 100 != 0)) || (this.person.birthYear % 400 == 0)) {
                return 29
            } else {
                return 28
            }
        } else if (month === "апреля" || "июня" || "сентября" || "ноября") {
            return 30
        } else {
            return 31
        }
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        return gender = this.randomIntNumber(1, 0) === 1 ? "мужской" : "женский";
    },

    randomFirstName: function(gender) {
        if (gender === "мужской") {
            return this.randomValue(this.firstNameMaleJson);
          } else {
            return this.randomValue(this.firstNameFamaleJson);
          }
    },

    randomMiddleName: function(gender) {
        if (gender === "мужской") {
            return this.randomValue(this.middleNameJson) + 'ич';
          } else {
            return this.randomValue(this.middleNameJson) + 'на';
          }
    },

    randomSurname: function(gender) {
        if (gender === "мужской") {
            return this.randomValue(this.surnameJson);
          } else {
            return this.randomValue(this.surnameJson) + 'a';
          }
    },

    randomProfession: function(gender) {
        if (gender === "мужской") {
            return this.randomValue(this.maleProfessionJson);
          } else {
            return this.randomValue(this.famaleProfessionJson);
          }
    },

  
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        this.person.Surname = this.randomSurname(this.person.gender);
        this.person.birthYear = this.randomIntNumber(2021, 1903); // учитывая возраст Канэ Танака
        this.person.birthDayMonth = this.randomMonth();
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};