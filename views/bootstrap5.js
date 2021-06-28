import {h} from 'https://cdn.jsdelivr.net/npm/hyperapp@2.0.18/index.min.js'

export default () =>
  h('div', {
    class: 'w-100'
  }, [
    h('div', {
      class: 'p-5 h-100'
    }, [
      h('div', {
        class: 'card mb-3 h-100'
      }, [
        h('canvas', {
          class: 'h-100 w-100 m-auto'
        })
      ])
    ])
  ])
