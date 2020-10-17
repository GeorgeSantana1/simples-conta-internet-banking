import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/auth" component={Login} />
        <Route path="/app" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes