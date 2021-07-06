import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'
import Home from './Pages/Home/Home'
import Survey from './Pages/Survey/Survey'
import Header from './components/Header'
import reportWebVitals from './reportWebVitals'
import Error from './components/Error'
import Results from './Pages/Results/Results'
import Freelances from './Pages/Freelances/Freelances'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
