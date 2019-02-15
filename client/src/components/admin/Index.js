import React from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../actions'

class Index extends React.Component {
    componentDidMount() {
        this.props.getItems()
    }

    render(){
        return (
            <div>Admin Index</div>
        )
    }
}

export default connect(null, { getItems })(Index)