import modularScale from 'modularscale-js'

const config = {
  base: [14],
  ratio: 1.618,
}

const ms = value => {
  return modularScale(value, config)
}

export default ms
