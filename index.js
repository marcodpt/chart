import component from 
  'https://cdn.jsdelivr.net/gh/marcodpt/component@0.0.1/index.js'
import {Chart, registerables} from
  'https://cdn.jsdelivr.net/npm/chart.js@3.3.0/dist/chart.esm.js'
import view from './views/bootstrap5.js'

export default (e, params) => {
  component(e, view)
  setTimeout(() => {
    const dataset = {
      label: 'Data',
      data: [],
      fill: false,
      borderColor: 'black',
      pointStyle: 'circle'
    }

    Chart.register(...registerables)
    new Chart(e.querySelector('canvas').getContext('2d'), {
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
        responsive: true
      }
    })
  }, 50)
}
