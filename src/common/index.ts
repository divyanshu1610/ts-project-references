function log(...args: Array<string>) {
  console.log(...args)
}


// logs some info message 
function info(param: string) {
  console.info(`[INFO]: ${param}`)
}

/**
 * @param {number} lim  specify the range in which random number is to be generated [0, lim-1]
 * @returns {number} a random number between  0 and lim-1 (all inclusive)
 */
export function randomGen(lim: number = 100): number {
  return Math.round(Math.random() * 10) % lim
}

export const logger = { log, info }
