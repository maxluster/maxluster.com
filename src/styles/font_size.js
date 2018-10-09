import modularScale from 'modularscale-js'

const config = {
  base: [1],
  ratio: 1.618,
}

const fontSize = value => {
  return modularScale(value, config)
}

export default fontSize
