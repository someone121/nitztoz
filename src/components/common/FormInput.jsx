import React from 'react';
import './FormInput.css';

const FormInput = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  className = '',
  error,
  label,
  ...props
}) => {
  const inputId = id || name;
  const inputClasses = ['form-input', className, error ? 'form-input-error' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClasses}
        {...props}
      />
      {error && (
        <span className="form-error">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
