import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Yazilar from "./Yazilar";  // Yazılar sayfası
import YaziDetay from "./YaziDetay";  // Yazı detay sayfası

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* Yazılar sayfası */}
                    <Route exact path="/" component={Yazilar} />

                    {/* Yazı detay sayfası */}
                    <Route path="/yazi/:id" component={YaziDetay} />
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
