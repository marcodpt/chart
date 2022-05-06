import {html} from '../dependencies.js'

export default () => html(({
  div, canvas
}) => div({
  class: 'w-100'
}, [
  div({
    class: 'p-5 h-100'
  }, [
    div({
      class: 'card mb-3 h-100'
    }, [
      canvas({
        class: 'h-100 w-100 m-auto'
      })
    ])
  ])
]))
