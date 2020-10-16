import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/auth" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes