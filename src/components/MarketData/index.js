import React from "react";
import { connect } from "react-redux";
import { fetchCoinMarkets } from "../../actions/fetchCoinMarkets.js"
import "./marketData.css"

class MarketData extends React.Component {

    constructor(props) {
        super(props);
        this.getMarketTable = this.getMarketTable.bind(this);
    }

    componentDidMount() {
        const url = window.location.href;
        const uuid = url.split("/").slice(-1)[0];
        return this.props.fetchCoinMarkets(uuid);
    }

    getMarketTable() {
        if (this.props.coinMarkets.coinMarkets === undefined)
            return <div></div>
        const { markets } = this.props.coinMarkets.coinMarkets;
        //console.log(markets)
        return (
            <table>

                <tbody className="md11tbody">
                    {markets.map((market, index) => {
                        if (index > 5)
                            return;
                        const iconUrl = market.exchange.iconUrl;
                        return (
                            <tr className="md12tr">
                                <td className="md45td count">{index + 1}</td>
                                <td className="md45td">
                                    <img src={iconUrl} id="md47icon" style={{ width: "50px", height: "50px" }} />
                                    <span id="market-symbol">{market.base.symbol}/{market.quote.symbol}</span>
                                    <span id="exchange-name">{market.exchange.name}</span>
                                </td>
                                <td className="md45td price">
                                    <span id="price" >
                                        $ {Math.round(market.price * 100) / 100}
                                    </span>
                                </td>
                            </tr>
                        )
                    })
                    }


                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div class="cd10markettableouter">
                <h2 className="md78header">Top {this.props.symbol} Markets</h2>
                { this.getMarketTable()}

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        coinMarkets: state.coinMarkets
    }
}

export default connect(mapStateToProps, {
    fetchCoinMarkets
})(MarketData);