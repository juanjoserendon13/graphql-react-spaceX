import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({
  data: {
    flight_number, mission_name, launch_date_local, launch_success,
  },
}) => {
  const successMission = classNames({
    'text-success': launch_success,
    'text-danger': !launch_success,
  });
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-8">
          <h4>
            Mission
            {' '}
            <span className={successMission}>{mission_name}</span>
          </h4>
          <p>
            Date:
            {' '}
            <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-4">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary" type="button">
          Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
