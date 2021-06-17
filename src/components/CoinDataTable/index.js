import React from "react";
import { connect } from "react-redux";
import "./coinDataTable.css";
import { fetchCoin } from "../../actions/fetchCoin"
class CoinDataTable extends React.Component {

    constructor(props) {
        super(props);
        this.getTable = this.getTable.bind(this);

    }

    getTable() {
        if (this.props.coin.coin === undefined)
            return <div></div>
        const { allTimeHigh, price, rank, description, btcPrice, symbol } = this.props.coin.coin;
        const { circulating, total } = this.props.supply;
        return (

            <table class="stats-table">
                <tbody>

                    <tr class="stats-item">
                        <td class="stats-icon">
                            <i class="fa fa-bar-chart"></i>
                        </td>
                        <th class="stats-item-header">Rank</th>
                        <td>
                            {rank}
                        </td>
                    </tr>
                    <tr class="stats-item">
                        <td class="stats-icon">
                            <i class="fas fa-heart"></i>
                        </td>
                        <th class="stats-item-header">All Time High</th>
                        <td class="cdt49td">
                            $ {Math.round(100 * allTimeHigh.price) / 100}
                        </td>
                    </tr>
                    <tr class="stats-item">
                        <td class="stats-icon">
                            <i class="fa fa-usd"></i>
                        </td>
                        <th class="stats-item-header">Price</th>
                        <td>
                            $ {Math.round(price * 100) / 100}
                        </td>
                    </tr>
                    <tr class="stats-item">
                        <td class="stats-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="black" stroke="black" class=""><circle cx="11.5" cy="11.5" r="10.5" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none"></circle><path d="M16.16,10.12c.2-1.34-.82-2.06-2.21-2.54l.45-1.81-1.1-.28-.44,1.77L12,7.05l.44-1.78L11.32,5l-.45,1.81L8.64,6.26,8.35,7.44s.82.19.8.2a.57.57,0,0,1,.51.64l-1.23,5a.4.4,0,0,1-.51.26s-.8-.2-.8-.2l-.55,1.27,2.22.56L8.34,17l1.1.28.45-1.82.88.23-.45,1.81,1.1.27.46-1.83c1.88.36,3.29.21,3.89-1.49a1.93,1.93,0,0,0-1-2.67,1.76,1.76,0,0,0,1.41-1.62m-2.52,3.53c-.34,1.37-2.64.63-3.39.44l.6-2.42c.75.18,3.15.55,2.79,2M14,10.1c-.31,1.24-2.23.61-2.85.46l.55-2.21c.62.16,2.63.45,2.3,1.75" stroke="none"></path></svg>
                        </td>
                        <th class="stats-item-header">Price-to-BTC</th>
                        <td>
                            {btcPrice}
                        </td>
                    </tr>
                    <tr class="stats-item">
                        <td class="stats-icon">
                            <i class="fa fa-bar-chart"></i>
                        </td>
                        <th class="stats-item-header">Circulating Supply</th>
                        <td>
                            {Math.round((circulating / 1e6) * 100) / 100} Million {symbol}
                        </td>
                    </tr>
                    <tr class="stats-item">
                        <td class="stats-icon">
                            <i class="fa fa-bar-chart"></i>
                        </td>
                        <th class="stats-item-header">Total Supply</th>
                        <td>
                            {Math.round((total / 1e6) * 100) / 100} Million {symbol}
                        </td>
                    </tr>
                </tbody>
            </table >
        )

    }

    render() {
        return (
            this.getTable()

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        coin: state.coin
    }
}

export default connect(mapStateToProps, {
    fetchCoin
})(CoinDataTable);