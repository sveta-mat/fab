console.log(test);
asd();

let asdas = "asd";
var test = "asdasd";

async function asds() {
  setTimeout(() => ({}), 2990);
}

async function asd() {
  const data = await asds();
}

class AutoFactory {
  constructor(color, engine, model) {
    this.color = color;
    this.engine = engine;
    this.model = model;
  }

  start() {
    console.log("Car started");
  }

  stop() {
    console.log("Car is stoped");
  }

  getInfoCar() {
    console.log(this.color, this.engine, this.model);
  }
}

const car1 = new AutoFactory("red", 2.4, "mercedes");
const car2 = new AutoFactory("white", 3.2, "opel");

// car1. = 'asdasd'

class Person {
  constructor(age, name, isMarried) {
    this.age = age;
    this.name = name;
    this.isMarried = isMarried;
  }

  getUserInfo() {
    return this.name + this.age;
  }
}

class Workerss extends Person {
  methodY() {
    return this.age;
  }
}

const woker = new Workerss(123, "asd", true);
woker.
woker.console.log(car1.getInfoCar());
console.log(car2.getInfoCar());
