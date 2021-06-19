import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Coin from "../Coin/index";
import Header from "../Header/index";
import Table from "../Table/index"
import CurrencyFilter from "../CurrencyFilter/index";
import Search from "../Search/index";
import "./App.css"



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyUUID: "yhjMzLPhuIDl",
            sign: "$"
        }
        this.currencyChanged = this.currencyChanged.bind(this);
    }

    currencyChanged(newCurrencyUuid, sign) {

        this.setState(() => {
            return { currencyUUID: newCurrencyUuid, sign: sign }
        });
    }

    render() {
        let url = window.location.href;
        const uuid = url.split("/").slice(-1)[0];
        return (
            <div className="App">
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route exact path={`/coin/${uuid}`}>
                            <Coin />
                        </Route>

                        <Route exact path="/">

                            <Search />
                            <CurrencyFilter onCurrencyChange={this.currencyChanged} />
                            <Table currencyUUID={this.state.currencyUUID} sign={this.state.sign} />
                        </Route>

                    </Switch>
                </BrowserRouter>


            </div>
        )
    }


}

export default App;