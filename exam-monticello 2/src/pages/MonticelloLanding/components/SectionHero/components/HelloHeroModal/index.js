import types from 'prop-types';
import React from 'react';

import { Modal } from '../../../../../../components/Modal';

// Styles

import './styles.scss';

// ----------------

export const HelloHeroModal = ({ isOpen, onClose }) => {
  // Render

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Hello Beetroot guys!">
      <p>Hello</p>
    </Modal>
  );
};

// ----------------

// Type of props

HelloHeroModal.propTypes = {
  prop: types.string,
};

// Default value for props

HelloHeroModal.defaultProps = {};
