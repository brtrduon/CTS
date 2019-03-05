import React from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Auth extends React.Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
    // we need to put 'state.auth.authenticated' b/c we have an auth_reducer that produces the 'auth' piece of state
  }

  return connect(mapStateToProps)(Auth);
}