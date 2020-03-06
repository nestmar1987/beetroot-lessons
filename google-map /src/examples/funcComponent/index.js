import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Components

import { Table } from '../../components/Table';

// Styles

import './styles.scss';

// ----------------

export const CustomTable = props => {
  // Modify styles

  const customTable = classNames({
    'custom-table': true,
  });

  // Render

  return (
    <div className={customTable}>
      <p className="custom-table__title">Users</p>
      <Table />
    </div>
  );
};

// ----------------

// Type of props

CustomTable.propTypes = {
  prop: types.string,
};

// Default value for props

CustomTable.defaultProps = {};
