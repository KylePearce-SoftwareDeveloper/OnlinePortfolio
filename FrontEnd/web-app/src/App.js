import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom';
import Home from './Home';

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
                <NavLink className="" to="/" activeClassName="">Home</NavLink>
                <main>
                    <Switch>
                        <Route exact path={["/", "/Home"]}>
                            <Home />
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }

}

export default App;