# chart
> A hyperapp component based on chart.js

[Live example](https://marcodpt.github.io/chart/)

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
