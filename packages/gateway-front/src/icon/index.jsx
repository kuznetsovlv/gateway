import React from 'react';
import PropTypes from 'prop-types';

import CrossIcon from './CrossIcon';
import EditIcon from './EditIcon';
import HomeIcon from './HomeIcon';
import MinusIcon from './MinusIcon';
import OutIcon from './OutIcon';
import PlusIcon from './PlusIcon';

//All icons got from https://www.flaticon.com/uicons/interface-icons

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'cross':
      return <CrossIcon {...props} />;
    case 'edit':
      return <EditIcon {...props} />;
    case 'home':
      return <HomeIcon {...props} />;
    case 'minus':
      return <MinusIcon {...props} />;
    case 'out':
      return <OutIcon {...props} />;
    case 'plus':
      return <PlusIcon {...props} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.oneOf(['cross', 'plus', 'minus', 'edit', 'out', 'home'])
    .isRequired,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['normal', 'delete', 'submit', 'add', 'ghost'])
};

Icon.defaultProps = { size: 20, disabled: false, type: 'normal' };

export default Icon;
