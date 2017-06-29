import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

window.onload = () => {
  let appDiv = document.createElement('div')
  appDiv.id = 'app'
  document.body.appendChild(appDiv)

  render(App)

  if (module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
