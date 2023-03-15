class House {
  private tenants: string[] = [];
  constructor(private street: string, public readonly type: string) {}
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
    super("stone", street);
    this.chargeOfTheHouse = general;
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
