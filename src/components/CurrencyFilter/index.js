import React from "react";
import { connect } from "react-redux";
import { fetchCurrency } from "../../actions/fetchCurrency"
import "./currencyFilter.css";
class CurrencyFilter extends React.Component {

    componentDidMount() {
        return this.props.fetchCurrency();
    }

    renderCurrencies() {
        const obj = this.props.currencies.currencies;
        if (obj === undefined)
            return <option></option>
        return (
            obj.map((currency) => {
                const { symbol, name } = currency;
                const val = `${symbol}-${name}`
                return (
                    <option className="active item" value={val} key={currency.uuid} id={currency.uuid} >{val}</option>

                )
            })

        )
    }
    changeCurrency() {
        const list = document.getElementById("currency-selector");
        const newCurrencyUuid = list[list.selectedIndex].id;
        const arr = this.props.currencies.currencies;
        for (let c of arr) {
            if (c.uuid === newCurrencyUuid)
                return this.props.onCurrencyChange(newCurrencyUuid, c.sign)
        }

    }

    render() {
        return (
            <div className="cf122searchcategories">
                <div className="cf43select" style={{ height: "100%" }} >
                    <select id="currency-selector" onChange={(e) => { this.changeCurrency() }}>
                        {this.renderCurrencies()}
                    </select>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.currencies);
    return {
        currencies: state.currencies
    }
}

export default connect(mapStateToProps, {
    fetchCurrency
})(CurrencyFilter);