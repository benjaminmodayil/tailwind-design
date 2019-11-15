import React from 'react';
import PropTypes from 'prop-types';

export default function Box({ as }) {
  const CustomTag = `${as}`;

  return <CustomTag>Hello</CustomTag>;
}

Box.propTypes = {
  as: PropTypes.string,
};

Box.defaultProps = {
  as: 'div',
};
