import React from "react";
import { connect } from "react-redux";
import { fetchCoin } from "../../actions/fetchCoin"
import CoinDataTable from "../CoinDataTable/index";
import MarketData from "../MarketData/index";
import "./CoinData.css"


class CoinData extends React.Component {

    constructor(props) {

        super(props);
        this.getHeader = this.getHeader.bind(this);
    }

    componentDidMount() {
        const url = window.location.href;
        const uuid = url.split("/").slice(-1)[0];
        // console.log(uuid);
        return this.props.fetchCoin(uuid);
    }

    getHeader() {
        if (this.props.coin.coin === undefined)
            return (
                <div class="ui segment" style={{ width: "50vh", height: "50vh" }}>
                    <div class="ui active dimmer">
                        <div class="ui massive text loader">Loading</div>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            )
        const { name, symbol, iconUrl, websiteUrl, description } = this.props.coin.coin;

        return (
            <div className="coin-data-123" >
                <div className="img-icon">
                    <a href={websiteUrl}> <img src={iconUrl} /></a>

                </div>

                <h1>
                    <a href={websiteUrl} target="_blank">
                        {`${name} (${symbol}) price`}

                    </a>
                </h1>


            </div>

        )
    }

    render() {
        if (this.props.coin.coin === undefined)
            return (
                <div></div>
            )
        const { supply, symbol } = this.props.coin.coin;
        return (
            <div class="coin-data-122">
                {this.getHeader()}
                <h2 class="stat-header">BTC value stats</h2>

                <CoinDataTable supply={supply} symbol={symbol} />
                <MarketData symbol={symbol} />
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.coin);
    return {
        coin: state.coin
    }
}

export default connect(mapStateToProps, {
    fetchCoin
})(CoinData);
