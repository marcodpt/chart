import {app} from 'https://cdn.jsdelivr.net/npm/hyperapp@2.0.18/index.min.js'
import {Chart, registerables} from
  'https://cdn.jsdelivr.net/npm/chart.js@3.3.0/dist/chart.esm.js'
import view from './views/bootstrap5.js'

export default (e, params) => {
  app({
    view: view,
    node: e
  })
  setTimeout(() => {
    const dataset = {
      label: 'Data',
      data: [],
      fill: false,
      borderColor: 'black',
      pointStyle: 'circle'
    }

    const el = e.querySelector('canvas')
    Chart.register(...registerables)
    new Chart(el.getContext('2d'), {
      type: 'line',
      data: {
        labels: params.X,
        datasets: typeof params.Y[0] == 'object' ? params.Y.map(set => ({
          ...dataset,
          ...set
        })) : [{
          ...dataset,
          data: params.Y
        }]
      },
      options: {
        responsive: false
      }
    })
  }, 50)
}
