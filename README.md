# chart
> A chart [component](https://github.com/marcodpt/component/) based on
[chart.js](https://www.chartjs.org/)

[Live demo](https://marcodpt.github.io/component/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fchart%2Fsample.js)

## Usage
```js
import chart from 'https://cdn.jsdelivr.net/gh/marcodpt/chart/index.js'

chart(document.getElementById('simpleChart'), {
  X: ['Jan', 'Fev', 'Mar'],
  Y: [1.5, 3.0, 4.5]
})

chart(document.getElementById('complexChart'), {
  X: ['Jan', 'Fev', 'Mar'],
  Y: [
    {
      data: [1.5, 3.0, 4.5],
      borderColor: 'blue',
      label: 'Sells ($)'
    }, {
      data: [2.5, 3.0, 2.5],
      borderColor: 'red',
      label: 'Expenses ($)'
    }
  ]
})

```

## Params
 - array `X`: labels of X axis
 - array `Y`: items can be just axis Y values or a object with the following
props:
   - array `data`: axis Y values of this line
   - string `borderColor`: color of line
   - string `label`: the chart label of this line
