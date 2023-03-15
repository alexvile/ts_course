// class UseStatic {
//   private static count = 0;
//   constructor() {
//     UseStatic.count += 1;
//   }
//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): string;
}

class Meize extends Plane {
  public startEngine(): string {
    return "ta-ta-ta";
  }
}

class Boeing extends Plane {
  public startEngine(): string {
    return "wuuuu";
  }
}

const meize = new Meize();
const boening = new Boeing();

// meize.sitInPlane();
// boening.sitInPlane();

console.log(meize.startEngine());
console.log(boening.startEngine());
