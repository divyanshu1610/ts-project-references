import { logger } from '../common'

import Coffee from '../coffee';

logger.info('Hello 👋 Welcome to coffee shop 🛍️ ')


logger.info('Brewing you some random coffee..')
// make a random coffee
logger.log(Coffee.brewRandomCoffee());