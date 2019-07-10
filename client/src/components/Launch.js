import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = ({ match: { params } }) => {
  const flight_number_format = parseInt(params.flight_number, 10);
  return (
    <div>
      <Query
        query={LAUNCH_QUERY}
        variables={{ flight_number: flight_number_format }}
      >
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          const {
            flight_number,
            mission_name,
            launch_year,
            launch_success,
            rocket: { rocket_name, rocket_id, rocket_type },
          } = data.launch;
          return (
            <div>
              <h2 className="display-5 my-3">
                <span className="text-secondary">Mission: </span>
                {mission_name}
              </h2>
              <h4 className="mb-3">Launch Details</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  Flight Number:
                  {' '}
                  {flight_number}
                </li>
                <li className="list-group-item">
                  Launch Year:
                  {' '}
                  {launch_year}
                </li>
                <li className="list-group-item">
                  Launch Successful:
                  {' '}
                  <span
                    className={classNames({
                      'text-success': launch_success,
                      'text-danger': !launch_success,
                    })}
                  >
                    {launch_success ? 'Yes' : 'No'}
                  </span>
                </li>
              </ul>
              <h4 className="my-3">Rocket Details</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  Rocket ID:
                  {' '}
                  {rocket_id}
                </li>
                <li className="list-group-item">
                  Rocket Name:
                  {' '}
                  {rocket_name}
                </li>
                <li className="list-group-item">
                  Rocket Type:
                  {' '}
                  {rocket_type}
                </li>
              </ul>
              <hr />
              <Link to="/" className="btn btn-primary">Back</Link>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Launch;
