// class Vehicle {
//   drive(): void {
//     console.log("chugga chugga");
//   }

//   honk(): void {
//     console.log("beeeeeep");
//   }
// }

// class Car extends Vehicle {
//   drive(): void {
//     console.log("vrooooom");
//   }
// }

// // const vehicle = new Vehicle();
// // vehicle.drive();
// // vehicle.honk();

// const car = new Car();
// car.drive();
// car.honk();

class Vehicle {
  //   color: string;

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  // shortcut
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beeeeeep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vrooooom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "black");
car.startDrivingProcess();
