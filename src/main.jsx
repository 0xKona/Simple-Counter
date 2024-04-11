import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(validName) => isPropValid(validName)}>
      <Provider store={store}>
        <App />
      </Provider>
    </StyleSheetManager>
  </React.StrictMode>,
)
