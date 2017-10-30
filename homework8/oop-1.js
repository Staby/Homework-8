// 1. Реалізувати клас Person і два метода, які виводять привітання і адресу.
function Person(name, adress) {
	this.name = name;
    this.say = function(name) {
    	console.log("Hello my name is " + this.name)

    }
    this.adress = adress;
    this.getAdress = function(adress) {
    console.log("Адрес " + this.adress)

    }
}
var nName = new Person("Igor","Lviv");
nName.say();
nName.getAdress();

// 2. Реалізувати класс Tom, який наслідує Person.
// Наслідування реалізувати через протитипи і метод call;

function Tom(name) {
  // Person.apply(this, arguments);
  Person.call(this, name);
}




 var personTom = new Tom("Tom");


// Person.call(say);

personTom.say(); //Повинно вивести -  Hello my name is Tom

// 3. Дописати клас Car
function Car(engine, type) {
    this.create = function(engine, type) {
        console.log('Created car of type ' + this.type + ' and engine ' + this.engine);
    }
    this.engine = engine;
    this.setEngine = function(engine) {
	console.log(this.engine);
    }
    this.type = type;
    this.setType = function(type) {
	console.log(this.type);
    }
}

Car.prototype = Object.create(Car.prototype);
function Tesla(engine,type) {
  Car.apply(this, arguments);
  }

var Tesla = new Car();
Tesla.engine = "Electric";
Tesla.type = 'Sedan';
Tesla.create();






