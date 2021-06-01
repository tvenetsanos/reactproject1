import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignUp from "./components/signUp.js"
import FindLove from "./components/findLove.js"
import UserDetails from "./components/dogDetails.js"
import Main from "./main.js"
import Footer from "./components/footer.js"
import Header from "./components/header.js"

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <div>
                        <Switch>
                            <Route 
                                render={(routeProps) => {
                                    return <UserDetails {...routeProps}/>
                                }}
                                path="/userDetails">
                            </Route>
                            <Route path="/findLove">
                                <FindLove />
                            </Route>
                            <Route path="/signUp">
                                <SignUp />
                            </Route>
                            <Route path="/">
                                <Main />
                            </Route>
                        </Switch>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
