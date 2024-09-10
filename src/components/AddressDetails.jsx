import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AddressDetails = () => {
  return (
    <div className="form-section">
      <h2>Address Details</h2>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <Field
          name="address"
          id="address"
          placeholder="Enter your address"
          className="input"
        />
        <ErrorMessage name="address" component="div" className="error" />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <Field
          name="city"
          id="city"
          placeholder="Enter your city"
          className="input"
        />
        <ErrorMessage name="city" component="div" className="error" />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Postal Code</label>
        <Field
          name="postalCode"
          id="postalCode"
          placeholder="Enter your postal code"
          className="input"
        />
        <ErrorMessage name="postalCode" component="div" className="error" />
      </div>
    </div>
  );
};

export default AddressDetails;
