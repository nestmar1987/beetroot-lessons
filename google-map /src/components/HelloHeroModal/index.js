import types from 'prop-types';
import React from 'react';

import { Modal } from '../Modal';

// Styles

import './styles.scss';

// ----------------

export class HelloHeroModal extends React.Component {
  // Type of props

  static propTypes = {
    prop: types.string,
  };

  // Default value for props

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello',
    };

    this.changeTextHandler = this.changeTextHandler.bind(this);
  }

  // Custom methods

  changeTextHandler() {
    this.setState(
      prevState => ({
        text: `${prevState.text} Beetroot!`,
      }),
      () => console.log('text --->', this.state.text),
    );
  }

  // Render

  render() {
    const { isOpen, onClose, data } = this.props;
    const { text } = this.state;

    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Hello Beetroot guys!">
        <p>{text}</p>

        <button onClick={this.changeTextHandler}>Change Text</button>

        <p>{`ID ${data.id}`}</p>
        <p>{`Last name ${data.lastName}`}</p>
      </Modal>
    );
  }
}
