import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser, addUserThunk, addUserAsync } from './../Actions/action';

const propTypes = {
  userName: PropTypes.string.isRequired,
};

class Main extends React.Component {
  static propTypes = propTypes;

  onClick = () => {
    const { dispatch } = this.props;
    dispatch(addUserAsync(this.user.value));
  };

  render() {
    const { userName } = this.props;
    return (
      <div>
        <div>Welcome {userName}</div>
        <span>User Name:</span>
        <input type="text" ref={node => this.user = node} />
        <button onClick={this.onClick}>OK</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userName } = state.user;
  return { userName };
};

export default connect(mapStateToProps)(Main);
