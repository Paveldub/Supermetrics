import React from 'react'
import './styles/_main.scss'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './Components/PrivateRoutes/PrivateRoutes'
import { Login } from './Pages/Login/Login'
import { Users } from './Pages/Users/Users'

export const App = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={(routeProps) => <Login {...routeProps} />}
        />
        <PrivateRoute
          exact
          path="/posts"
          component={(routeProps) => <Users {...routeProps} />}
        />
      </Switch>
    </>
  )
}
