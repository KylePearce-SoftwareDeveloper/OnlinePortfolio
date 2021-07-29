import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import Work from './Work';
import Experience from './Experience';
import About from './About';
import Skills from './Skills';
import './App.css';

class App extends Component {

    state = {}

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Router>
                <nav className="navBar">
                    <NavLink className="navButton noUnderline logo" to="/" activeClassName=""><img src="favicon.ico" height="50" width="50"/></NavLink>
                    {/*<NavLink className="navButton noUnderline floatRight resumeButton" to="/Resume" activeClassName="navActive">Resume</NavLink>*/}
                    <a className="navButton noUnderline floatRight resumeButton" href="KylePearce_CV.pdf" target="_blank">Resume</a>
                    <NavLink className="navButton noUnderline floatRight" to="/Contact" activeClassName="navActive"><span className="navNumber">05.</span>Contact</NavLink>
                    <NavLink className="navButton noUnderline floatRight" to="/Work" activeClassName="navActive"><span className="navNumber">04.</span>Work</NavLink>
                    <NavLink className="navButton noUnderline floatRight" to="/Experience" activeClassName="navActive"><span className="navNumber">03.</span>Experience</NavLink>
                    <NavLink className="navButton noUnderline floatRight" to="/Skills" activeClassName="navActive"><span className="navNumber">02.</span>Skills</NavLink>
                    <NavLink className="navButton noUnderline floatRight" to="/About" activeClassName="navActive"><span className="navNumber">01.</span>About</NavLink>
                </nav>
                <main>
                    <Switch>
                        <Route exact path={["/", "/Home"]}>
                            <Home />
                        </Route>
                        <Route exact path="/Resume">
                            <Resume />
                        </Route>
                        <Route exact path="/Contact">
                            <Contact />
                        </Route>
                        <Route exact path="/Work">
                            <Work />
                        </Route>
                        <Route exact path="/Experience">
                            <Experience />
                        </Route>
                        <Route exact path="/Skills">
                            <Skills />
                        </Route>
                        <Route exact path="/About">
                            <About />
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }

}

export default App;