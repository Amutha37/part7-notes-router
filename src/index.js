import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
// ReactDOM.render(<App />, document.getElementById('root'))

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import reportWebVitals from './reportWebVitals'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// reportWebVitals()
