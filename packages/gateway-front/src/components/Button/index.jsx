import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Button.module.scss';

const Button = memo(
  ({ className, children, circled, disabled, link, title, type, onClick }) => {
    className = clsx(
      styles.root,
      {
        [styles.circle]: circled,
        [styles.add]: !disabled && type === 'add',
        [styles.normal]: !disabled && type === 'normal',
        [styles.submit]: !disabled && type === 'submit',
        [styles.delete]: !disabled && type === 'delete',
        [styles.ghost]: !disabled && type === 'ghost',
        [styles.disabled]: disabled
      },
      className
    );

    const handleClick = useCallback(
      event => {
        event.preventDefault();
        event.stopPropagation();
        if (onClick) {
          onClick();
        }
      },
      [onClick]
    );

    title = disabled ? null : title;

    return link && !disabled ? (
      <Link
        className={clsx(styles.root, className)}
        to={link}
        title={title}
        onClick={onClick}
      >
        {children}
      </Link>
    ) : (
      <button
        className={className}
        type={type === 'submit' ? 'submit' : 'button'}
        disabled={disabled}
        title={title}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  circled: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'delete', 'submit', 'add', 'ghost']),
  onClick: PropTypes.func
};

Button.defaultProps = {
  className: null,
  circled: false,
  children: null,
  disabled: false,
  link: null,
  title: null,
  type: 'normal',
  onClick: null
};

export default Button;
