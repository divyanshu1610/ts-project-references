import { randomGen } from '../common'

// types of coffee
export enum CoffeeType {
  CAPPUCCINO = "Cappuccino",
  MOCHACCINO = "Mochaccino",
  LATTE = "Latte",
}


export default class Coffee {
  static coffees: CoffeeType[] = [
    CoffeeType.CAPPUCCINO,
    CoffeeType.MOCHACCINO,
    CoffeeType.LATTE,
  ];
  private readonly type: CoffeeType
  private name:string | null
  constructor(type: CoffeeType, name?:string) {
    this.type = type
    this.name = name || null
  }

  brew(): string {
    return `Here's a ${this.type} ☕ ${ this.name ?  'for '+this.name : ''}`
  }

  static brewRandomCoffee(name: string | null = null) {
    const randomNum = randomGen(Coffee.coffees.length)
    const coffee = new Coffee(Coffee.coffees[randomNum], name);
    return coffee.brew();
  }

 }
