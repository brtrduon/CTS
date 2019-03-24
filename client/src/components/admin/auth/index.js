import React from 'react'
import { connect } from 'react-redux'
import history from '../../../history'

export default ComposedComponent => {
    class RequireAuth extends React.Component {
        componentDidMount() {
            if (this.props.auth !== 'true') {
                history.push('/admin')
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }


    const mapStateToProps = state => {
        return {
            auth: state.admin.auth
        }
    }

    return connect(mapStateToProps)(RequireAuth)
}