import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Icon from 'icon';
import Button from '../Button';
import styles from './AddButton.module.scss';

const AddButton = memo(
  ({ className, disabled, to, text, onClick, ...props }) => (
    <Button
      {...props}
      className={clsx(styles.root, className)}
      disabled={disabled}
      link={to}
      type="add"
      onClick={onClick}
    >
      <Icon name="plus" type="add" disabled={disabled} />{' '}
      <span className={styles.text}>{text}</span>
    </Button>
  )
);

AddButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
};

AddButton.defaultProps = {
  className: null,
  disabled: false,
  text: null,
  title: null,
  to: null,
  onClick: null
};

export default AddButton;
