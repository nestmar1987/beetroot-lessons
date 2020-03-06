import React from 'react';
import { Shell } from '../components/Shell';

// Static

import { usersData } from '../static/mockData/customTableData';
import { history } from '../utils/history';

// ----------------

export class TableRowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const {
      params: { rowId },
    } = this.props.match;

    const userData = usersData.find(({ id }) => id === rowId);

    this.setState({
      user: userData,
    });
  }

  render() {
    const { user } = this.state;

    return (
      <Shell>
        <button onClick={() => history.goBack()}>Back</button>
        <div>
          <p>{`ID ${user.id}`}</p>
          <p>{`Last name ${user.lastName}`}</p>
        </div>
      </Shell>
    );
  }
}
