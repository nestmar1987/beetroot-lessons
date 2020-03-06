import types from 'prop-types';
import React from 'react';

// ----------------

export const List = ({
  removeHandler,
  listClassName,
  listItem: ListItem,
  list,
  extra,
}) => {
  // Render

  return (
    <div className={`list ${listClassName}`}>
      {list.map(item => {
        return <ListItem key={item.id} {...item} {...extra} />;
      })}
    </div>
  );
};

// ----------------

// Type of props

List.propTypes = {
  listClassName: types.string,
  // listItem: types.node.isRequired,
  list: types.array.isRequired,
};

// Default value for props

List.defaultProps = {};
