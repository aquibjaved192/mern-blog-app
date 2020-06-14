import React from 'react';
import PropTypes from 'prop-types';

const RenderField = ({
 input,
 placeholder,
 type,
 Cssclass,
 id,
 meta: { touched, error, warning },
}) =>
 Cssclass === undefined ? (
  <div className="form-group">
   <div>
    <input
     className={`form-control ${touched && error ? 'redrim' : ''}`}
     style={{ height: '48px' }}
     {...input}
     placeholder={placeholder}
     type={type}
    />

    {touched &&
     ((error && (
      <p
       style={{ color: 'red', fontSize: '12px' }}
       name={error}
       className="m-0"
      >
       {error}
      </p>
     )) ||
      (warning && (
       <p className="m-0" style={{ color: 'red', fontSize: '12px' }}>
        {warning}
       </p>
      )))}
   </div>
  </div>
 ) : (
  <input
   className={Cssclass}
   {...input}
   placeholder={placeholder}
   id={id}
   type={type}
   autoComplete="on"
  />
 );

export default RenderField;
