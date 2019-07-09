import React, { Component, lazy, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// Import components
const LaunchItem = lazy(() => import('./LaunchItem'));
const MissionKey = lazy(() => import('./MissionKey'));

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
  launches {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
  }
}`;

class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="display-5 my-3">Launches</h2>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              console.log(data);
              return (
                <Fragment>
                  {data.launches.map(l => (
                    <LaunchItem
                      key={l.flight_number}
                      data={l}
                    />
                  ))}
                </Fragment>
              );
            }
          }
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
