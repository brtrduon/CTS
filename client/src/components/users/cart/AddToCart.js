import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../../actions/UserActions'

class AddToCart extends React.Component {
    componentDidMount() {
        let user = localStorage._id
        this.props.addToCart(this.props.match.params.id, user)
    }

    render() {
        if (!this.props.item) {
            return <div>Adding item to cart...</div>
        }

        return null
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.item[ownProps.match.params.id]
    }
}

export default connect(
    mapStateToProps,
    { addToCart }
)(AddToCart)