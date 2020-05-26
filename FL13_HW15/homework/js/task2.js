function Vehicle(color, engine) {
  this.maxSpeed = 70;
  this.color = color;
  this.engine = engine;
  this.model = 'unknown model';
  this.isDriving = false;
  this.speed = 0;
  this.start = '';
  this.isStopped = false;
  this.max = 0;
  this.message = `Vehicle is stopped. Maximum speed during the drive was`;
}

Vehicle.prototype.upgradeEngine = function(newEngine, maxSpeed) {
  this.maxSpeed = maxSpeed;
  this.engine = newEngine;

}; 

Vehicle.prototype.getInfo = function() {
  return {
          engine: this.engine,
          color: this.color,
          maxSpeed: this.maxSpeed,
          model: this.model
         };
};

Vehicle.prototype.drive = function() {
  if (this.stopped) {
    return;
  }

  if (this.isDriving) {
    console.log('Already driving');
    return;
  }

  if (this.start.length > 0) {
    console.log(this.start);
  }
  let int = 2000;
  let move = setInterval(() => {
    this.speed += 20;
    console.log(this.speed);
    this.max = this.speed;

    if (this.speed > this.maxSpeed) {
      console.log('speed is too high, SLOW DOWN!');
      let overheat = 30;
      if (this.speed >= this.maxSpeed + overheat && this.start.length > 0) {
        console.log('Engine overheating');
        this.stop();
      }
    }
    
    if (this.isStopped) {
      clearInterval(move);
    }
    
  }, int);
  this.isDriving = true;
};

Vehicle.prototype.stop = function() {

  this.isStopped = true;
  let stopint = 1500;

  let stop = setInterval(() => {
    this.speed -= 20;
    console.log(this.speed);

    if (this.speed <= 0 && this.start.length < 1) {
      console.log(`${this.message} ${this.max}`);
      clearInterval(stop);
    } else if (this.speed <= 0) {
      console.log(`${this.message}`);
      clearInterval(stop);
    }
  }, stopint);
};

function Car(model, color, engine) {
  Vehicle.call(this, color, engine);
  this.maxSpeed = 80;
  this.model = model;
  this.message = `Car ${this.model} is stopped. Maximum speed during the drive was`;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.changeColor = function(newColor) {
  if (this.color !== newColor) {
    this.color = newColor;
  } else {
    console.log('The selected color is the same as the previous,please choose another one');
    
  }
};

function Motorcycle(model, color, engine) {
  Car.call(this, model, color, engine);
  this.maxSpeed = 90;
  this.start = 'Let’s drive';
  this.message = `Motorcycle ${this.model} is stopped. Good drive`;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;



