import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Switch, Route } from 'react-router-dom'

import Nav from '../Nav'

import Home from '../Home'
import About from '../About'
import Recommendations from '../Recommendations'
import Portfolio from '../Portfolio'
import Contact from '../Contact'

const App = () => (
  <div>
    <Nav />
    <main>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/recommendations" component={Recommendations} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </main>
  </div>
)

export default App
