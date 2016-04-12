import React from 'react';
import { Provider } from 'react-redux';

export default class Root extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div className='root'>
          <h1>{'LAST TRY!!! Hello World!'}</h1>
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};
