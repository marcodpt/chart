import chart from './index.js'
import simple from './samples/simple.js'
import complex from './samples/complex.js'
import tiny from './samples/tiny.js'
import docs from './samples/docs.js'

export default {
  title: 'Chart',
  gh: 'https://github.com/marcodpt/chart',
  element: chart,
  samples: {
    tiny: {
      attributes: tiny
    },
    docs: {
      attributes: docs
    },
    simple: {
      attributes: simple
    },
    complex: {
      attributes: complex
    }
  }
}
