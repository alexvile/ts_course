// class UseStatic {
//   private static count = 0;
//   constructor() {
//     UseStatic.count += 1;
//   }
//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }
class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class Home {
  protected door = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door closed !!");
    }

    this.tenants.push(person);
    console.log("Person inside");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends Home {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }
    return (this.door = true);
  }
}
const key = new Key();
console.log(key);
const person = new Person(key);
console.log(person);
const house = new MyHouse(key);
console.log(house);
house.openDoor(person.getKey());

house.comeIn(person);
