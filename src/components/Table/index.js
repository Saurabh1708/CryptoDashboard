import React from "react";
import { connect } from "react-redux";
import { fetchAllCoins } from "../../actions/fetchAllCoins"
import "./Table.css"
class Table extends React.Component {

    componentDidMount() {
        console.log(this.props.currencyUUID);
        return this.props.fetchAllCoins(this.props.currencyUUID);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currencyUUID !== prevProps.currencyUUID) {
            return this.props.fetchAllCoins(this.props.currencyUUID);

        }
    }



    renderTable() {

        if (this.props.coins.allCoins === undefined) {
            return (<div class="ui segment" style={{ margin: "auto", width: "50vh", height: "50vh" }}>
                <div class="ui active dimmer">
                    <div class="ui massive text loader">Loading</div>
                </div>
                <p></p>
                <p></p>
                <p></p>
            </div>)
        }
        const priceSort = document.getElementById("price-sort").checked;
        const marketcapSort = document.getElementById("marketcap-sort").checked;
        const btcSort = document.getElementById("BTC-sort").checked;

        const coins = this.props.coins.allCoins
        if (priceSort) {
            coins.sort((coinA, coinB) => {
                return coinB.price - coinA.price;
            })
        }

        if (marketcapSort) {
            coins.sort((coinA, coinB) => {
                return coinA.marketCap - coinB.marketCap;
            })
        }
        if (btcSort) {
            coins.sort((coinA, coinB) => {
                return coinB.btcPrice - coinA.btcPrice;
            })
        }
        console.log(typeof (coins));
        return coins.map(coin => {
            let { uuid, name, price, marketCap, btcPrice, iconUrl } = coin;
            price = Math.round(coin.price * 100) / 100;
            marketCap = Math.round(((Math.round(marketCap * 100) / 100) / 1e9) * 100) / 100;
            btcPrice = Math.round(btcPrice * 10000) / 10000;
            return (
                <tr className="data-table-row" key={uuid} >
                    <td className="data-table-entry">
                        <span style={{ marginRight: "10px" }}>
                            <a href={`/coin/${uuid}`}>  <img src={iconUrl} style={{ width: "40px", height: "40px" }} /> </a>
                        </span>
                    </td>
                    <td className="data-table-entry">
                        <a href={`/coin/${uuid}`}>   {name}</a>
                    </td>
                    <td className="data-table-entry">{this.props.sign} {price} </td>
                    <td className="data-table-entry">{marketCap}  Billion</td>
                    <td className="data-table-entry">{btcPrice}  </td>
                </tr>)
        })
    }

    priceSort() {
        return this.props.fetchAllCoins();
    }
    marketCapSort() {
        return this.props.fetchAllCoins();
    }
    btcSort() {
        return this.props.fetchAllCoins();
    }

    render() {
        return (
            <div className="Table-cover">
                <table>
                    <thead>
                        <th className="data-table-header">Symbol</th>

                        <th className="data-table-header">Cryptocurrency</th>
                        <th className="data-table-header">
                            <label class="switch">
                                <input type="checkbox" id="price-sort" style={{ display: "none" }} />
                                <span className="slider">Price</span>
                                <span style={{ marginLeft: "10px" }} onClick={() => { this.priceSort() }}><i class="fas fa-sort"></i></span>

                            </label>

                        </th>

                        <th class="data-table-header"> <label class="switch">
                            <input type="checkbox" id="marketcap-sort" style={{ display: "none" }} />
                            <span className="slider">Market Cap</span>
                            <span style={{ marginLeft: "10px" }} onClick={() => { this.marketCapSort() }} ><i class="fas fa-sort"></i></span>
                        </label></th>
                        <th class="data-table-header"> <label class="switch">
                            <input type="checkbox" id="BTC-sort" style={{ display: "none" }} />
                            <span className="slider">BTC</span>
                            <span style={{ marginLeft: "10px" }} onClick={() => { this.btcSort() }}><i class="fas fa-sort"></i></span>

                        </label></th>

                    </thead>
                    <tbody>
                        {this.renderTable()}

                    </tbody>

                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // Here the props is mapped to the reducer we are talking to
        coins: state.allCoins
    }
}

export default connect(mapStateToProps, {
    fetchAllCoins
})(Table);