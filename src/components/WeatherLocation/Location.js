import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ( { city } ) => (
    <div className="LocationCont">
        <h1>{ city }</h1>
    </div>
);

Location.prototype = {
    city: PropTypes.string.isRequired,
}

export default Location;