class House {
  private tenants: string[] = [];
  constructor(protected street: string, public readonly type: string) {}
  public showAddress(this: House): void {
    console.log("Address " + this.street);
  }
  public showType(this: House): void {
    console.log("Type " + this.type);
  }
  public addTenant(name: string) {
    this.tenants.push(name);
  }
  public showTenants(): void {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chargeOfTheHouse: string;
  constructor(street: string, general: string) {
    super(street, "stone");
    this.chargeOfTheHouse = general;
  }
  public showAddress(): void {
    console.log("Address " + this.street);
  }
  public showTenants() {
    console.log("General: " + this.chargeOfTheHouse);
    super.showTenants();
  }
}
const stoneHouse = new StoneHouse("green walley", "Max");
stoneHouse.addTenant("Anton");
stoneHouse.addTenant("Jake");
console.log(stoneHouse);
stoneHouse.showTenants();
stoneHouse.showAddress();
