import classNames from 'classnames';
import types from 'prop-types';
import React, { useState } from 'react';

// Components

import { HelloHeroModal } from '../../components/HelloHeroModal';
import { Table } from '../../components/Table';

// Static

import { usersData } from './../../static/mockData/customTableData';
import { history } from '../../utils/history';

// Styles

import './styles.scss';

// ----------------

export const CustomTable = props => {
  const [modalOpen, toggleModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const toggleModalHandler = () => {
    toggleModal(!modalOpen);

    if (modalOpen) {
      setModalData({}); // If modal open set initial modal data after close
    }
  };

  const renderActions = row => {
    return (
      <>
        {row.status === 'pending' && (
          <button
            onClick={e => {
              e.stopPropagation();
              setModalData(row);
              toggleModalHandler();
            }}
          >
            Click
          </button>
        )}
      </>
    );
  };

  const renderSocial = row => {
    return (
      <>
        {Object.keys(row.social).map(net => {
          return (
            <a href={row.social[net]} target="_black">
              <i>{net}</i>
            </a>
          );
        })}
      </>
    );
  };

  const cells = [
    {
      accessKey: 'id',
      width: 10,
      name: 'User ID',
    },
    {
      accessKey: 'firstName',
      width: 15,
      name: 'First name',
    },
    {
      accessKey: 'lastName',
      width: 15,
      name: 'Last name',
    },
    {
      accessKey: 'gender',
      width: 10,
      name: 'Gender',
    },
    {
      accessKey: 'age',
      width: 10,
      name: 'Age',
    },
    {
      accessKey: 'social',
      width: 15,
      name: 'Social',
      render: renderSocial,
    },
    {
      accessKey: 'status',
      width: 15,
      name: 'Status',
    },
    {
      accessKey: 'actions',
      width: 10,
      name: 'Actions',
      render: renderActions,
    },
  ];

  // Modify styles

  const customTable = classNames({
    'custom-table': true,
  });

  // Render

  return (
    <>
      <div className={customTable}>
        <p className="custom-table__title">Users</p>

        <Table
          data={usersData}
          cells={cells}
          rowClickHandler={row => {
            history.push(`/table/${row.id}`);
          }}
        />
      </div>

      {modalOpen && (
        <HelloHeroModal
          isOpen={modalOpen}
          onClose={toggleModalHandler}
          data={modalData}
        />
      )}
    </>
  );
};

// ----------------

// Type of props

CustomTable.propTypes = {
  prop: types.string,
};

// Default value for props

CustomTable.defaultProps = {};
