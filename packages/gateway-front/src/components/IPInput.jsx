import React, { useState, useCallback, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import { numIPToStrIp, strIPToNumIP } from 'utils';

const validators = [
  str =>
    Number.isInteger(strIPToNumIP(str))
      ? { valid: true }
      : { valid: false, message: 'Invalid ip format' }
];

const IPInput = memo(({ value, onChange, ...props }) => {
  const [ip, setIp] = useState(numIPToStrIp(value) ?? '');

  useEffect(() => {
    setIp(numIPToStrIp(value) ?? '');
  }, [value]);

  return (
    <Input
      {...props}
      value={ip}
      validators={validators}
      onChange={useCallback(
        (value, conf) => {
          setIp(value);
          onChange(strIPToNumIP(value), conf);
        },
        [onChange]
      )}
    />
  );
});

IPInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

IPInput.defaultProps = {
  className: null,
  label: null,
  name: null,
  value: null,
  placeholder: '',
  required: false,
  disabled: false
};

export default IPInput;
