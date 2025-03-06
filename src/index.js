import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import BlogsOut from './views/blogs-out'
import FindVolunteersIn from './views/find-volunteers-in'
import OpportunitiesOut from './views/opportunities-out'
import OpportunitiesIn from './views/opportunities-in'
import OrgSignUp from './views/org-sign-up'
import DashboardVolunteerIn from './views/dashboard-volunteer-in'
import AboutUsOut from './views/about-us-out'
import AboutUsInOrg from './views/about-us-in-org'
import Home from './views/home'
import CreateAccount from './views/create-account'
import AboutUsIn from './views/about-us-in'
import BlogsIn from './views/blogs-in'
import TermsandPoliciesIn from './views/termsand-policies-in'
import VolunteerSignUp from './views/volunteer-sign-up'
import FindVolunteersOut from './views/find-volunteers-out'
import BlogsInOrg from './views/blogs-in-org'
import OpportunitiesInorg from './views/opportunities-inorg'
import Role from './views/role'
import Homeinorg from './views/homeinorg'
import CreateListing from './views/create-listing'
import Homein from './views/homein'
import SignIn from './views/sign-in'
import FindVolunteersInOrg from './views/find-volunteers-in-org'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={BlogsOut} exact path="/blogs-out" />
        <Route component={FindVolunteersIn} exact path="/find-volunteers-in" />
        <Route component={OpportunitiesOut} exact path="/opportunities-out" />
        <Route component={OpportunitiesIn} exact path="/opportunities-in" />
        <Route component={OrgSignUp} exact path="/org-sign-up" />
        <Route
          component={DashboardVolunteerIn}
          exact
          path="/dashboard-volunteer-in"
        />
        <Route component={AboutUsOut} exact path="/about-us-out" />
        <Route component={AboutUsInOrg} exact path="/about-us-in-org" />
        <Route component={Home} exact path="/" />
        <Route component={CreateAccount} exact path="/create-account" />
        <Route component={AboutUsIn} exact path="/about-us-in" />
        <Route component={BlogsIn} exact path="/blogs-in" />
        <Route
          component={TermsandPoliciesIn}
          exact
          path="/termsand-policies-in"
        />
        <Route component={VolunteerSignUp} exact path="/volunteer-sign-up" />
        <Route
          component={FindVolunteersOut}
          exact
          path="/find-volunteers-out"
        />
        <Route component={BlogsInOrg} exact path="/blogs-in-org" />
        <Route
          component={OpportunitiesInorg}
          exact
          path="/opportunities-inorg"
        />
        <Route component={Role} exact path="/role" />
        <Route component={Homeinorg} exact path="/homeinorg" />
        <Route component={CreateListing} exact path="/create-listing" />
        <Route component={Homein} exact path="/homein" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route
          component={FindVolunteersInOrg}
          exact
          path="/find-volunteers-in-org"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
