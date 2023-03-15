interface IPerson {
  readonly name: string;
  age: number;
  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}
class Pilot implements IPerson, IPilot {
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }
  private checkAge() {
    if (this.age < 20) {
      throw new Error("Pilot too young");
    }
  }
  greet(phrase: string): void {
    console.log(phrase + this.name);
  }
  flyMessage(): void {
    console.log("Samolet letit");
  }
}

const pilot = new Pilot("Max", 32);
pilot.greet("Hello from cap");
pilot.flyMessage();
