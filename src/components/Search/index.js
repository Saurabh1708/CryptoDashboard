import React from "react";
import "./Search.css"
import axios from "axios";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.getCoins = this.getCoins.bind(this);
        this.state = {
            suggestions: {},
        }
        this.debounce = this.debounce.bind(this);
        // this.searchOnChange = this.searchOnChange.bind(this);
    }
    getCoins(searchTerm) {
        //const searchTerm = document.getElementsByClassName("prompt").value;
        console.log(searchTerm);
        const getSuggestions = async () => {
            const response = await axios.get("https://api.coinranking.com/v2/search-suggestions", {
                params: {
                    query: searchTerm
                }
            });
            //console.log(response.data.data);
            this.setState(() => {
                return { suggestions: response.data.data }
            })

        };
        getSuggestions();
    }

    /*  searchOnChange = this.debounce(() => {
          this.getCoins();
      }, 1000)
  */
    debounce(fn, time) {

        let timeoutId
        return function wrapper(...args) {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                timeoutId = null
                fn(...args)
            }, time)
        }
    }


    getCoinsList() {
        const coins = this.state.suggestions.coins;
        //console.log(coins);
        if (coins === undefined)
            return <div className="coins-block"></div>
        const style = { width: "6vh", height: "6vh" };

        return (
            coins.map((coin) => {
                const { uuid, iconUrl, name, symbol } = coin;
                return (
                    <li>
                        <a href={`/coin/${uuid}`}>
                            <span><img src={iconUrl} style={{ width: "10px", height: "10px" }}></img></span>
                            {name}

                        </a>
                    </li>

                )

            })


        )

    }

    getMarketsList() {
        const markets = this.state.suggestions.markets;
        if (markets === undefined)
            return <div className="markets-block"></div>
        const style = { width: "5vh", height: "5vh" };
        return (
            <div className="markets-block">
                <select>
                    {markets.map((market) => {
                        const { iconUrl, name } = market;
                        return (
                            <option>
                                <img src={iconUrl} style={style} />
                                <span>{name}</span>

                            </option>
                        )
                    })}
                </select>
            </div>
        )

    }
    getExchangesList() {
        const exchanges = this.state.suggestions.exchanges;
        if (exchanges === undefined)
            return <div className="exchanges-block"></div>
        const style = { width: "5vh", height: "5vh" };

        return (
            <div className="exchanges-block">
                <select>
                    {exchanges.map((market) => {
                        const { uuid, exchangeIconUrl, exchangeName, baseSymbol } = market;
                        return (
                            <option>
                                <img src={exchangeIconUrl} style={style} />
                                <span>{exchangeName}</span>
                                <span>{baseSymbol}</span>

                            </option>
                        )
                    })}
                </select>
            </div>
        )

    }

    render() {

        return (

            <div class="ui category search">
                <div class="ui icon input">
                    <input class="prompt" type="text" placeholder="Search crypto..." onKeyUp={(e) => { this.debounce(this.getCoins, 1000)(e.target.value) }} />
                    <i class="search icon"></i>
                </div>
                <ul>
                    {this.getCoinsList()}

                </ul>

            </div>

        )
    }
}

export default Search;

/*
 {this.getMarketsList()}
                {this.getExchangesList()}
*/