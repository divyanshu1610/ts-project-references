import { logger } from '../common'

import Coffee, { CoffeeType } from '../coffee';

logger.info('Hello 👋 Welcome to coffee shop 🛍️ ')


logger.info('Brewing you some random coffee..☕')
// make a random coffee
logger.log(Coffee.brewRandomCoffee());


const name:string = 'Divyanshu'
logger.info('Brewing you a Cappuccino....☕')
const coffee = new Coffee(CoffeeType.CAPPUCCINO, name);
logger.log(coffee.brew());