import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
    return (  
        <>
            <h2>{props.name}</h2>
        </>
    );
}
MyComponent.propTypes = {
  name: PropTypes.string,
};
export default MyComponent;