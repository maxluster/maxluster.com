import modularScale from 'modularscale-js'

const config = {
  base: [0.1, 0.3],
  ratio: 2,
}

const space = value => {
  return modularScale(value, config)
}

export default space
