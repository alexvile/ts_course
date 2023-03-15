interface IPerson {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user: IPerson;

user = {
  name: "Max",
  age: 12,
  greet() {
    console.log("Hello." + this.name);
  },
};
