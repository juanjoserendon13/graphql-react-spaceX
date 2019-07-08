import React from 'react';

const LaunchItem = ({
  data: {
    flight_number, mission_name, launch_date_local, launch_success,
  },
}) => {
  const mission = `Mission: ${mission_name}`;
  const date = `Date: ${launch_date_local}`;
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-8">
          <h4>
            {mission}
          </h4>
          <p>
            {date}
          </p>
        </div>
        <div className="col-md-4">
          <button className="btn btn-secondary" type="button">
          Launch Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
