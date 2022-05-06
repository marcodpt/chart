import {Chart, registerables} from './dependencies.js'
import view from './views/bootstrap5.js'

export default ({
  X,
  Y,
  options,
  type = 'line'
}) => {
  const e = view()
  const dataset = {
    label: 'Data',
    data: [],
    fill: false,
    borderColor: 'black',
    pointStyle: 'circle'
  }

  Chart.register(...registerables)
  new Chart(e.querySelector('canvas').getContext('2d'), {
    type: type,
    data: {
      labels: X,
      datasets: typeof Y[0] == 'object' ? Y.map(set => ({
        ...dataset,
        ...set
      })) : [{
        ...dataset,
        data: Y
      }]
    },
    options: {
      responsive: true,
      ...(options || {})
    }
  })

  return e
}
