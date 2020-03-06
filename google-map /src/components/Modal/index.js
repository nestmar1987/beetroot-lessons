import classNames from 'classnames';
import ReactDOM from 'react-dom';
import types from 'prop-types';
import React from 'react';

import { FontIcon } from '../FontIcon';

// Styles

import './styles.scss';

// ----------------

export class Modal extends React.Component {
  // Type of props

  static propTypes = {
    children: types.node.isRequired,
    onClose: types.func,
    isOpen: types.bool.isRequired,
    title: types.string,
  };

  // Default value for props

  static defaultProps = {};

  // Data

  element = null;

  // Lifecycle methods

  componentDidMount() {
    this.element = document.getElementById('root');

    document.body.setAttribute('class', 'overflow-hidden');
    this.element.setAttribute('class', 'with-blur');

    // document.addEventListener('keydown', e => {
    //   if (e.keyCode === 27) {
    //     this.props.onClose();
    //   }
    // });
  }

  componentWillUnmount() {
    // document.removeEventListener('keydown');

    document.body.removeAttribute('class');
    this.element.removeAttribute('class');
  }

  // Custom methods

  enhancedClose = e => {
    e.stopPropagation();
    this.props.onClose();
  };

  // Render

  render() {
    const { children, isOpen, title } = this.props;

    // Modify styles

    const modify = classNames({
      modal: true,
      'modal--is-open': isOpen,
    });

    return ReactDOM.createPortal(
      isOpen ? (
        <div className={modify}>
          <div className="modal__content">
            <div className="modal__header">
              {!!title && <p className="modal__header-title">{title}</p>}
            </div>
            <div
              className="modal__close-icon-wrapper"
              onClick={this.enhancedClose}
            >
              <FontIcon icon="close" />
            </div>
            {children}
          </div>
          <div className="modal__backdrop" onClick={this.enhancedClose} />
        </div>
      ) : null,
      document.body,
    );
  }
}
