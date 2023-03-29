import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star';

function Stars(props) {
  const { count } = props;

  if (count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }

  const arr = new Array(count).fill(undefined);
  
  return (
    <ul className='card-body-stars'>
      {arr.map((_, index) => <Star key={index} />)}
    </ul>
  )
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}

export default Stars
