import React from 'react'
import { connect } from 'react-redux'
import history from '../../../history'

export default ComposedComponent => {
    class RequireAuth extends React.Component {
        componentWillMount() {
            if (!this.props.auth || this.props.auth === false) {
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