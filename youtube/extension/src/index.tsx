import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const topLevel = document.getElementById('top-level-buttons')

const app = document.createElement('div')

app.id = 'root'

if (topLevel) topLevel.prepend(app)
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
