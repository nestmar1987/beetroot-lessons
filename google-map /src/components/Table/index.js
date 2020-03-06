import React, { Component } from 'react';
import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

class Table extends Component {
  // Type of props

  static propTypes = {
    prop: types.string,
  };

  // Default value for props

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { rowClickHandler, data, cells } = this.props;
    // Modify

    const table = classNames({
      [`table`]: true,
    });

    const tableHeadCell = align =>
      classNames({
        [`table__head-cell`]: true,
        [`table__head-cell--align-${align}`]: align,
      });

    const tableBodyCell = align =>
      classNames({
        [`table__body-cell`]: true,
      });

    return (
      <div className={table}>
        <div className="table__head">
          {cells.map((cell, index) => {
            return (
              <div
                className={tableHeadCell(cell.align)}
                style={{
                  maxWidth: `${cell.width}%`,
                  minWidth: `${cell.width}%`,
                }}
                key={index}
              >
                {cell.name}
              </div>
            );
          })}
        </div>
        <div className="table__body">
          {data.map((row, index) => {
            return (
              <div
                className="table__body-row"
                onClick={() => rowClickHandler(row)}
                key={index}
              >
                {cells.map((cell, index) => {
                  return (
                    <div
                      className={tableBodyCell(cell.align)}
                      style={{
                        maxWidth: `${cell.width}%`,
                        minWidth: `${cell.width}%`,
                      }}
                      key={index}
                    >
                      {cell.render ? cell.render(row) : row[cell.accessKey]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export { Table };
