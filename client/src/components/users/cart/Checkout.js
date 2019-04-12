import React from 'react'
import { connect } from 'react-redux'

class Checkout extends React.Component {
    render() {
        return (
            <div>Checkout</div>
        )
    }
}

export default connect()(Checkout)